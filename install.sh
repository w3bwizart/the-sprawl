#!/bin/bash
# The Sprawl // Corporate Installer
# "Injecting the Lattice into the local host."

set -e

echo -e "\033[0;36m🌆 THE SPRAWL // INSTALLATION PROTOCOL\033[0m"

# 1. Define Fixed Paths
HIDDEN_CORE="$HOME/.sprawl"
VISIBLE_HUBS="$HOME/Documents/SprawlHubs"
BIN_PATH="/usr/local/bin/sprawl"

# 2. Install Core (The Brain)
echo -e "\033[0;33m[..] Installing Core to hidden sector: $HIDDEN_CORE\033[0m"

# We clone the repo to allow for self-updates via 'sprawl sync'
if [ -d "$HIDDEN_CORE/.git" ]; then
    echo "Updating existing installation..."
    (cd "$HIDDEN_CORE" && git pull)
else
    # Clone the repo. using the user's remote.
    # We use the current directory's remote if running from dev, or default.
    REPO_URL="https://github.com/w3bwizart/the-sprawl.git"
    git clone "$REPO_URL" "$HIDDEN_CORE"
fi

# 3. Create Root Hubs Folder (The Workspace)
echo -e "\033[0;33m[..] Creating Hubs root: $VISIBLE_HUBS\033[0m"
mkdir -p "$VISIBLE_HUBS"

# 4. Install CLI (The Arm)
echo -e "\033[0;33m[..] Linking CLI to $BIN_PATH (Requires Sudo)\033[0m"
# In the cloned repo, the script is at packages/cli/sprawl
chmod +x "$HIDDEN_CORE/packages/cli/sprawl"
sudo ln -sf "$HIDDEN_CORE/packages/cli/sprawl" "$BIN_PATH"

echo -e "\033[0;32m[OK] System Online.\033[0m"
echo ""
echo "📂 Hub Location: $VISIBLE_HUBS"
echo "🧠 Core Location: $HIDDEN_CORE"
echo "👉 To create a new hub:"
echo "   cd $VISIBLE_HUBS"
echo "   mkdir My-New-Hub && cd My-New-Hub"
echo "   sprawl init \"My New Hub\""

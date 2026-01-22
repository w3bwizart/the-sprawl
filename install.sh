#!/bin/bash
# The Sprawl // Corporate Installer
# "Injecting the Lattice into the local host."

set -e

echo -e "\033[0;36m🌆 THE SPRAWL // INSTALLATION PROTOCOL\033[0m"

# 1. Define Fixed Paths
HIDDEN_CORE="$HOME/.sprawl"
VISIBLE_HUBS="$HOME/Documents/Antigravity_Hubs"
BIN_PATH="/usr/local/bin/sprawl"

# 2. Install Core (The Brain)
echo -e "\033[0;33m[..] Installing Core to hidden sector: $HIDDEN_CORE\033[0m"
mkdir -p "$HIDDEN_CORE"
cp -r packages/core "$HIDDEN_CORE/"
# Also copy the CLI script for internal reference if needed, but we install to bin separately.
cp -r packages/cli "$HIDDEN_CORE/"

# 3. Create Root Hubs Folder (The Workspace)
echo -e "\033[0;33m[..] Creating Hubs root: $VISIBLE_HUBS\033[0m"
mkdir -p "$VISIBLE_HUBS"

# 4. Install CLI (The Arm)
echo -e "\033[0;33m[..] Linking CLI to $BIN_PATH (Requires Sudo)\033[0m"
# We link to the HIDDEN copy so the user can delete the source repo if they want?
# OR we link to the user's checkout?
# User said "install this on all the employees computers".
# Best practice: Copy the script to the hidden location and link THAT, making it self-contained.
chmod +x "$HIDDEN_CORE/cli/sprawl"
sudo ln -sf "$HIDDEN_CORE/cli/sprawl" "$BIN_PATH"

echo -e "\033[0;32m[OK] System Online.\033[0m"
echo ""
echo "📂 Hub Location: $VISIBLE_HUBS"
echo "🧠 Core Location: $HIDDEN_CORE"
echo "👉 To create a new hub:"
echo "   cd $VISIBLE_HUBS"
echo "   mkdir My-New-Hub && cd My-New-Hub"
echo "   sprawl init \"My New Hub\""

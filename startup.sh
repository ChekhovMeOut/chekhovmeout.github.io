!/bin/bash

# Simple thing to open a couple of programs i often use together.

chmod +x startup.sh

echo "Starting Claude..."
"C:/Users/wiatr/AppData/Local/AnthropicClaude/claude.exe" &

echo "Starting firefox..."
"C:/Program Files/Mozilla Firefox/firefox.exe" &

echo "Starting VScode..."
code & --update-extentions

sleep 5

echo "All programs have been started!"

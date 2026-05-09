#!/bin/bash
# Resets local user and progress data for a clean demo state
PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"

echo "Resetting demo data..."
rm -f "$PROJECT_ROOT/data/users/"*.json
rm -f "$PROJECT_ROOT/data/progress/"*.json
echo "Done. Data directories are now empty."

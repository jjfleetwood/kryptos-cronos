#!/bin/bash
# Runs type check, lint, and build. Reports pass/fail for each step.
set -e

PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
LOG_FILE="$PROJECT_ROOT/devops/logs/build-check.log"

mkdir -p "$PROJECT_ROOT/devops/logs"
echo "[$(date)] Running build check..." | tee "$LOG_FILE"

cd "$PROJECT_ROOT/app"

echo "--- Type check ---" | tee -a "$LOG_FILE"
npx tsc --noEmit 2>&1 | tee -a "$LOG_FILE" && echo "PASS: Type check" || echo "FAIL: Type check"

echo "--- Lint ---" | tee -a "$LOG_FILE"
npm run lint 2>&1 | tee -a "$LOG_FILE" && echo "PASS: Lint" || echo "FAIL: Lint"

echo "--- Build ---" | tee -a "$LOG_FILE"
npm run build 2>&1 | tee -a "$LOG_FILE" && echo "PASS: Build" || echo "FAIL: Build"

echo "[$(date)] Build check complete. See $LOG_FILE for full output."

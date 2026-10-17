#!/usr/bin/env bash
# ==============================================================================
# SandSquircle UI Agent Skill - Universal Installer (Linux & macOS)
# Installs sandsquircle into Google Antigravity / Claude Code / Cursor skills
# ==============================================================================

set -euo pipefail

SKILL_NAME="sandsquircle"
REPO_URL="https://github.com/akbar-shaik/SandSquircle-UI-SKILL-AI.git"

# Color formatting
GREEN="\033[0;32m"
TEAL="\033[0;36m"
CHARCOAL="\033[1;30m"
SAND="\033[0;33m"
BOLD="\033[1m"
RESET="\033[0m"

echo -e "${SAND}${BOLD}"
echo "  ___                 _ ____                    _      "
echo " / ___|  __ _ _ __   __| / ___|  __ _ _   _ _ __ (_)_ __ "
echo " \___ \ / _\` | '_ \ / _\` \___ \ / _\` | | | | '_ \| | '__|"
echo "  ___) | (_| | | | | (_| |___) | (_| | |_| | |_) | | |   "
echo " |____/ \__,_|_| |_|\__,_|____/ \__, |\__,_| .__/|_|_|   "
echo "                                   |_|     |_|           "
echo -e "${RESET}"
echo -e "${TEAL}${BOLD}SandSquircle UI Agent Skill Installer${RESET}"
echo -e "Warm Sand & Charcoal Soft-Squircle Design System for AI Agents\n"

# Parse CLI arguments
INSTALL_MODE="global"
TARGET_DIR="${HOME}/.gemini/antigravity/skills/${SKILL_NAME}"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --local|--project)
      INSTALL_MODE="local"
      TARGET_DIR="$(pwd)/.agent/skills/${SKILL_NAME}"
      shift
      ;;
    --path)
      TARGET_DIR="$2"
      shift 2
      ;;
    -h|--help)
      echo "Usage: install.sh [--local | --path <custom_path>]"
      echo "  --local, --project : Install to .agent/skills/sandsquircle in current directory"
      echo "  --path <path>      : Install to specified custom path"
      exit 0
      ;;
    *)
      echo "Unknown flag: $1"
      exit 1
      ;;
  esac
done

echo -e "Target directory: ${BOLD}${TARGET_DIR}${RESET} (${INSTALL_MODE} mode)"

# Create target directory
mkdir -p "$(dirname "${TARGET_DIR}")"

# Check if script is executed from inside an existing cloned repository
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ -f "${SCRIPT_DIR}/SKILL.md" && "${SCRIPT_DIR}" != "${TARGET_DIR}" ]]; then
  echo -e "Copying skill files from local repository..."
  rm -rf "${TARGET_DIR}"
  mkdir -p "${TARGET_DIR}"
  cp -R "${SCRIPT_DIR}/." "${TARGET_DIR}/"
  # Clean git metadata in destination if copied
  rm -rf "${TARGET_DIR}/.git"
else
  # Clone directly from GitHub
  echo -e "Fetching latest release from GitHub (${REPO_URL})..."
  if [[ -d "${TARGET_DIR}" ]]; then
    echo -e "Updating existing installation in ${TARGET_DIR}..."
    cd "${TARGET_DIR}"
    if [[ -d ".git" ]]; then
      git pull --quiet origin main || true
    else
      cd ..
      rm -rf "${TARGET_DIR}"
      git clone --depth 1 "${REPO_URL}" "${TARGET_DIR}"
    fi
  else
    git clone --depth 1 "${REPO_URL}" "${TARGET_DIR}"
  fi
fi

# Verify installation
if [[ -f "${TARGET_DIR}/SKILL.md" ]]; then
  echo -e "\n${GREEN}✔ Installation successful!${RESET}"
  echo -e "Skill location: ${BOLD}${TARGET_DIR}${RESET}"
  echo -e "\n${BOLD}Triggering SandSquircle with your AI Agent:${RESET}"
  echo -e "  • ${TEAL}\"Use the sandsquircle skill to design my React dashboard\"${RESET}"
  echo -e "  • ${TEAL}\"Refactor this page into the SandSquircle warm sand daylight aesthetic\"${RESET}"
  echo -e "  • ${TEAL}\"Implement the Jetpack Compose ComposeTheme.kt from sandsquircle for Android\"${RESET}"
  echo -e "  • ${TEAL}\"Show me the SandSquircle demo preview\"${RESET}\n"
else
  echo -e "\n\033[0;31m✖ Error: SKILL.md could not be verified in ${TARGET_DIR}\033[0m"
  exit 1
fi

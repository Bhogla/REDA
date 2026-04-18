#!/bin/bash

# REDA GitHub Sync Utility
# This script automates the process of staging changes, committing, pulling latest updates, and pushing to GitHub.

# 1. Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting GitHub Sync for REDA...${NC}"

# 2. Check for commit message
if [ "$1" == "" ]; then
    echo -e "${YELLOW}Enter commit message:${NC} "
    read message
else
    message="$1"
fi

if [ "$message" == "" ]; then
    echo -e "${RED}Error: Commit message cannot be empty.${NC}"
    exit 1
fi

# 3. Git Operations
echo -e "${BLUE}Staging all changes...${NC}"
git add .

echo -e "${BLUE}Committing changes...${NC}"
git commit -m "$message"

echo -e "${BLUE}Pulling latest changes from remote (main)...${NC}"
if git pull origin main --rebase; then
    echo -e "${GREEN}Pull successful!${NC}"
else
    echo -e "${RED}Error: Pull failed. Please resolve conflicts manually.${NC}"
    exit 1
fi

echo -e "${BLUE}Pushing to GitHub (main)...${NC}"
if git push origin main; then
    echo -e "${GREEN}✅ Success! Your changes are now live on GitHub.${NC}"
else
    echo -e "${RED}Error: Push failed.${NC}"
    exit 1
fi

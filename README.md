# REDA – Renewable Energy Development Association

Promoting solar energy adoption and sustainable development across Uttarakhand, India.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

---

## 🛠 Automation & Git

To make pushing updates to GitHub easier, a `sync.sh` utility script has been provided at the root of the project.

### How to push updates:
Instead of running individual git commands, you can simply run:

```bash
./sync.sh "Your commit message here"
```

**What this script does:**
1. Stages all changes (`git add .`)
2. Commits with your message.
3. Pulls latest changes from GitHub (`git pull --rebase`).
4. Pushes to GitHub (`git push origin main`).
5. Success! Your changes will automatically trigger a Vercel deployment if configured.

---

## 📂 Project Structure
- `src/components`: Reusable UI components.
- `src/pages`: Main website pages (Home, About, Projects, etc.).
- `src/assets`: Image and logo assets.
- `src/context`: State management for navigation and global settings.

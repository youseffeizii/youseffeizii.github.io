# Bento Grid Portfolio Website (پورتفولیو مدرن بنتو گرید)

A modern, high-performance, responsive **Bento Grid Portfolio** website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, inspired by modern award-winning design architecture. Pre-configured for free hosting on **GitHub Pages**.

---

## ✨ Features (ویژگی‌ها)

- 🍱 **Bento Grid Architecture**: Faithful replication of the reference layout with rounded cards, subtle glassmorphic glow, and asymmetric structure.
- 👤 **Hero Profile Card**: Concentric glowing rings (magenta/pink inner halo + crisp white border), customized typography, interactive copy-to-clipboard email chip, and continuously spinning vinyl record badge (`2024 • MY DESIGN PORTFOLIO`).
- 🎨 **Dual-Theming (Dark & Light Mode)**:
  - **Dark Mode (Default)**: Deep obsidian/charcoal surfaces, glowing neon/violet accents, high-contrast readable typography.
  - **Light Mode**: Matching the reference image's pastel color palette (lavender `#7B88D7`, mint `#9FE3DB`, violet `#8C79C8`, amber `#F5BF62`, charcoal `#323639`).
  - Preference is automatically persisted in `localStorage`.
- 🌐 **Bilingual Support (Persian & English)**:
  - Instant FA/EN toggle switch.
  - Persian (FA): Sets `dir="rtl"` with modern Google Font **Vazirmatn**.
  - English (EN): Sets `dir="ltr"` with modern **Plus Jakarta Sans** / **Inter**.
  - Preference persisted in `localStorage`.
- 📸 **Dynamic Website Showcase & Live Screenshots**:
  - Automatically fetches live screenshots of projects using the automated Microlink API (`https://api.microlink.io`).
  - Sleek shimmer skeleton loader while screenshots are rendering.
  - Resilient fallback mockup graphics if network is offline.
  - Direct **"View Live" (مشاهده سایت)** button with external link icon on every project card.
  - Interactive project detail modal with highlights, tech stack, and live link.
- 🚀 **GitHub Pages Ready**:
  - `vite.config.js` configured with `base: './'` for flawless relative asset resolution.
  - Ready-to-use GitHub Actions CI/CD workflow (`.github/workflows/deploy.yml`) for 1-click automatic deployments on `git push`.

---

## 🛠️ Tech Stack (تکنولوژی‌ها)

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (custom extended palette)
- **Animations**: Framer Motion (spring physics, micro-interactions, layout transitions)
- **Icons**: Lucide React
- **Typography**: Google Fonts (Plus Jakarta Sans & Vazirmatn)

---

## 📁 Project Structure (ساختار پروژه)

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg                 # Custom Bento Grid SVG icon
│   └── original-834d3973...webp    # Reference design photo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Header with logo, theme & language switches
│   │   ├── SidebarNav.jsx          # Vertical sidebar navigation tabs
│   │   ├── BentoGrid.jsx           # Master Bento Grid layout
│   │   ├── HeroCard.jsx            # Profile card with halo ring, email chip & spinning badge
│   │   ├── ShowcaseCard.jsx        # Center flamingo papercraft showcase card with play button
│   │   ├── StatCard.jsx            # Pastel metric cards (Mint 251, Violet 156)
│   │   ├── ClientsCard.jsx         # Charcoal partner logos card (Apple, Google, Figma)
│   │   ├── AbstractArtCard.jsx     # Split 3D ribbon sphere + Amber 172 awards card
│   │   ├── ProjectCard.jsx         # Project card with Microlink screenshot & "View Live"
│   │   ├── ProjectsSection.jsx     # Filterable project showcase section
│   │   ├── ProjectModal.jsx        # Interactive live preview & detail modal
│   │   ├── ThemeToggle.jsx         # Smooth dark/light switch
│   │   ├── LanguageToggle.jsx      # FA / EN switcher with animated pill
│   │   └── Footer.jsx              # Responsive footer
│   ├── context/
│   │   └── AppContext.jsx          # Theme, language, RTL/LTR state manager
│   ├── data/
│   │   ├── projects.js             # Project data structure with URLs & tags
│   │   └── translations.js         # Full English & Persian translations
│   ├── styles/
│   │   └── index.css               # Tailwind directives, skeleton shimmers, fonts
│   ├── App.jsx                     # Application layout root
│   └── main.jsx                    # React entrypoint
├── index.html                      # HTML root with fonts and meta tags
├── vite.config.js                  # Configured with base: './' for GitHub Pages
├── tailwind.config.js              # Theme extensions and animation utilities
├── postcss.config.js
└── package.json
```

---

## 💻 Getting Started (اجرا در محیط لوکال)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deploy to GitHub Pages (انتشار رایگان در گیت‌هاب پیجز)

### Option 1: Automated Deployment via GitHub Actions (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Bento Grid Portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically trigger, build the Vite app, and publish it to:
   `https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>/`

### Option 2: Manual Deployment via `gh-pages` Branch
If you prefer deploying via the `gh-pages` npm package:
```bash
npm install --save-dev gh-pages
```
Add to `scripts` in `package.json`:
```json
"deploy": "vite build && gh-pages -d dist"
```
Then run:
```bash
npm run deploy
```

---

## ⚙️ Customization (شخصی‌سازی محتوا)

- **Change Projects**: Open `src/data/projects.js` to add, edit, or remove projects. Changing `liveUrl` automatically updates the live screenshot preview!
- **Change Profile Info & Copy**: Edit `src/data/translations.js` to customize your name, greeting, email, role, bio, and translations.
- **Change Avatar Photo**: In `src/components/HeroCard.jsx`, update the `<img>` src with your own portrait photo URL or place your image in `public/assets/` and reference it.

---

## 📄 License
MIT License. Free to use for personal portfolios and commercial work.

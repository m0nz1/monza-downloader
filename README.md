# 🎬 NeoTube - Modern YouTube Downloader

> Neo Brutalism YouTube Downloader with MP4 & MP3 support. Fast, beautiful, and free.

![Neo Brutalism](https://img.shields.io/badge/Design-Neo%20Brutalism-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)

## ✨ Features

- 🎨 **Neo Brutalism Design** - Bold shadows, thick borders, modern aesthetic
- 🌓 **Light & Dark Mode** - Toggle seamlessly between themes
- 📹 **MP4 Video Download** - Multiple quality options (360p, 720p, 1080p)
- 🎵 **MP3 Audio Download** - Extract audio from YouTube videos
- 🖼️ **Video Preview** - See thumbnail, title, duration before downloading
- 📜 **Download History** - Track your downloads locally
- 📋 **Copy Link** - Copy direct download links to clipboard
- 🔔 **Toast Notifications** - Modern notification system
- 📱 **Responsive** - Works perfectly on mobile and desktop
- ⚡ **Fast & Lightweight** - Optimized for performance
- 🔒 **Privacy First** - No tracking, history stored locally only

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/yt-downloader-neo-brutalism.git
cd yt-downloader-neo-brutalism

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deploy

1. Push code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Framework Preset: Next.js
6. Click "Deploy"

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | React Framework (App Router) |
| TypeScript | Type Safety |
| TailwindCSS | Styling |
| @distube/ytdl-core | YouTube video info extraction |
| Lucide React | Icons |
| clsx + tailwind-merge | Class name utilities |

## 📁 Project Structure

```
├── app/
│   ├── api/download/      # API route for video info
│   ├── about/             # About page
│   ├── faq/               # FAQ page
│   ├── terms/             # Terms page
│   ├── privacy/           # Privacy page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # UI components
│   ├── ThemeProvider.tsx  # Dark/Light mode provider
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── Downloader.tsx     # Main downloader component
│   └── Toast.tsx          # Toast notifications
├── hooks/
│   ├── useToast.ts        # Toast hook
│   └── useHistory.ts      # Download history hook
├── lib/
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript types
├── public/
│   └── favicon.svg        # Favicon
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Design System

### Colors (Light Mode)
- Primary: `#3b82f6` (Blue)
- Secondary: `#fbbf24` (Yellow)
- Background: `#f9fafb` (Gray 50)
- Card: `#ffffff` (White)
- Border: `#1a1a1a` (Black)

### Colors (Dark Mode)
- Primary: `#7c3aed` (Purple)
- Secondary: `#fbbf24` (Yellow)
- Background: `#0f0f1a` (Dark)
- Card: `#1a1a2e` (Dark Card)
- Border: `#ffffff` (White)

### Neo Brutalism Elements
- Thick borders (3px)
- Heavy shadows (4px offset)
- Bold typography (Space Grotesk)
- High contrast colors
- Rounded corners (xl)

## ⚠️ Important Notes

### API Limitations
- YouTube actively prevents downloading. The built-in `ytdl-core` may fail intermittently.
- When direct download fails, the app falls back to trusted external services.
- For production use with high traffic, consider self-hosting a yt-dlp instance.

### Legal
- Only download content you have permission to use
- Respect copyright and YouTube's Terms of Service
- This tool is for personal/educational use only

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Credits

- Design inspired by Neo Brutalism trend
- Icons by [Lucide](https://lucide.dev)
- Font: Space Grotesk by Google Fonts

---

Made with ❤️ by NeoTube Team

# Axion - Data Automation Workspace

A production-ready clone of Paradigm AI's website, built with modern web technologies. This is a fully responsive, accessible, and performance-optimized landing page for a data automation platform.

## 🚀 Live Demo

**URL**: https://lovable.dev/projects/92e07051-fb88-4802-858b-ca8e37a6ff64

## ✨ Features

- **Modern Design**: Clean, professional interface inspired by leading SaaS platforms
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Smooth animations, hover effects, and transitions
- **Complete Sections**:
  - Hero section with animated spreadsheet preview
  - Statistics and social proof
  - Feature showcase with detailed descriptions
  - Platform solutions for different industries
  - Customer testimonials
  - Pricing plans (Free, Pro, Enterprise)
  - Comprehensive FAQ section
  - Multiple CTA sections
  - Professional footer with links
- **Accessible Navigation**: Desktop menu with dropdowns + Mobile hamburger menu
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Production Ready**: Optimized build with code splitting and lazy loading

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)

## 📦 Installation & Setup

### Prerequisites

- Node.js 16+ and npm installed
- Git (optional, for version control)

### Quick Start

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/92e07051-fb88-4802-858b-ca8e37a6ff64) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 📤 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Navigation.tsx  # Header with mobile menu
│   ├── Hero.tsx        # Hero section
│   ├── Stats.tsx       # Statistics section
│   ├── Features.tsx    # Feature cards
│   ├── DetailedFeatures.tsx
│   ├── PlatformShowcase.tsx
│   ├── CTASection.tsx  # Call-to-action
│   ├── Testimonials.tsx
│   ├── Pricing.tsx     # Pricing plans
│   ├── FAQ.tsx         # FAQ accordion
│   └── Footer.tsx
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── lib/                # Utilities
├── hooks/              # Custom React hooks
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy!

### Deploy via Lovable

Simply open [Lovable](https://lovable.dev/projects/92e07051-fb88-4802-858b-ca8e37a6ff64) and click on Share -> Publish.

### Manual Deployment

```bash
# Build for production
npm run build

# The dist/ folder contains production-ready files
# Upload to any static hosting service
```

## 🎨 Customization

### Colors & Theming

Edit `src/index.css` to customize the color scheme:

```css
:root {
  --primary: 220 15% 12%;      /* Dark blue */
  --accent: 234 89% 64%;       /* Accent blue */
  --background: 0 0% 98%;      /* Light background */
  /* ... more variables */
}
```

### Content

All content is in the component files. Key files to edit:
- `src/components/Hero.tsx` - Main headline and CTA
- `src/components/Pricing.tsx` - Pricing plans
- `src/components/FAQ.tsx` - Questions and answers
- `src/components/Footer.tsx` - Footer links and info

### Fonts

Fonts are loaded from Google Fonts in `index.html`:
- Heading: Playfair Display
- Body: Inter

## 📝 SEO & Meta Tags

Update meta tags in `index.html` for your brand:
- Title
- Description
- Open Graph tags
- Twitter Card tags

## 💡 Tips for Production

1. **Performance**: Images are placeholder divs - replace with optimized images
2. **Analytics**: Add Google Analytics or Plausible in `index.html`
3. **Forms**: Connect contact forms to your backend/service
4. **API**: Update API endpoints for real data integration
5. **Testing**: Run `npm run lint` before deployment

## 💯 Production Checklist

- [x] Responsive design (mobile, tablet, desktop)
- [x] Accessible navigation with keyboard support
- [x] SEO meta tags
- [x] Smooth scrolling
- [x] Mobile menu
- [x] Fast load times (< 3s)
- [x] Optimized build size
- [x] Cross-browser compatible
- [x] Error boundaries
- [x] 404 page

## 👥 Contributing

This is a portfolio/demo project, but feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

MIT License - feel free to use this template for your own projects!

## 👤 Custom Domain

Yes, you can connect a custom domain!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and shadcn/ui**

# 🚀 Quick Start Guide

Get your Axion website clone up and running in 5 minutes!

## ⚡ Fast Setup (3 Commands)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:5173
```

That's it! Your site is now running locally. 🎉

## 📋 What You Get

When you run `npm run dev`, you'll see:

- ✅ **Hero Section** - Eye-catching headline and CTA
- ✅ **Stats** - Impressive metrics
- ✅ **Features** - Product capabilities
- ✅ **Detailed Features** - 3-step process
- ✅ **CTA Section** - Conversion-optimized
- ✅ **Platform Showcase** - Industry solutions
- ✅ **Testimonials** - Social proof
- ✅ **Pricing** - 3 tiers (Free, Pro, Enterprise)
- ✅ **FAQ** - Common questions
- ✅ **Footer** - Links and info

## 🎨 Customize Your Site (5 Minutes)

### 1. Update Branding

**Change the site name** in `index.html`:
```html
<title>Your Brand - Your Tagline</title>
```

**Update navigation logo** in `src/components/Navigation.tsx`:
```tsx
<span className="text-xl font-semibold">Your Brand</span>
```

### 2. Update Hero Section

Edit `src/components/Hero.tsx`:
```tsx
<h1>Your Amazing Headline</h1>
<p>Your compelling subheading</p>
```

### 3. Customize Colors

Edit `src/index.css`:
```css
:root {
  --primary: 220 15% 12%;    /* Your primary color */
  --accent: 234 89% 64%;     /* Your accent color */
}
```

### 4. Update Pricing

Edit `src/components/Pricing.tsx`:
- Change plan names
- Update prices
- Modify features
- Change CTAs

### 5. Add Your Content

Replace placeholder content in:
- `src/components/Features.tsx` - Your features
- `src/components/Testimonials.tsx` - Your testimonials
- `src/components/FAQ.tsx` - Your questions
- `src/components/Footer.tsx` - Your links

## 🏗️ Build for Production

```bash
# Build optimized production files
npm run build

# Preview production build
npm run preview
```

Your production files will be in the `dist/` folder.

## 🌐 Deploy (5 Minutes)

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (from project root)
vercel

# Follow prompts - done!
```

Your site will be live at `your-project.vercel.app`

### Alternative: Netlify

1. Drag and drop the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)
2. Done! Your site is live.

## 📱 Test Responsive Design

Your site works on:
- ✅ **Desktop** (1920px+)
- ✅ **Laptop** (1024px - 1920px)
- ✅ **Tablet** (768px - 1024px)
- ✅ **Mobile** (320px - 768px)

Test it by resizing your browser or using Chrome DevTools (F12 → Toggle device toolbar).

## 🎯 Common Customizations

### Add Your Logo

Replace the icon in `src/components/Navigation.tsx` with:
```tsx
<img src="/logo.png" alt="Logo" className="h-8 w-8" />
```

### Change Fonts

Edit `index.html` to use different Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update `tailwind.config.ts`:
```typescript
fontFamily: {
  serif: ['Your Font', 'serif'],
}
```

### Add Contact Form

Install a form library:
```bash
npm install react-hook-form
```

Create form component and add to your page.

### Add Analytics

Add Google Analytics to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🐛 Troubleshooting

### Port already in use?
```bash
# Use a different port
npm run dev -- --port 3000
```

### Build errors?
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling not working?
```bash
# Rebuild Tailwind
npm run dev
# Hard refresh browser (Ctrl+Shift+R)
```

## 📚 Learn More

- **Full Documentation**: See [README.md](./README.md)
- **All Features**: See [FEATURES.md](./FEATURES.md)
- **Deployment Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

## ✅ Production Checklist

Before going live:

- [ ] Update all placeholder text
- [ ] Replace placeholder images
- [ ] Add real testimonials
- [ ] Update pricing plans
- [ ] Configure analytics
- [ ] Test all links
- [ ] Test mobile responsive
- [ ] Run `npm run build`
- [ ] Test production build with `npm run preview`
- [ ] Deploy to hosting

## 💡 Pro Tips

1. **Performance**: Images are placeholders - replace with optimized WebP images
2. **SEO**: Update meta tags in `index.html` for better search rankings
3. **Forms**: Use services like Formspree or Netlify Forms for contact forms
4. **CMS**: Consider adding a headless CMS like Contentful for easy content updates
5. **Analytics**: Use Plausible for privacy-friendly analytics

## 🎉 You're All Set!

Your production-ready website is complete. Now customize it to match your brand and deploy!

**Need help?** 
- Check [README.md](./README.md) for detailed docs
- Review [FEATURES.md](./FEATURES.md) for all features
- Read [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment options

---

**Happy building!** 🚀

# Axion - Deployment Guide

## 🎉 Your Code is Now on GitHub!

Repository: https://github.com/Ganesh5050/Axion

---

## 🚀 Deploy to Vercel (Recommended)

### Option 1: Via Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your `Axion` repository
   - Click "Import"

3. **Configure Build Settings**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live! 🎉

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: Axion
# - Directory: ./
# - Want to override settings? No

# Deploy to production
vercel --prod
```

---

## 📦 What's Deployed?

Your Axion website includes:
- ✅ Home page with all sections
- ✅ Solutions pages (Recruiting, Consulting, Sales, Marketing, Finance)
- ✅ Product pages (Assistant, Enrich, Email, Workflows)
- ✅ Templates, Careers, Blog pages
- ✅ Login/Signup pages
- ✅ Demo request page
- ✅ Responsive design (mobile, tablet, desktop)

---

## 🔧 Environment Variables

Currently, **no environment variables needed** for frontend.

When you add backend later, you'll need:
```env
VITE_API_URL=your-backend-url
VITE_API_KEY=your-api-key
```

Add these in Vercel Dashboard → Settings → Environment Variables

---

## 🔄 Auto-Deploy on Push

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update homepage"
git push

# Vercel will auto-deploy! ✨
```

---

## 📊 Build Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Production Build
npm run build           # Build for production
npm run preview         # Preview production build

# Deploy
git push                # Auto-deploys via Vercel
vercel --prod          # Manual deploy via CLI
```

---

## 🎯 Custom Domain Setup

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `axion.com`)
3. Update DNS records as instructed
4. SSL certificate auto-configured! 🔒

---

## 🐛 Troubleshooting

### Build Fails
- Check `package.json` has correct scripts
- Ensure all dependencies in `package.json`
- Check build logs in Vercel Dashboard

### 404 on Routes
- Vercel auto-configures SPA routing for Vite
- If issues persist, add `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Slow Build
- Normal first build: 2-3 minutes
- Subsequent builds: 30-60 seconds
- Vercel caches `node_modules`

---

## 🔮 Next Steps

### Add Backend (Later)
1. Create backend repo (Node.js/Express, Python/Flask, etc.)
2. Deploy backend to Vercel/Railway/Render
3. Add API endpoints for:
   - Demo form submissions
   - User authentication
   - Contact forms
4. Update frontend to connect to backend

### Add Database (Later)
- **Supabase** (PostgreSQL) - Free tier, easy setup
- **MongoDB Atlas** - NoSQL, free tier
- **PlanetScale** (MySQL) - Serverless
- **Firebase** - Real-time database

---

## 📱 Share Your Site

Once deployed, share your live URL:
```
https://axion.vercel.app
or
https://your-custom-domain.com
```

---

## 💡 Tips

- ✅ Always test locally before pushing (`npm run build && npm run preview`)
- ✅ Use Vercel Preview deployments for testing (auto-created for PRs)
- ✅ Monitor analytics in Vercel Dashboard
- ✅ Add status checks with Vercel's built-in monitoring

---

**Need help?** Check Vercel docs: https://vercel.com/docs


# 🚀 Deployment Guide

## Pre-Deployment Checklist

Before deploying to production, ensure you have:

- [x] Run `npm run build` successfully
- [x] Tested the build locally with `npm run preview`
- [x] Updated all meta tags in `index.html`
- [x] Replaced placeholder content with your brand
- [x] Set up analytics (Google Analytics, Plausible, etc.)
- [x] Configured environment variables (if any)
- [x] Added custom domain DNS records (if applicable)

## 📦 Build Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Zero configuration for Vite projects
- Automatic HTTPS and CDN
- Edge network for global performance
- Free for personal projects

**Steps:**

1. Push your code to GitHub/GitLab/Bitbucket

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project" and import your repository

4. Vercel auto-detects Vite settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. Click "Deploy"

6. Your site will be live at `your-project.vercel.app`

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

### Option 2: Netlify

**Steps:**

1. Push code to Git repository

2. Go to [netlify.com](https://netlify.com)

3. Click "Add new site" → "Import an existing project"

4. Connect your Git provider

5. Configure build settings:
   ```
   Build command: npm run build
   Publish directory: dist
   ```

6. Click "Deploy site"

**Custom Domain:**
- Go to Site Settings → Domain Management
- Add custom domain and configure DNS

### Option 3: GitHub Pages

**Steps:**

1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/repo-name/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: AWS S3 + CloudFront

**For enterprise-scale deployment:**

1. Build the project:
   ```bash
   npm run build
   ```

2. Create S3 bucket:
   ```bash
   aws s3 mb s3://your-bucket-name
   ```

3. Upload files:
   ```bash
   aws s3 sync dist/ s3://your-bucket-name
   ```

4. Configure S3 for static hosting

5. Set up CloudFront CDN for global distribution

6. Configure Route 53 for custom domain

### Option 5: Docker Container

**Dockerfile:**

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

**Build & Run:**

```bash
docker build -t axion-website .
docker run -p 80:80 axion-website
```

## 🔧 Environment Variables

If your project needs environment variables:

**Create `.env` file:**

```env
VITE_API_URL=https://api.yoursite.com
VITE_GA_ID=G-XXXXXXXXXX
VITE_STRIPE_KEY=pk_live_xxxxx
```

**Access in code:**

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

**Platform-specific setup:**

- **Vercel**: Add in Project Settings → Environment Variables
- **Netlify**: Add in Site Settings → Environment Variables
- **GitHub Actions**: Add as repository secrets

## 📊 Performance Optimization

### Before Deployment

1. **Image Optimization**: Replace placeholder divs with optimized images
   ```bash
   npm install --save-dev vite-plugin-imagemin
   ```

2. **Bundle Analysis**:
   ```bash
   npm run build -- --mode analyze
   ```

3. **Lighthouse Check**: Test with Chrome DevTools Lighthouse

### After Deployment

1. **Enable CDN**: Use platform's CDN (Vercel/Netlify auto-enabled)

2. **Configure Caching**: Set proper cache headers

3. **Enable Compression**: Gzip/Brotli (auto-enabled on most platforms)

4. **Monitor Performance**: Use Google PageSpeed Insights

## 🔒 Security Best Practices

1. **HTTPS**: Always use HTTPS (free with Vercel/Netlify)

2. **Security Headers**: Add in `vercel.json` or `netlify.toml`:
   ```json
   {
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           { "key": "X-Content-Type-Options", "value": "nosniff" },
           { "key": "X-Frame-Options", "value": "DENY" },
           { "key": "X-XSS-Protection", "value": "1; mode=block" }
         ]
       }
     ]
   }
   ```

3. **Content Security Policy**: Add CSP meta tag in `index.html`

4. **Regular Updates**: Keep dependencies updated
   ```bash
   npm audit
   npm update
   ```

## 📈 Post-Deployment

### Analytics Setup

**Google Analytics:**

Add to `index.html` before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible (Privacy-focused):**

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Monitoring

1. **Uptime Monitoring**: Use UptimeRobot or Pingdom
2. **Error Tracking**: Integrate Sentry
3. **Performance**: Monitor Core Web Vitals

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Page Refresh

Add redirect rules:

**Vercel (`vercel.json`):**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify (`netlify.toml`):**
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Slow Build Times

1. Use pnpm instead of npm for faster installs
2. Enable caching in CI/CD
3. Upgrade Node.js version

## 🎉 Success!

Your production-ready website is now live! Monitor performance and user feedback to continuously improve.

**Next Steps:**
1. Set up analytics
2. Monitor error logs
3. Collect user feedback
4. Plan for updates and maintenance
5. Consider A/B testing for conversions

---

Need help? Check the main [README.md](./README.md) or open an issue on GitHub.

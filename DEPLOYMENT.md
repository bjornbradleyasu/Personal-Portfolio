# Portfolio Deployment Guide

This guide covers deploying your portfolio to Vercel with cross-platform compatibility and security best practices.

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Node.js 18+ installed locally

### Step 1: Prepare Your Repository

1. **Push your code to GitHub:**
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

2. **Verify your setup:**
```bash
npm run setup  # Cross-platform setup
npm run build  # Test production build
```

### Step 2: Deploy to Vercel

1. **Go to [Vercel](https://vercel.com/) and sign in**
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Vercel will auto-detect the Vite framework**
5. **Configure environment variables (if using EmailJS):**
   - Go to Project Settings → Environment Variables
   - Add:
     - `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
     - `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
     - `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key
6. **Click "Deploy"**

### Step 3: Verify Deployment

- Your portfolio will be available at `https://your-project-name.vercel.app`
- Check that all sections load correctly
- Test the contact form (if configured)
- Verify responsive design on mobile devices

## 🔧 Configuration Details

### Vercel Configuration (`vercel.json`)

The project includes optimized Vercel configuration:

```json
{
  "version": 2,
  "buildCommand": "npm run build:vercel",
  "outputDirectory": "dist",
  "installCommand": "npm ci",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/" }],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
```

### Security Features

- **Content Security Policy**: Prevents XSS attacks
- **Frame Options**: Prevents clickjacking
- **XSS Protection**: Browser-level XSS filtering
- **Referrer Policy**: Controls referrer information
- **Permissions Policy**: Restricts browser features

### Performance Optimizations

- **Asset Caching**: Static assets cached for 1 year
- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code elimination
- **Minification**: Production builds are minified
- **Source Maps**: Disabled in production for security

## 🌐 Cross-Platform Compatibility

### Windows Setup
```bash
# Clone and setup
git clone <your-repo-url>
cd portfolio
npm run setup

# Development
npm run dev

# Build
npm run build
```

### macOS/Linux Setup
```bash
# Clone and setup
git clone <your-repo-url>
cd portfolio
npm run setup

# Development
npm run dev

# Build
npm run build
```

### Docker Support (Optional)

Create a `Dockerfile` for containerized deployment:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔒 Security Checklist

- [x] **Dependencies**: All dependencies are up to date
- [x] **Environment Variables**: Sensitive data in environment variables
- [x] **Headers**: Security headers configured
- [x] **HTTPS**: Vercel provides HTTPS by default
- [x] **Source Maps**: Disabled in production
- [x] **Content Security Policy**: Configured via Vercel headers
- [x] **Dependencies Audit**: Regular security audits

## 📊 Performance Monitoring

### Vercel Analytics
- Enable Vercel Analytics in your project dashboard
- Monitor Core Web Vitals
- Track user engagement

### Lighthouse Scores
- **Performance**: 90+ (target)
- **Accessibility**: 95+ (target)
- **Best Practices**: 95+ (target)
- **SEO**: 90+ (target)

## 🚨 Troubleshooting

### Build Failures

1. **TypeScript Errors:**
```bash
npm run type-check
```

2. **ESLint Errors:**
```bash
npm run lint:fix
```

3. **Dependency Issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Runtime Issues

1. **Environment Variables:**
   - Check Vercel environment variables
   - Ensure all required variables are set

2. **3D Performance:**
   - Adjust quality settings in `src/config/scene3DConfig.ts`
   - Disable particles on low-end devices

3. **Contact Form:**
   - Verify EmailJS configuration
   - Check browser console for errors

## 🔄 Continuous Deployment

### Automatic Deployments
- Push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback to previous versions if needed

### Manual Deployments
```bash
# Deploy specific branch
vercel --prod

# Deploy with custom domain
vercel --prod --domain your-domain.com
```

## 📈 Monitoring and Maintenance

### Regular Tasks
- [ ] **Monthly**: Update dependencies (`npm update`)
- [ ] **Quarterly**: Security audit (`npm audit`)
- [ ] **As needed**: Update content and projects

### Performance Monitoring
- Monitor Core Web Vitals
- Check for broken links
- Verify all forms work correctly
- Test on different devices and browsers

## 🎯 Success Metrics

Your portfolio should achieve:
- **Load Time**: < 3 seconds
- **Lighthouse Score**: 90+ across all metrics
- **Mobile Responsive**: Perfect on all screen sizes
- **Accessibility**: WCAG AA compliant
- **Security**: A+ rating on security headers

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Vercel deployment logs
3. Test locally with `npm run build && npm run preview`
4. Check browser console for errors

---

**🎉 Congratulations!** Your portfolio is now deployed and optimized for production with cross-platform compatibility and security best practices.
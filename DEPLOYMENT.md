# Deployment Guide

## Vercel Deployment

This portfolio is ready for deployment on Vercel with the following configuration:

### Required Files
- ✅ `vercel.json` - Vercel configuration with static build setup
- ✅ `package.json` - Build scripts and dependencies
- ✅ `vite.config.ts` - Vite build configuration with code splitting
- ✅ `public/vite.svg` - Favicon asset
- ✅ `.nvmrc` - Node.js version specification (18.x)

### Environment Variables (Optional)

The contact form uses EmailJS. To enable it, set these environment variables in your Vercel dashboard:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Note**: Without these variables, the contact form will show a fallback message directing users to contact you directly via the provided links.

### Build Process

The build process is configured as:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x (specified in `.nvmrc`)
- **Install Command**: `npm ci` (for faster, reliable installs)

### Performance Optimizations

The configuration includes:
- **Code Splitting**: Manual chunks for vendor, three.js, and framer-motion
- **SPA Routing**: Client-side navigation support
- **Asset Caching**: Long-term caching for static assets
- **Build Optimization**: Proper Vercel static build configuration

### Troubleshooting

If you encounter permission errors during build:
1. Ensure you're using Node.js 18.x (specified in `.nvmrc`)
2. The `vercel.json` uses `@vercel/static-build` for proper permission handling
3. Build command is explicitly specified to avoid path issues

### Deployment Steps

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables (if using EmailJS)
4. Deploy

The site will be automatically deployed on every push to the main branch.

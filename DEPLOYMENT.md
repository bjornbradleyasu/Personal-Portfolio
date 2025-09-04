# Deployment Guide

## Vercel Deployment

This portfolio is ready for deployment on Vercel with the following configuration:

### Required Files
- ✅ `vercel.json` - Vercel configuration
- ✅ `package.json` - Build scripts and dependencies
- ✅ `vite.config.ts` - Vite build configuration
- ✅ `public/vite.svg` - Favicon asset

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
- **Node Version**: 18.x (auto-detected)

### Performance Optimizations

The `vercel.json` includes:
- SPA routing support for client-side navigation
- Asset caching headers for optimal performance
- Proper MIME type handling

### Deployment Steps

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables (if using EmailJS)
4. Deploy

The site will be automatically deployed on every push to the main branch.

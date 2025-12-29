# Bjorn Bradley - Portfolio

A professional portfolio website showcasing my skills, experience, and projects as a Front-End & Interactive UX Developer.

## Features

- **Single-page Layout**: Smooth scrolling between sections with navigation highlighting
- **Professional Design**: Modern, cool-toned aesthetic with glassmorphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: Smooth animations, particle effects, and micro-interactions
- **Accessibility**: WCAG AA compliant with proper focus states and semantic markup
- **Performance**: Optimized with lazy loading and smooth scrolling

## Sections

1. **Hero**: Interactive particle background with call-to-action buttons
2. **About**: Personal introduction with strengths and skills
3. **Experience**: Timeline of work experience with expandable details
4. **Education**: Academic background and certifications
5. **Tech Stack**: Interactive carousel of technologies and tools
6. **Projects**: Personal projects with detailed case studies
7. **School Projects**: Academic projects with code previews
8. **Contact**: Contact form and information cards

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scrolling**: Lenis
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **Build Tool**: Vite
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- **Node.js 18+** (required)
- **npm 8+** (required)
- **Git** (for cloning)

### Cross-Platform Installation

This project is designed to work seamlessly on **Windows**, **macOS**, and **Linux**.

#### Quick Setup (Recommended)

1. **Clone the repository:**
```bash
git clone https://github.com/bjornbradley/portfolio.git
cd portfolio
```

2. **Run the automated setup script:**
```bash
npm run setup
```

This script will:
- ✅ Clean any existing installations
- ✅ Install platform-specific dependencies
- ✅ Set proper executable permissions (Unix systems)
- ✅ Run type checking and linting
- ✅ Verify everything is working correctly

3. **Start the development server:**
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

#### Manual Setup (Alternative)

If you prefer manual setup or encounter issues:

1. **Install dependencies:**
```bash
npm install
```

2. **Set executable permissions (Unix systems only):**
```bash
chmod +x node_modules/.bin/*
```

3. **Run type checking:**
```bash
npm run type-check
```

4. **Start development server:**
```bash
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:vercel` | Build optimized for Vercel |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues automatically |
| `npm run type-check` | Run TypeScript type checking |
| `npm run clean` | Clean build directory |
| `npm run setup` | Run cross-platform setup script |

### Build for Production

```bash
npm run build
npm run preview
```

### Troubleshooting

#### Permission Issues
If you encounter permission errors:
```bash
# Unix/macOS/Linux
chmod +x node_modules/.bin/*

# Windows (if using Git Bash)
# No action needed - permissions are handled automatically
```

#### Platform-Specific Dependencies
If you see esbuild platform errors:
```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Port Already in Use
If port 3000 is busy:
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- --port 3001
```

## Customization

### Content

All content is stored in `/src/content/` as TypeScript files:
- `experience.ts` - Work experience data
- `education.ts` - Education and certificates
- `tech.ts` - Technology stack
- `projects.ts` - Personal projects
- `school-projects.ts` - Academic projects
- `contact.ts` - Contact information

### Styling

- **Colors**: Custom color palette defined in `tailwind.config.js`
- **Typography**: Inter (UI) and DM Sans (headlines)
- **Components**: Reusable component classes in `src/index.css`

### Adding New Sections

1. Create the component in `/src/components/`
2. Add the section to `App.tsx`
3. Update navigation in `NavBar.tsx`
4. Add section ID to ScrollSpy

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── NavBar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience
│   ├── Education.tsx   # Education & certificates
│   ├── TechStack.tsx   # Technology stack
│   ├── Projects.tsx    # Personal projects
│   ├── SchoolProjects.tsx # Academic projects
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   └── BackToTop.tsx   # Back to top button
├── content/            # Content data
├── lib/                # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Performance Features

- **Lazy Loading**: Heavy sections load on demand
- **Smooth Scrolling**: GPU-accelerated smooth scrolling with Lenis
- **Optimized Images**: Image optimization with vite-imagetools
- **Code Splitting**: Automatic code splitting with Vite
- **Motion Safety**: Respects `prefers-reduced-motion`

## Accessibility

- **Semantic HTML**: Proper landmark elements and structure
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant color combinations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact Form Setup

The portfolio includes a fully functional contact form that sends emails directly to your inbox. See [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md) for detailed setup instructions.

### Quick Setup (SendGrid - Recommended)

1. **Create SendGrid Account**
   - Sign up at [SendGrid](https://sendgrid.com/) (free tier available)
   - Create an API key with "Mail Send" permissions

2. **Configure Vercel Environment Variables**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add these variables:
     ```
     SENDGRID_API_KEY=your_sendgrid_api_key
     FROM_EMAIL=your-email@domain.com
     TO_EMAIL=your-email@domain.com
     ```

3. **Deploy and Test**
   - Push your changes to GitHub
   - Vercel will automatically deploy
   - Test the contact form on your live site

### Alternative: Gmail SMTP

If you prefer Gmail, see the [Contact Form Setup Guide](./CONTACT_FORM_SETUP.md) for Gmail configuration.

## Deployment

The portfolio is optimized for deployment on Vercel:

### Vercel Deployment

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Configure Contact Form**
   - Follow the [Contact Form Setup Guide](./CONTACT_FORM_SETUP.md)
   - Set up SendGrid or Gmail SMTP
   - Configure environment variables in Vercel

3. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

4. **Configuration**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Framework Preset: `Vite` (auto-detected)

The `vercel.json` configuration file is included for optimal performance with:
- SPA routing support
- Asset caching headers
- Build optimization
- Security headers

## Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub] 
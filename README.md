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

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bjornbradley/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser

### Build for Production

```bash
npm run build
npm run preview
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

## Deployment

The portfolio is optimized for deployment on Vercel:

### Vercel Deployment

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Set up EmailJS (Optional)**
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a service, template, and get your public key
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add these variables:
     - `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
     - `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID  
     - `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

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

## Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub] 
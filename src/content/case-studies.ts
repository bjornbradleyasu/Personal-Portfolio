import { CaseStudy } from './types'

/**
 * Case Studies Content
 * 
 * [PLACEHOLDER INSTRUCTIONS]
 * Replace the example case studies below with your actual detailed project case studies.
 * 
 * Case studies should provide deep dives into:
 * - Problem statement: What challenge did you solve?
 * - Description: Your approach and solution
 * - Role: Your specific responsibilities
 * - Stack: All technologies and tools used
 * - Constraints: Limitations, deadlines, technical challenges
 * - Highlights: Measurable outcomes and achievements
 * - Images: Screenshots or mockups (paths in /public directory)
 * - codePreview: A code snippet showing key implementation
 * 
 * Focus on projects that demonstrate:
 * - Problem-solving skills
 * - Technical depth
 * - Creative solutions
 * - Impact and results
 */

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'AI Report Generator for Civil Engineers via Drone Data',
    problemStatement: 'A struggling online retailer needed to increase conversion rates and improve user experience to compete with larger marketplaces.',
    description: 'Led a complete redesign of an e-commerce platform that resulted in a 40% increase in conversion rates and 25% improvement in user engagement.',
    role: 'Lead UX/UI Designer & Frontend Developer',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Stripe API'],
    constraints: [
      '6-week timeline',
      'Legacy system integration required',
      'Mobile-first approach mandatory',
      'SEO optimization needed'
    ],
    highlights: [
      'Increased conversion rates by 40% through improved checkout flow',
      'Reduced cart abandonment by 35% with better UX',
      'Improved page load speed by 60% with code optimization',
      'Achieved 95% mobile usability score',
      'Generated $2M+ additional revenue in first quarter'
    ],
    images: [
      '/images/case-studies/ecommerce-homepage.jpg',
      '/images/case-studies/ecommerce-checkout.jpg',
      '/images/case-studies/ecommerce-mobile.jpg'
    ],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/bjornbradley/ecommerce-redesign',
    writeupUrl: 'https://medium.com/@bjornbradley/ecommerce-redesign-case-study',
    codePreview: {
      file: 'CheckoutFlow.tsx',
      language: 'typescript',
      code: `// E-commerce checkout flow component
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CheckoutFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  return (
    <div className="max-w-2xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2>Checkout Flow</h2>
        <p>Multi-step checkout process with smooth animations</p>
      </motion.div>
    </div>
  );
};`
    }
  },
  {
    id: 'case-2',
    title: 'Healthcare Dashboard Analytics',
    problemStatement: 'Healthcare providers needed a comprehensive dashboard to track patient outcomes and optimize treatment protocols.',
    description: 'Designed and developed a real-time analytics dashboard that helped healthcare providers improve patient outcomes by 30% and reduce operational costs by 20%.',
    role: 'Full-Stack Developer & Data Visualization Specialist',
    stack: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Chart.js', 'WebSocket'],
    constraints: [
      'HIPAA compliance required',
      'Real-time data processing needed',
      'Mobile-responsive design',
      'Integration with existing EMR systems'
    ],
    highlights: [
      'Reduced patient readmission rates by 30%',
      'Improved treatment protocol efficiency by 25%',
      'Decreased operational costs by $500K annually',
      'Achieved 99.9% uptime with real-time monitoring',
      'Enabled data-driven decision making for 500+ providers'
    ],
    images: [
      '/images/case-studies/healthcare-dashboard.jpg',
      '/images/case-studies/healthcare-analytics.jpg',
      '/images/case-studies/healthcare-mobile.jpg'
    ],
    liveUrl: 'https://healthcare-dashboard-demo.com',
    githubUrl: 'https://github.com/bjornbradley/healthcare-dashboard',
    writeupUrl: 'https://medium.com/@bjornbradley/healthcare-analytics-case-study',
    codePreview: {
      file: 'PatientAnalytics.tsx',
      language: 'typescript',
      code: `// Healthcare analytics dashboard component
import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';

export const PatientAnalytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  
  useEffect(() => {
    // Fetch patient analytics data
    fetchAnalyticsData();
  }, []);
  
  return (
    <div className="space-y-6">
      <h2>Patient Analytics Dashboard</h2>
      <p>Real-time patient data visualization and insights</p>
    </div>
  );
};`
    }
  },
  {
    id: 'case-3',
    title: 'Simulated Randomized Movement for Animations',
    problemStatement: 'A fintech startup needed a high-performance trading platform to compete with established players in the market.',
    description: 'Built a real-time trading platform with sub-millisecond latency that processed over 1M transactions daily and achieved 99.99% uptime.',
    role: 'Senior Frontend Developer & Performance Engineer',
    stack: ['React', 'WebSocket', 'WebGL', 'D3.js', 'TypeScript', 'Web Workers'],
    constraints: [
      'Sub-millisecond latency requirements',
      'Real-time data streaming',
      'High-frequency trading support',
      'Regulatory compliance (SEC, FINRA)'
    ],
    highlights: [
      'Achieved sub-millisecond latency for trade execution',
      'Processed 1M+ transactions daily with 99.99% uptime',
      'Reduced trade execution time by 85%',
      'Increased platform capacity by 300%',
      'Generated $50M+ in trading volume in first year'
    ],
    images: [
      '/images/case-studies/trading-platform.jpg',
      '/images/case-studies/trading-charts.jpg',
      '/images/case-studies/trading-mobile.jpg'
    ],
    liveUrl: 'https://trading-platform-demo.com',
    githubUrl: 'https://github.com/bjornbradley/trading-platform',
    writeupUrl: 'https://medium.com/@bjornbradley/high-frequency-trading-platform',
    codePreview: {
      file: 'TradingChart.tsx',
      language: 'typescript',
      code: `// High-performance trading chart component
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export const TradingChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    // Initialize D3.js trading chart
    initializeChart();
  }, []);
  
  return (
    <div className="trading-chart">
      <h2>Real-time Trading Chart</h2>
      <svg ref={svgRef} width={800} height={400} />
    </div>
  );
};`
    }
  }
]


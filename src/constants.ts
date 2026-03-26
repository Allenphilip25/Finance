import { 
  TrendingUp, 
  Wallet, 
  FileText, 
  Building2, 
  Calculator, 
  Globe,
  ShieldCheck,
  Zap,
  Users,
  Clock
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'investment',
    title: 'Investment Advisory',
    description: 'Strategic investment planning for individuals seeking long-term wealth growth and portfolio diversification.',
    icon: TrendingUp,
  },
  {
    id: 'personal-finance',
    title: 'Personal Finance Planning',
    description: 'Comprehensive financial roadmaps covering retirement, education, and lifestyle goals.',
    icon: Wallet,
  },
  {
    id: 'taxation',
    title: 'Taxation & VAT Services',
    description: 'Expert guidance on UAE VAT compliance, corporate tax, and international tax planning.',
    icon: FileText,
  },
  {
    id: 'corporate-finance',
    title: 'Corporate Finance Solutions',
    description: 'Capital structuring, mergers and acquisitions, and strategic financial advisory for businesses.',
    icon: Building2,
  },
  {
    id: 'accounting',
    title: 'Accounting Services',
    description: 'Professional bookkeeping, financial reporting, and audit preparation to keep your business compliant.',
    icon: Calculator,
  },
  {
    id: 'uae-formation',
    title: 'UAE Company Formation',
    description: 'End-to-end support for setting up your business in Mainland, Free Zones, or Offshore jurisdictions.',
    icon: Globe,
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Expert Financial Guidance',
    description: 'Our team brings decades of combined experience in global and local financial markets.',
    icon: ShieldCheck,
  },
  {
    title: 'Tailored Solutions',
    description: 'We don\'t believe in one-size-fits-all. Every strategy is custom-built for your unique needs.',
    icon: Zap,
  },
  {
    title: 'Transparent Process',
    description: 'Clear communication and complete transparency in every transaction and advisory.',
    icon: Users,
  },
  {
    title: 'Global Expertise',
    description: 'Deep understanding of UAE regulations combined with global financial best practices.',
    icon: Globe,
  },
  {
    title: 'Trusted by Clients',
    description: 'A proven track record of helping hundreds of clients achieve their financial milestones.',
    icon: Clock,
  },
];

export const PROCESS_STEPS = [
  {
    title: 'Consultation',
    description: 'Initial meeting to understand your goals and current financial standing.',
  },
  {
    title: 'Analysis',
    description: 'Deep dive into market trends and your personal/corporate data.',
  },
  {
    title: 'Strategy Planning',
    description: 'Developing a comprehensive roadmap tailored to your objectives.',
  },
  {
    title: 'Execution',
    description: 'Implementing the strategy with precision and professional oversight.',
  },
  {
    title: 'Ongoing Support',
    description: 'Continuous monitoring and adjustments to ensure long-term success.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Al-Maktoum',
    role: 'CEO, TechVentures UAE',
    content: 'Elite Finance Advisory transformed our corporate structure. Their expertise in UAE company formation was invaluable.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Private Investor',
    content: 'The investment advisory team is top-notch. My portfolio has seen consistent growth even in volatile markets.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, Bloom Creative',
    content: 'Taxation in the UAE can be complex, but their VAT services made compliance effortless for my business.',
    rating: 5,
  },
];

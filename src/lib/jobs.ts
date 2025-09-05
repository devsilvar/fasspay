export interface JobProps {
  id: string;
  title: string;
  level: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  compensation: string;
  email: string;
  subject: string;
  notes: string;
  location?: string;
  type?: string;
  department?: string;
  posted?: string;
  team?: string;
}
export const jobs: JobProps[] = [
  {
    id: '1',
    title: 'Customer Support & Experience',
    level: 'Intern',
    summary:
      'Join our customer experience team to help build delightful support interactions and contribute to our customer-first culture.',
    responsibilities: [
      'Respond to support tickets across email, chat, and phone channels with empathy and efficiency',
      'Escalate complex technical issues to senior team members while maintaining customer satisfaction',
      'Maintain and update knowledge base articles and documentation for better self-service',
      'Gather customer feedback and share actionable insights with product and engineering teams',
      'Collaborate with cross-functional teams to refine support workflows and improve response times',
    ],
    requirements: [
      'Currently enrolled in post-secondary education (Business, Communications, Psychology, or related field)',
      'Excellent written and verbal communication skills with attention to detail',
      'Strong empathy, patience, and systematic problem-solving approach',
      'Comfortable learning and using support tools like Zendesk, Intercom, or similar platforms',
      'Bilingualism (English/French) is considered a strong asset for our diverse customer base',
    ],
    compensation: '~$12/hour',
    email: 'internships@faaspay.ca',
    subject: 'Application – Customer Support & Experience (Intern)',
    notes:
      'Please include your resume and a brief cover note explaining your interest in customer experience.',
    location: 'Toronto, ON',
    type: 'Internship',
    department: 'Customer Success',
    posted: '2 days ago',
    team: 'Support',
  },
  {
    id: '2',
    title: 'B2B Sales & Marketing',
    level: 'Intermediate',
    summary:
      'Drive growth through strategic outbound sales efforts and innovative B2B marketing campaigns in the fintech space.',
    responsibilities: [
      'Identify and target new business prospects across North American markets using data-driven approaches',
      'Manage and nurture long-term client relationships with Fortune 500 companies and SMBs',
      'Design and execute multi-channel digital marketing campaigns with measurable ROI',
      'Coordinate closely with product and operations teams to align customer needs with product roadmap',
      'Track and optimize performance using advanced CRM systems and analytics tools',
    ],
    requirements: [
      '2–5 years of proven experience in B2B sales, marketing, or SaaS-related roles',
      'Demonstrable track record of meeting and exceeding sales targets consistently',
      'Strong presentation, negotiation, and digital marketing skills across multiple channels',
      'Advanced proficiency with CRM platforms (Salesforce, HubSpot) and Google Analytics',
      'Collaborative mindset with self-motivated work ethic and entrepreneurial spirit',
    ],
    compensation: '$59,305/year',
    email: 'careers@wallx.co',
    subject: 'Application – B2B Sales & Marketing (Intermediate)',
    notes:
      'Please send your resume and cover letter highlighting your B2B sales achievements.',
    location: 'Toronto, ON',
    type: 'Full-time',
    department: 'Growth',
    posted: '1 week ago',
    team: 'Sales & Marketing',
  },
  {
    id: '3',
    title: 'Product Specialist',
    level: 'Intern',
    summary:
      'Support product development initiatives, gather user insights, and help create exceptional product experiences for our payment platform.',
    responsibilities: [
      'Assist in creating comprehensive product guides, tutorials, and FAQ documentation',
      'Support user onboarding processes and conduct product training sessions for new clients',
      'Collect and analyze product usage feedback from customers using analytics tools',
      'Collaborate with Product Managers to enhance feature documentation and user flows',
      'Contribute to user experience research, usability testing, and feature validation initiatives',
    ],
    requirements: [
      'Currently enrolled in Business, Product Design, Technology, UX/UI, or related studies',
      'Strong written communication and technical documentation skills',
      'Naturally curious, detail-oriented, and quick to learn complex technical concepts',
      'Comfortable with product tools, documentation platforms (Notion, Confluence), and basic analytics',
    ],
    compensation: '~$16/hour',
    email: 'internships@faaspay.ca',
    subject: 'Application – Product Specialist (Intern)',
    notes:
      'Include your resume and a short note about your interest in product management.',
    location: 'Toronto, ON',
    type: 'Internship',
    department: 'Product',
    posted: '3 days ago',
    team: 'Product Management',
  },
  {
    id: '4',
    title: 'Risk & Compliance Officer',
    level: 'Full-Time',
    summary:
      'Ensure regulatory compliance and risk management excellence while upholding the highest standards of financial integrity in our payment operations.',
    responsibilities: [
      'Perform comprehensive risk assessments and compliance audits across all business operations',
      'Maintain and continuously update compliance documentation to meet regulatory standards',
      'Stay current with evolving regulatory requirements (KYC, AML, PIPEDA, data protection)',
      'Develop and deliver comprehensive compliance training programs for all employees',
      'Collaborate effectively with legal teams, external auditors, and regulatory bodies',
    ],
    requirements: [
      `Bachelor's degree in Law, Finance, Risk Management, or related field`,
      '2+ years in compliance, risk, or regulatory roles (fintech or financial services experience strongly preferred)',
      'Deep familiarity with Canadian financial regulations, FINTRAC requirements, and international compliance frameworks',
      'Detail-oriented analytical mindset with strong ethical foundation and integrity',
    ],
    compensation: '$60,049/year',
    email: 'careers@wallx.co',
    subject: 'Application – Risk & Compliance Officer',
    notes:
      'Please attach your resume and cover letter detailing your compliance experience.',
    location: 'Toronto, ON',
    type: 'Full-time',
    department: 'Legal & Compliance',
    posted: '5 days ago',
    team: 'Risk Management',
  },
];

import {
  LayoutDashboard,
  Database,
  Bot,
  Workflow,
  Server,
  Cloud,
  Layers,
  Boxes,
  ShieldCheck,
  Gauge,
  Globe2,
  MonitorSmartphone,
  Lock,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export interface ServiceCategory {
  id: string;
  label: string;
  short: string;
  tagline: string;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'data-automation',
    label: 'Enterprise Data & Workflow Automation',
    short: 'Tab A',
    tagline: 'Intelligence engineered into the operational core.',
    items: [
      {
        id: 'automation-dashboards',
        title: 'Automation Dashboards',
        description:
          'Intelligent corporate operational command hubs and real-time business telemetry that unify live metrics, predictive alerts, and autonomous actions.',
        icon: LayoutDashboard,
        highlights: ['Real-time anomaly detection', 'Auto-remediation playbooks', 'Executive KPI cockpits'],
      },
      {
        id: 'data-platforms',
        title: 'Enterprise Data Platforms',
        description:
          'High-throughput data processing, pipeline engineering, and unified database layers that turn fragmented records into governed institutional knowledge.',
        icon: Database,
        highlights: ['Petabyte-scale pipelines', 'Lakehouse architecture', 'Governed self-service analytics'],
      },
      {
        id: 'rpa',
        title: 'Robotic Process Automation',
        description:
          'Eliminating redundant administrative workflows via intelligent script agents that execute high-volume tasks with audit-grade precision.',
        icon: Bot,
        highlights: ['24/7 unattended bots', 'Human-in-the-loop controls', 'Process mining led'],
      },
    ],
  },
  {
    id: 'core-infrastructure',
    label: 'Core Infrastructure & Digital Ecosystems',
    short: 'Tab B',
    tagline: 'The connective tissue of the modern enterprise.',
    items: [
      {
        id: 'api-integration',
        title: 'Systems Integration & API Development',
        description:
          'Building secure cross-platform connectivity bridges through contract-first APIs, event streams, and service meshes built for scale.',
        icon: Workflow,
        highlights: ['Contract-first REST & GraphQL', 'Event-driven streams', 'Zero-trust service mesh'],
      },
      {
        id: 'custom-systems',
        title: 'Custom Enterprise Systems',
        description:
          'High-availability tailored web and mobile platform architectures engineered to mission-critical standards.',
        icon: Server,
        highlights: ['99.99% uptime targets', 'Domain-driven design', 'Observable by default'],
      },
      {
        id: 'cloud-devops',
        title: 'Cloud Architecture & DevOps',
        description:
          'Continuous integration CI/CD, containerized systems, and automated infrastructure orchestration with cost governance baked in.',
        icon: Cloud,
        highlights: ['Multi-cloud IaC', 'Progressive delivery', 'FinOps cost control'],
      },
    ],
  },
  {
    id: 'transformation',
    label: 'Digital Transformation & Evolution',
    short: 'Tab C',
    tagline: 'Modernising the foundations, responsibly.',
    items: [
      {
        id: 'legacy-modernisation',
        title: 'Legacy System Modernisation',
        description:
          'Refactoring aging codebases safely into modern cloud architectures with strangler-pattern migrations that reduce risk.',
        icon: Layers,
        highlights: ['Strangler-fig migration', 'Automated regression suites', 'Domain extraction'],
      },
      {
        id: 'erp-migration',
        title: 'Enterprise ERP Migration',
        description:
          'Consolidating fragmented corporate data layers into a unified ERP backbone with phased cutover and zero-loss data integrity.',
        icon: Boxes,
        highlights: ['Phased cutover', 'Master data governance', 'Zero-loss reconciliation'],
      },
      {
        id: 'cyber-audits',
        title: 'Cyber Security Audits',
        description:
          'Comprehensive infrastructure penetration analysis and structural hardening across every layer of the stack.',
        icon: ShieldCheck,
        highlights: ['Penetration testing', 'Zero-trust architecture', 'Continuous compliance'],
      },
    ],
  },
];

export interface Pillar {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const pillars: Pillar[] = [
  {
    id: 'scalability',
    index: '01',
    title: 'Quantum Scalability',
    description: 'Microservices engineered to adapt and auto-scale dynamically.',
    icon: Gauge,
  },
  {
    id: 'localized',
    index: '02',
    title: 'Localized Mastery',
    description: 'System architecture tailored precisely for regional compliance and market requirements.',
    icon: Globe2,
  },
  {
    id: 'ui',
    index: '03',
    title: 'Human-Centric UI',
    description: 'High-fidelity automation dashboards requiring minimal operator learning curves.',
    icon: MonitorSmartphone,
  },
  {
    id: 'security',
    index: '04',
    title: 'Fortified Security',
    description: 'Bulletproof data protection protocols and systemic auditing baked into core code.',
    icon: Lock,
  },
];

export interface PipelineNode {
  id: string;
  index: string;
  title: string;
  description: string;
}

export const pipelineNodes: PipelineNode[] = [
  {
    id: 'discovery',
    index: '01',
    title: 'Discovery & Diagnostics',
    description: 'Scanning operational bottlenecks and dependencies across your current systems.',
  },
  {
    id: 'blueprints',
    index: '02',
    title: 'Architectural Blueprints',
    description: 'Configuring software modules to match target scaling constraints and compliance.',
  },
  {
    id: 'deployment',
    index: '03',
    title: 'System Deployment & Training',
    description: 'Rapid zero-downtime data migration and rapid staff onboarding.',
  },
  {
    id: 'support',
    index: '04',
    title: 'Sovereign Support & Optimization',
    description: 'Continuous updates, security hardening, and future-ready upgrades.',
  },
];

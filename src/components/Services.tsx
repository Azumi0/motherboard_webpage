'use client';

import { useState } from 'react';
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  ThemeIcon,
  Badge,
  Group,
  Stack,
  Tabs,
  List,
  Box,
  Button,
} from '@mantine/core';
import {
  IconUsersGroup,
  IconRocket,
  IconCode,
  IconCloudCheck,
  IconUserCheck,
  IconServer,
  IconShieldLock,
  IconDevicesPc,
  IconBuildingTunnel,
  IconCheck,
  IconArrowRight,
} from '@tabler/icons-react';

const staffAugmentation = [
  {
    icon: IconCode,
    title: 'Full-Stack & Frontend Developers',
    badge: 'Next.js / React Specialists',
    description:
      'Senior developers ready to plug straight into your team. Expert mastery of Next.js App Router, React, TypeScript, Node.js, and high-load web architectures.',
    highlights: [
      'Senior-level engineers (5+ years avg experience)',
      'Immediate velocity & clean TypeScript code',
      'Modern frontend frameworks & REST/GraphQL APIs',
      'Agile integration into your Jira/GitHub workflows',
    ],
  },
  {
    icon: IconServer,
    title: 'DevOps Engineers',
    badge: 'Cloud & Infrastructure',
    description:
      'Infrastructure specialists ensuring zero-downtime CI/CD pipelines, containerization, cloud migration, and scalable Kubernetes orchestration.',
    highlights: [
      'Docker, Kubernetes, Terraform & Ansible',
      'AWS, GCP, Azure & Bare-Metal Cloud setup',
      'Automated deployment pipelines (GitHub Actions/GitLab)',
      '24/7 monitoring & proactive server hardening',
    ],
  },
  {
    icon: IconUserCheck,
    title: 'Technical PMs & Team Leaders',
    badge: 'Leadership & Delivery',
    description:
      'Experienced technical leaders to guide roadmap execution, unblock developers, enforce code quality standards, and streamline cross-functional delivery.',
    highlights: [
      'Scrum & Kanban team management',
      'Technical architecture guidance & code reviews',
      'Clear stakeholder communication & sprint tracking',
      'Risk mitigation & deadline adherence',
    ],
  },
];

const turnkeyProjects = [
  {
    icon: IconRocket,
    title: 'Websites & Web Applications',
    badge: 'End-to-End Build',
    description:
      'Custom web platforms, portals, and enterprise web applications designed for extreme speed, SEO perfection, accessibility, and high conversion rates.',
    highlights: [
      'Next.js 15+ App Router & Server Components',
      'Pixel-perfect responsive UX/UI design',
      'Blazing fast performance & Lighthouse score 95+',
      'SEO optimization & Analytics integration',
    ],
  },
  {
    icon: IconShieldLock,
    title: 'Secure Corporate VPN & Networks',
    badge: 'Cybersecurity',
    description:
      'Custom-configured encrypted VPNs (WireGuard / Tailscale / OpenVPN) to connect distributed enterprise teams securely to internal servers.',
    highlights: [
      'Next-gen WireGuard & Tailscale setup',
      'Multi-factor authentication (MFA/SSO)',
      'Encrypted point-to-point mesh networks',
      'Granular zero-trust access policies',
    ],
  },
  {
    icon: IconDevicesPc,
    title: 'Remote Desktop & Workspaces',
    badge: 'Virtual Office',
    description:
      'Turnkey virtual desktop environments (VDI) and secure remote access platforms enabling your workforce to work safely from anywhere in the world.',
    highlights: [
      'High-performance Virtual Desktop Infrastructure',
      'Secure centralized file management',
      'Encrypted remote session isolation',
      'Disaster recovery & automated backups',
    ],
  },
  {
    icon: IconBuildingTunnel,
    title: 'Infrastructure Audit & Migration',
    badge: 'Systems Overhaul',
    description:
      'Deep technical audit of legacy applications, server architecture, and security policies followed by seamless cloud or hybrid server migration.',
    highlights: [
      'Security audit & vulnerability scanning',
      'Legacy monolith to microservices migration',
      'Cost-optimization of cloud hosting bills',
      'Zero-data-loss migration strategy',
    ],
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState<string | null>('augmentation');

  return (
    <Box component="section" id="services" py={{ base: 60, md: 90 }} style={{ position: 'relative' }}>
      <Container size="xl">
        <Stack align="center" gap="xs" mb={{ base: 40, md: 50 }}>
          <Badge color="cyan" size="lg" radius="sm">
            Core Service Offerings
          </Badge>
          <Title
            order={2}
            fz={{ base: '2rem', sm: '2.8rem' }}
            ta="center"
            lh={1.2}
            fw={800}
          >
            Flexible Engagement Models Tailored to Your Growth
          </Title>
          <Text c="dimmed" fz="lg" maw={650} ta="center">
            Whether you need dedicated senior engineers to boost your internal squad or full turnkey
            delivery of web applications and IT infrastructure, MOTHERBOARD delivers.
          </Text>
        </Stack>

        <Tabs
          value={activeTab}
          onChange={setActiveTab}
          variant="outline"
          radius="md"
          color="cyan"
          keepMounted={false}
        >
          <Tabs.List justify="center" mb={40}>
            <Tabs.Tab
              value="augmentation"
              leftSection={<IconUsersGroup size={20} />}
              style={{ fontSize: '1.05rem', fontWeight: 600, padding: '12px 24px' }}
            >
              IT Staff Augmentation &amp; Outsourcing
            </Tabs.Tab>
            <Tabs.Tab
              value="turnkey"
              leftSection={<IconCloudCheck size={20} />}
              style={{ fontSize: '1.05rem', fontWeight: 600, padding: '12px 24px' }}
            >
              Turnkey Project Delivery
            </Tabs.Tab>
          </Tabs.List>

          {/* TAB 1: IT Staff Augmentation */}
          <Tabs.Panel value="augmentation">
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              {staffAugmentation.map((service, index) => (
                <Card
                  key={index}
                  className="glass-card"
                  padding="xl"
                  radius="lg"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <Group justify="space-between" align="flex-start" mb="md">
                    <ThemeIcon size={52} radius="lg" color="cyan" variant="light">
                      <service.icon size={28} />
                    </ThemeIcon>
                    <Badge color="cyan" variant="dot" size="sm">
                      {service.badge}
                    </Badge>
                  </Group>

                  <Title order={3} fz="1.35rem" mb="xs" fw={700}>
                    {service.title}
                  </Title>

                  <Text size="sm" c="dimmed" mb="lg" style={{ lineHeight: 1.6, flexGrow: 0 }}>
                    {service.description}
                  </Text>

                  <Box style={{ marginTop: 'auto' }}>
                    <Text fw={700} size="xs" c="cyan" mb="xs" style={{ letterSpacing: '0.5px' }}>
                      KEY CAPABILITIES:
                    </Text>
                    <List
                      spacing="xs"
                      size="xs"
                      icon={
                        <ThemeIcon color="cyan" size={16} radius="xl">
                          <IconCheck size={10} />
                        </ThemeIcon>
                      }
                    >
                      {service.highlights.map((h, hIdx) => (
                        <List.Item key={hIdx}>{h}</List.Item>
                      ))}
                    </List>
                  </Box>
                </Card>
              ))}
            </SimpleGrid>
          </Tabs.Panel>

          {/* TAB 2: Turnkey Project Delivery */}
          <Tabs.Panel value="turnkey">
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              {turnkeyProjects.map((service, index) => (
                <Card
                  key={index}
                  className="glass-card"
                  padding="xl"
                  radius="lg"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <Group justify="space-between" align="flex-start" mb="md">
                    <ThemeIcon size={52} radius="lg" color="blue" variant="light">
                      <service.icon size={28} />
                    </ThemeIcon>
                    <Badge color="blue" variant="outline" size="sm">
                      {service.badge}
                    </Badge>
                  </Group>

                  <Title order={3} fz="1.35rem" mb="xs" fw={700}>
                    {service.title}
                  </Title>

                  <Text size="sm" c="dimmed" mb="lg" style={{ lineHeight: 1.6 }}>
                    {service.description}
                  </Text>

                  <Box style={{ marginTop: 'auto' }}>
                    <Text fw={700} size="xs" c="cyan" mb="xs" style={{ letterSpacing: '0.5px' }}>
                      INCLUDED IN DELIVERY:
                    </Text>
                    <List
                      spacing="xs"
                      size="xs"
                      icon={
                        <ThemeIcon color="cyan" size={16} radius="xl">
                          <IconCheck size={10} />
                        </ThemeIcon>
                      }
                    >
                      {service.highlights.map((h, hIdx) => (
                        <List.Item key={hIdx}>{h}</List.Item>
                      ))}
                    </List>
                  </Box>
                </Card>
              ))}
            </SimpleGrid>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Box>
  );
}

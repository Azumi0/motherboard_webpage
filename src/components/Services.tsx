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
      'Senior developers ready to integrate into your engineering team. Skilled in Next.js App Router, React, TypeScript, Node.js, and high-load web architectures.',
    highlights: [
      'Senior engineers (5+ years average experience)',
      'Clean TypeScript code and quick onboarding',
      'Modern frontend frameworks and REST/GraphQL APIs',
      'Integration into your Jira/GitHub workflows',
    ],
  },
  {
    icon: IconServer,
    title: 'DevOps Engineers',
    badge: 'Cloud & Infrastructure',
    description:
      'Infrastructure specialists focused on CI/CD pipelines, containerization, cloud setup, and Kubernetes orchestration.',
    highlights: [
      'Docker, Kubernetes, Terraform, and Ansible',
      'AWS, GCP, Azure, and bare-metal server setups',
      'Automated deployment pipelines via GitHub Actions and GitLab',
      'System monitoring and security hardening',
    ],
  },
  {
    icon: IconUserCheck,
    title: 'Technical PMs & Team Leaders',
    badge: 'Leadership & Delivery',
    description:
      'Technical leaders to manage product roadmaps, unblock developers, maintain code quality standards, and coordinate delivery.',
    highlights: [
      'Scrum and Kanban management',
      'Architecture guidance and code reviews',
      'Stakeholder updates and sprint planning',
      'Risk management and milestone tracking',
    ],
  },
];

const turnkeyProjects = [
  {
    icon: IconRocket,
    title: 'Websites & Web Applications',
    badge: 'End-to-End Build',
    description:
      'Custom web platforms and enterprise applications built for performance, SEO, accessibility, and clean design.',
    highlights: [
      'Next.js 15+ App Router and Server Components',
      'Responsive UX/UI design',
      'Fast page load times',
      'SEO setup and analytics integration',
    ],
  },
  {
    icon: IconShieldLock,
    title: 'Secure Corporate VPN & Networks',
    badge: 'Cybersecurity',
    description:
      'Configured encrypted VPNs (WireGuard, Tailscale, or OpenVPN) to connect distributed teams to internal servers.',
    highlights: [
      'WireGuard and Tailscale setup',
      'Multi-factor authentication (MFA/SSO)',
      'Encrypted point-to-point mesh networks',
      'Zero-trust access policies',
    ],
  },
  {
    icon: IconDevicesPc,
    title: 'Remote Desktop & Workspaces',
    badge: 'Virtual Office',
    description:
      'Virtual desktop environments (VDI) and secure remote access platforms enabling teams to work safely from anywhere.',
    highlights: [
      'Virtual Desktop Infrastructure',
      'Centralized file management',
      'Encrypted remote session isolation',
      'Automated backups and recovery options',
    ],
  },
  {
    icon: IconBuildingTunnel,
    title: 'Infrastructure Audit & Migration',
    badge: 'Systems Overhaul',
    description:
      'Audit of legacy applications, server architecture, and security policies, followed by cloud or hybrid server migration.',
    highlights: [
      'Security audits and vulnerability scans',
      'Monolith to microservices migration',
      'Cost optimization of cloud infrastructure',
      'Migration planning without data loss',
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
            Hire senior engineers to expand your team, or let us handle end-to-end delivery of your web applications and IT infrastructure.
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

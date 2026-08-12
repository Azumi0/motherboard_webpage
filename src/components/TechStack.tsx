'use client';

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Paper,
  Badge,
  Group,
  Stack,
  Box,
  ThemeIcon,
} from '@mantine/core';
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandDocker,
  IconShieldLock,
  IconNetwork,
  IconSparkles,
  IconAdjustmentsHorizontal,
} from '@tabler/icons-react';

const technologies = [
  {
    name: 'Next.js',
    category: 'Core Web Platform',
    icon: IconBrandNextjs,
    color: '#00F0FF',
    desc: 'App Router, Server Components, SSR, Dynamic Caching & Turbopack',
  },
  {
    name: 'React',
    category: 'Frontend Library',
    icon: IconBrandReact,
    color: '#61DAFB',
    desc: 'Modern Concurrent React 19, Custom Hooks, Context & State Management',
  },
  {
    name: 'TypeScript',
    category: 'Type Safety',
    icon: IconBrandTypescript,
    color: '#3178C6',
    desc: 'Strict end-to-end type safety, Zod validation & scalable schemas',
  },
  {
    name: 'Node.js',
    category: 'Backend & APIs',
    icon: IconBrandNodejs,
    color: '#339933',
    desc: 'High-throughput microservices, REST APIs, WebSockets & GraphQL',
  },
  {
    name: 'Docker',
    category: 'Containerization',
    icon: IconBrandDocker,
    color: '#2496ED',
    desc: 'Isolated, reproducible production containers & lightweight builds',
  },
  {
    name: 'Kubernetes',
    category: 'Orchestration',
    icon: IconNetwork,
    color: '#326CE5',
    desc: 'Automated scaling, self-healing deployments & cloud-native clusters',
  },
  {
    name: 'Tailscale / WireGuard',
    category: 'Secure VPN',
    icon: IconShieldLock,
    color: '#00f0ff',
    desc: 'Zero-trust mesh networks, encrypted tunnels & instant access control',
  },
];

export function TechStack() {
  return (
    <Box
      component="section"
      id="tech-stack"
      py={{ base: 60, md: 90 }}
      style={{
        background: 'rgba(15, 23, 42, 0.4)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Container size="xl">
        <Stack align="center" gap="xs" mb={{ base: 40, md: 50 }}>
          <Badge color="cyan" size="lg" radius="sm">
            Technologies &amp; Engineering Standards
          </Badge>
          <Title order={2} fz={{ base: '2rem', sm: '2.8rem' }} ta="center" fw={800}>
            Tech Stack
          </Title>
          <Text c="dimmed" fz="lg" maw={650} ta="center">
            We use reliable tools to deliver fast, secure, and maintainable software.
          </Text>
        </Stack>

        {/* Tech Grid */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md" mb={40}>
          {technologies.map((tech, index) => (
            <Paper
              key={index}
              className="glass-card"
              p="lg"
              radius="lg"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <Group justify="space-between" align="center">
                <ThemeIcon size={44} radius="md" style={{ background: 'rgba(0, 240, 255, 0.1)' }}>
                  <tech.icon size={26} color={tech.color} />
                </ThemeIcon>
                <Badge variant="subtle" color="cyan" size="xs">
                  {tech.category}
                </Badge>
              </Group>

              <Box>
                <Text fw={700} fz="1.15rem" mb={4}>
                  {tech.name}
                </Text>
                <Text size="xs" c="dimmed" style={{ lineHeight: 1.5 }}>
                  {tech.desc}
                </Text>
              </Box>
            </Paper>
          ))}

          {/* Bonus card for Custom Integrations */}
          <Paper
            className="glass-card"
            p="lg"
            radius="lg"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              borderStyle: 'dashed',
              borderColor: 'rgba(0, 240, 255, 0.3)',
            }}
          >
            <Group justify="space-between" align="center">
              <ThemeIcon size={44} radius="md" color="teal" variant="light">
                <IconAdjustmentsHorizontal size={26} />
              </ThemeIcon>
              <Badge color="teal" size="xs">
                Custom Specs
              </Badge>
            </Group>
            <Box>
              <Text fw={700} fz="1.15rem" mb={4}>
                Your Custom Stack
              </Text>
              <Text size="xs" c="dimmed" style={{ lineHeight: 1.5 }}>
                Python, Go, Java, AWS Lambda, PostgreSQL, Redis, GraphQL, CI/CD toolchains.
              </Text>
            </Box>
          </Paper>
        </SimpleGrid>

        {/* Mandatory Flexibility Callout Banner */}
        <Paper
          p={{ base: 'xl', md: '2rem' }}
          radius="xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.12) 0%, rgba(99, 102, 241, 0.08) 100%)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            boxShadow: '0 10px 40px -10px rgba(0, 240, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Group justify="space-between" align="center" gap="lg">
            <Group gap="md">
              <ThemeIcon size={56} radius="xl" color="cyan" variant="filled">
                <IconSparkles size={30} color="#07090e" />
              </ThemeIcon>
              <Box style={{ maxWidth: '800px' }}>
                <Badge color="cyan" variant="filled" size="sm" mb={6}>
                  FLEXIBILITY &amp; ADAPTABILITY
                </Badge>
                <Title order={3} fz={{ base: '1.25rem', sm: '1.5rem' }} fw={800} lh={1.3}>
                  &ldquo;Next.js is our stack of choice for web platforms, but we work with your preferred tools and workflow.&rdquo;
                </Title>
                <Text size="sm" c="dimmed" mt={4}>
                  Whether your team uses AWS or GCP, Jira or Linear, GitHub or GitLab, or custom Docker setups, our engineers adapt to your existing setup.
                </Text>
              </Box>
            </Group>
          </Group>
        </Paper>
      </Container>
    </Box>
  );
}

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
  ThemeIcon,
  Box,
} from '@mantine/core';
import {
  IconTargetArrow,
  IconBuildingArch,
  IconCpu,
  IconHeadset,
  IconArrowUpRight,
} from '@tabler/icons-react';

const processSteps = [
  {
    step: '01',
    title: 'Requirement & Stack Alignment',
    icon: IconTargetArrow,
    description:
      'We conduct a thorough audit of your project scope, technical stack, team dynamics, and business milestones to define exact developer skills or architectural requirements.',
    details: 'Stack audit, role scoping, SLA agreement',
  },
  {
    step: '02',
    title: 'Rapid Team Matching / Solution Architecture',
    icon: IconBuildingArch,
    description:
      'Within 48 to 72 hours, we present pre-vetted senior candidates or deliver a detailed architectural roadmap for your custom software or VPN infrastructure.',
    details: 'Pre-screened profiles, tech architecture proposal',
  },
  {
    step: '03',
    title: 'Seamless Integration & Execution',
    icon: IconCpu,
    description:
      'Engineers or turnkey project deliverables integrate directly into your workflow. Daily standups, transparent code reviews, and immediate sprint contributions.',
    details: 'Immediate velocity, clean git commits, sprint tracking',
  },
  {
    step: '04',
    title: 'Continuous Operations & Support',
    icon: IconHeadset,
    description:
      'We provide ongoing engineering oversight, performance optimization, security monitoring, and scale team capacity on-demand as your business expands.',
    details: '24/7 uptime oversight, flexible team scaling',
  },
];

export function WhyUs() {
  return (
    <Box component="section" id="process" py={{ base: 60, md: 90 }}>
      <Container size="xl">
        <Stack align="center" gap="xs" mb={{ base: 40, md: 60 }}>
          <Badge color="cyan" size="lg" radius="sm">
            Proven Delivery Process
          </Badge>
          <Title order={2} fz={{ base: '2rem', sm: '2.8rem' }} ta="center" fw={800}>
            Why Choose MOTHERBOARD sp. z o.o.
          </Title>
          <Text c="dimmed" fz="lg" maw={650} ta="center">
            A structured, transparent, and battle-tested 4-step engineering workflow built for velocity and peace of mind.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {processSteps.map((item, index) => (
            <Paper
              key={index}
              className="glass-card"
              p="xl"
              radius="xl"
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glowing Step Number Background */}
              <Box
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '15px',
                  fontSize: '4.5rem',
                  fontWeight: 900,
                  color: 'rgba(0, 240, 255, 0.06)',
                  fontFamily: 'var(--font-geist-mono), monospace',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {item.step}
              </Box>

              <Group justify="space-between" align="center" mb="lg">
                <ThemeIcon size={50} radius="lg" color="cyan" variant="light">
                  <item.icon size={26} />
                </ThemeIcon>
                <Badge variant="outline" color="cyan" size="sm">
                  Step {item.step}
                </Badge>
              </Group>

              <Title order={3} fz="1.2rem" fw={700} mb="xs" style={{ lineHeight: 1.3 }}>
                {item.title}
              </Title>

              <Text size="xs" c="dimmed" mb="lg" style={{ lineHeight: 1.6, flexGrow: 1 }}>
                {item.description}
              </Text>

              <Box
                p="xs"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <Group gap={6} align="center">
                  <IconArrowUpRight size={14} color="#00f0ff" />
                  <Text size="11px" c="cyan.3" fw={600}>
                    {item.details}
                  </Text>
                </Group>
              </Box>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

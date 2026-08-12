'use client';

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Badge,
  Stack,
  Box,
  SimpleGrid,
  ThemeIcon,
  Paper,
} from '@mantine/core';
import {
  IconPhoneCall,
  IconMail,
  IconCheck,
  IconTerminal2,
  IconShieldCheck,
  IconBolt,
  IconUsers,
  IconCode,
} from '@tabler/icons-react';

const stats = [
  { icon: IconUsers, title: 'Senior Engineers Only', desc: '100% vetted top-tier talent' },
  { icon: IconBolt, title: 'Fast Onboarding', desc: 'Integration in 48-72 hours' },
  { icon: IconCode, title: 'Next.js Core Stack', desc: 'Modern web architecture' },
  { icon: IconShieldCheck, title: 'Enterprise Security', desc: 'VPN & infrastructure audit' },
];

export function Hero() {
  return (
    <Box
      component="section"
      className="circuit-bg"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 40, md: 50 }} style={{ alignItems: 'center' }}>
          {/* Left Column: Text & CTAs */}
          <Stack gap="lg">
            <Group gap="xs">
              <Badge
                variant="outline"
                color="cyan"
                size="lg"
                radius="xl"
                style={{
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  paddingLeft: '14px',
                  paddingRight: '14px',
                  borderColor: 'rgba(0, 240, 255, 0.4)',
                  background: 'rgba(0, 240, 255, 0.05)',
                  boxShadow: '0 0 15px rgba(0, 240, 255, 0.15)',
                }}
                leftSection={
                  <Box className="pulse-dot" style={{ display: 'inline-block', marginRight: 4 }} />
                }
              >
                Senior IT Outsourcing & Custom Software Solutions
              </Badge>
            </Group>

            <Title
              order={1}
              fz={{ base: '2.3rem', sm: '3.2rem', lg: '3.8rem' }}
              lh={1.1}
              fw={900}
            >
              Engineers, Leaders, &{' '}
              <Text component="span" className="gradient-text" inherit>
                Full-Cycle IT Delivery
              </Text>{' '}
              on Demand
            </Title>

            <Text
              fz={{ base: '1rem', sm: '1.2rem' }}
              c="dimmed"
              lh={1.6}
              style={{ maxWidth: '600px' }}
            >
              We provide top-tier developers, DevOps specialists, and managers to scale your team—or
              build your web applications, secure VPNs, and remote workspaces from start to finish.
            </Text>

            <Group gap="md" pt="xs">
              <Button
                component="a"
                href="tel:+48883934010"
                size="lg"
                variant="gradient"
                gradient={{ from: 'cyan', to: 'blue', deg: 135 }}
                leftSection={<IconPhoneCall size={20} />}
                radius="md"
                style={{
                  boxShadow: '0 0 25px rgba(0, 240, 255, 0.3)',
                  transition: 'transform 0.2s ease',
                }}
              >
                Call +48 883 934 010
              </Button>

              <Button
                component="a"
                href="mailto:biuro@motherboard.pl"
                size="lg"
                variant="default"
                leftSection={<IconMail size={20} />}
                radius="md"
                style={{
                  borderColor: 'rgba(0, 240, 255, 0.3)',
                }}
              >
                Email Us
              </Button>
            </Group>

            {/* Quick checkmarks */}
            <Group gap="xl" pt="sm">
              <Group gap={6}>
                <ThemeIcon size="xs" radius="xl" color="cyan" variant="light">
                  <IconCheck size={12} />
                </ThemeIcon>
                <Text size="xs" c="dimmed" fw={600}>
                  NIP: 9552587539
                </Text>
              </Group>

              <Group gap={6}>
                <ThemeIcon size="xs" radius="xl" color="cyan" variant="light">
                  <IconCheck size={12} />
                </ThemeIcon>
                <Text size="xs" c="dimmed" fw={600}>
                  KRS: 0001168436
                </Text>
              </Group>

              <Group gap={6}>
                <ThemeIcon size="xs" radius="xl" color="cyan" variant="light">
                  <IconCheck size={12} />
                </ThemeIcon>
                <Text size="xs" c="dimmed" fw={600}>
                  Szczecin, Poland
                </Text>
              </Group>
            </Group>
          </Stack>

          {/* Right Column: Code/Architecture Interactive Visual Card */}
          <Box style={{ position: 'relative' }}>
            {/* Main Interactive Terminal Window */}
            <Paper className="code-window" p="lg" radius="lg">
              <Group justify="space-between" pb="md" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <Group gap="xs">
                  <Box style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                  <Box style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                  <Box style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f' }} />
                </Group>
                <Group gap={6}>
                  <IconTerminal2 size={16} color="#00f0ff" />
                  <Text size="xs" c="dimmed" style={{ fontFamily: 'var(--font-geist-mono)' }}>
                    motherboard-delivery.config.ts
                  </Text>
                </Group>
              </Group>

              <Box pt="md" style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#e2e8f0' }}>
                <Text component="span" c="cyan.4">const</Text> motherboardOutsourcing = &#123;<br />
                &nbsp;&nbsp;<Text component="span" c="blue.3">company</Text>: <Text component="span" c="green.3">&quot;MOTHERBOARD sp. z o.o.&quot;</Text>,<br />
                &nbsp;&nbsp;<Text component="span" c="blue.3">coreStack</Text>: [<Text component="span" c="green.3">&quot;Next.js&quot;</Text>, <Text component="span" c="green.3">&quot;TypeScript&quot;</Text>, <Text component="span" c="green.3">&quot;Docker&quot;</Text>, <Text component="span" c="green.3">&quot;K8s&quot;</Text>],<br />
                &nbsp;&nbsp;<Text component="span" c="blue.3">services</Text>: &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<Text component="span" c="teal.3">staffAugmentation</Text>: <Text component="span" c="orange.3">&quot;Senior Full-Stack &amp; DevOps&quot;</Text>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<Text component="span" c="teal.3">turnkeyDelivery</Text>: <Text component="span" c="orange.3">&quot;Web Apps, Secure VPN &amp; Remote Workspaces&quot;</Text>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<Text component="span" c="teal.3">onboardingTime</Text>: <Text component="span" c="purple.3">&quot;&lt; 72 hours&quot;</Text><br />
                &nbsp;&nbsp;&#125;,<br />
                &nbsp;&nbsp;<Text component="span" c="blue.3">status</Text>: <Text component="span" c="cyan.3">&quot;READY_TO_DEPLOY&quot;</Text><br />
                &#125;;
              </Box>

              <Box
                mt="md"
                p="xs"
                style={{
                  background: 'rgba(0, 240, 255, 0.08)',
                  borderRadius: '6px',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                }}
              >
                <Group justify="space-between">
                  <Text size="xs" c="cyan.3" fw={600}>
                    &gt; System check: All Senior Engineers Ready
                  </Text>
                  <Badge size="xs" color="cyan" variant="filled">
                    ACTIVE
                  </Badge>
                </Group>
              </Box>
            </Paper>
          </Box>
        </SimpleGrid>

        {/* Bottom Feature Badges */}
        <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md" mt={60}>
          {stats.map((item, index) => (
            <Paper
              key={index}
              className="glass-card"
              p="md"
              radius="md"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <ThemeIcon size="xl" radius="md" color="cyan" variant="light">
                <item.icon size={24} />
              </ThemeIcon>
              <Box>
                <Text fw={700} size="sm">
                  {item.title}
                </Text>
                <Text size="xs" c="dimmed">
                  {item.desc}
                </Text>
              </Box>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

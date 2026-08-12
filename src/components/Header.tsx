'use client';

import {
  Container,
  Group,
  Button,
  Burger,
  Drawer,
  Stack,
  Text,
  Badge,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconCpu,
  IconPhoneCall,
  IconMail,
  IconChevronRight,
} from '@tabler/icons-react';
import Link from 'next/link';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Process', href: '#process' },
  { label: 'Company Info', href: '#company-info' },
  { label: 'Payments', href: '#payment-info' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box
      component="header"
      className="glass-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: '70px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container size="xl" style={{ width: '100%' }}>
        <Group justify="space-between" align="center">
          {/* Logo */}
          <Link
            href="#"
            style={{ textDecoration: 'none', color: 'inherit' }}
            aria-label="MOTHERBOARD Home"
          >
            <Group gap="xs" align="center">
              <Box
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, #00f0ff 0%, #0086a4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)',
                }}
              >
                <IconCpu size={22} color="#07090e" stroke={2.2} />
              </Box>
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Text
                  fw={900}
                  fz={{ base: '1.2rem', sm: '1.35rem' }}
                  style={{
                    letterSpacing: '1px',
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    lineHeight: 1.1,
                  }}
                >
                  MOTHERBOARD
                </Text>
                <Badge
                  variant="outline"
                  color="cyan"
                  size="xs"
                  p={0}
                  style={{
                    border: 'none',
                    fontSize: '0.65rem',
                    letterSpacing: '1.5px',
                    fontWeight: 700,
                    opacity: 0.85,
                  }}
                >
                  SP. Z O.O.
                </Badge>
              </Box>
            </Group>
          </Link>

          {/* Desktop Nav */}
          <Group gap="lg" visibleFrom="md">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  textDecoration: 'none',
                  color: '#cbd5e1',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                {item.label}
              </a>
            ))}
          </Group>

          {/* Actions */}
          <Group gap="xs">
            <Button
              component="a"
              href="tel:+48883934010"
              variant="subtle"
              color="cyan"
              visibleFrom="lg"
              leftSection={<IconPhoneCall size={16} />}
              size="sm"
            >
              +48 883 934 010
            </Button>

            <Button
              component="a"
              href="#contact"
              variant="gradient"
              gradient={{ from: 'cyan', to: 'blue', deg: 135 }}
              radius="md"
              size="sm"
              visibleFrom="sm"
              rightSection={<IconChevronRight size={16} />}
              style={{ boxShadow: '0 0 15px rgba(0, 240, 255, 0.25)' }}
            >
              Contact Us
            </Button>

            {/* Mobile Burger */}
            <Burger
              opened={opened}
              onClick={open}
              hiddenFrom="md"
              aria-label="Toggle navigation menu"
              size="sm"
            />
          </Group>
        </Group>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title={
          <Group gap="xs">
            <IconCpu size={24} color="#00f0ff" />
            <Text fw={800} fz="lg">
              MOTHERBOARD
            </Text>
          </Group>
        }
        hiddenFrom="md"
        zIndex={200}
        styles={{
          header: {
            background: '#07090e',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          },
          content: {
            background: '#07090e',
          },
        }}
      >
        <Stack gap="lg" mt="md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={close}
              style={{
                textDecoration: 'none',
                color: '#f8fafc',
                fontSize: '1.25rem',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {item.label}
            </a>
          ))}

          <Stack gap="sm" mt="xl">
            <Button
              component="a"
              href="tel:+48883934010"
              variant="outline"
              color="cyan"
              fullWidth
              size="lg"
              leftSection={<IconPhoneCall size={20} />}
            >
              Call +48 883 934 010
            </Button>
            <Button
              component="a"
              href="mailto:biuro@motherboard.pl"
              variant="default"
              fullWidth
              size="lg"
              leftSection={<IconMail size={20} />}
            >
              Email biuro@motherboard.pl
            </Button>
            <Button
              component="a"
              href="#contact"
              onClick={close}
              variant="gradient"
              gradient={{ from: 'cyan', to: 'blue', deg: 135 }}
              fullWidth
              size="lg"
              mt="xs"
            >
              Get Started / Contact Us
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
}

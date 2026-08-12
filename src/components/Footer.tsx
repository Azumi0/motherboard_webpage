'use client';

import { Container, Group, Text, Box, ActionIcon, Stack, Tooltip } from '@mantine/core';
import { IconCpu, IconArrowUp, IconPhoneCall, IconMail } from '@tabler/icons-react';
import Link from 'next/link';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      style={{
        background: '#040609',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '40px',
        paddingBottom: '40px',
        color: '#94a3b8',
      }}
    >
      <Container size="xl">
        <Stack gap="xl">
          <Group justify="space-between" align="center" wrap="wrap" gap="md">
            {/* Logo */}
            <Group gap="xs" align="center">
              <Box
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: 'linear-gradient(135deg, #00f0ff 0%, #0086a4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconCpu size={18} color="#07090e" stroke={2.2} />
              </Box>
              <Text fw={800} fz="1.1rem" c="white" style={{ letterSpacing: '0.5px' }}>
                MOTHERBOARD sp. z o.o.
              </Text>
            </Group>

            {/* Links */}
            <Group gap="lg">
              <Link href="#services" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.875rem' }}>
                Services
              </Link>
              <Link href="#tech-stack" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.875rem' }}>
                Tech Stack
              </Link>
              <Link href="#process" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.875rem' }}>
                Process
              </Link>
              <Link href="#company-info" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.875rem' }}>
                Company Registry
              </Link>
              <Link href="#payment-info" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.875rem' }}>
                Payment Details
              </Link>
              <Link href="#contact" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.875rem' }}>
                Contact
              </Link>
            </Group>

            {/* Back to top */}
            <Tooltip label="Back to top">
              <ActionIcon
                onClick={scrollToTop}
                size="lg"
                variant="light"
                color="cyan"
                radius="md"
                aria-label="Scroll back to top of page"
              >
                <IconArrowUp size={18} />
              </ActionIcon>
            </Tooltip>
          </Group>

          <Group justify="space-between" align="center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '20px' }}>
            <Text size="xs" c="dimmed">
              &copy; {new Date().getFullYear()} MOTHERBOARD sp. z o.o. All rights reserved. NIP: 9552587539 | KRS: 0001168436.
            </Text>

            <Group gap="md">
              <Text
                component="a"
                href="tel:+48883934010"
                size="xs"
                c="dimmed"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}
              >
                <IconPhoneCall size={12} /> +48 883 934 010
              </Text>
              <Text
                component="a"
                href="mailto:biuro@motherboard.pl"
                size="xs"
                c="dimmed"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}
              >
                <IconMail size={12} /> biuro@motherboard.pl
              </Text>
            </Group>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}

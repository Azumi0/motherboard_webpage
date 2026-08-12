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
  Button,
  ThemeIcon,
  Tooltip,
  Box,
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import {
  IconPhoneCall,
  IconMail,
  IconCopy,
  IconCheck,
  IconMapPin,
  IconFileText,
  IconBuildingSkyscraper,
  IconShieldCheck,
} from '@tabler/icons-react';

export function ContactSection() {
  const phoneClipboard = useClipboard({ timeout: 2000 });
  const emailClipboard = useClipboard({ timeout: 2000 });
  const companyNameClipboard = useClipboard({ timeout: 2000 });
  const nipClipboard = useClipboard({ timeout: 2000 });
  const krsClipboard = useClipboard({ timeout: 2000 });
  const addressClipboard = useClipboard({ timeout: 2000 });

  return (
    <Box
      component="section"
      id="contact"
      py={{ base: 60, md: 90 }}
      style={{
        background: 'rgba(15, 23, 42, 0.5)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Container size="xl">
        <Stack align="center" gap="xs" mb={{ base: 40, md: 50 }}>
          <Badge color="cyan" size="lg" radius="sm">
            Direct Communication &amp; Official Registry
          </Badge>
          <Title order={2} fz={{ base: '2rem', sm: '2.8rem' }} ta="center" fw={800}>
            Get in Touch With MOTHERBOARD
          </Title>
          <Text c="dimmed" fz="lg" maw={650} ta="center">
            Ready to discuss your project or scale your team? Get in touch directly via phone or email.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
          {/* 1. Direct Contact Card */}
          <Paper
            className="glass-card glow-box"
            p={{ base: 'lg', sm: 'xl' }}
            radius="xl"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(7, 9, 14, 0.95) 100%)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Group justify="space-between" align="center" mb="md">
                <Badge color="cyan" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}>
                  DIRECT CHANNELS
                </Badge>
                <Text size="xs" c="cyan.4" fw={600}>
                  Fastest Response &lt; 2h
                </Text>
              </Group>

              <Title order={3} fz="1.4rem" fw={700} mb="xs">
                Direct Contact Channels
              </Title>
              <Text size="sm" c="dimmed" mb="xl">
                Ready to discuss your project or scale your team? Get in touch directly with our leadership.
              </Text>
            </Box>

            <Stack gap="md" style={{ flex: 1, justifyContent: 'center' }}>
              {/* Direct Phone Card */}
              <Paper
                p="md"
                radius="lg"
                style={{
                  background: 'rgba(0, 240, 255, 0.04)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                }}
              >
                <Group justify="space-between" align="center" wrap="wrap" gap="sm">
                  <Group gap="md">
                    <ThemeIcon size={44} radius="md" color="cyan" variant="light">
                      <IconPhoneCall size={22} />
                    </ThemeIcon>
                    <Box>
                      <Text size="xs" c="dimmed" fw={600}>
                        DIRECT PHONE
                      </Text>
                      <Text
                        component="a"
                        href="tel:+48883934010"
                        fw={800}
                        fz="1.15rem"
                        c="cyan.3"
                        style={{ textDecoration: 'none' }}
                      >
                        +48 883 934 010
                      </Text>
                    </Box>
                  </Group>

                  <Tooltip label={phoneClipboard.copied ? 'Copied!' : 'Copy phone number'}>
                    <Button
                      size="xs"
                      variant="light"
                      color={phoneClipboard.copied ? 'teal' : 'cyan'}
                      leftSection={
                        phoneClipboard.copied ? <IconCheck size={14} /> : <IconCopy size={14} />
                      }
                      onClick={() => phoneClipboard.copy('+48 883 934 010')}
                      aria-label="Copy phone number +48 883 934 010"
                    >
                      {phoneClipboard.copied ? 'Copied' : 'Copy'}
                    </Button>
                  </Tooltip>
                </Group>
              </Paper>

              {/* Direct Email Card */}
              <Paper
                p="md"
                radius="lg"
                style={{
                  background: 'rgba(0, 240, 255, 0.04)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                }}
              >
                <Group justify="space-between" align="center" wrap="wrap" gap="sm">
                  <Group gap="md">
                    <ThemeIcon size={44} radius="md" color="cyan" variant="light">
                      <IconMail size={22} />
                    </ThemeIcon>
                    <Box>
                      <Text size="xs" c="dimmed" fw={600}>
                        OFFICIAL EMAIL
                      </Text>
                      <Text
                        component="a"
                        href="mailto:biuro@motherboard.pl"
                        fw={800}
                        fz="1.15rem"
                        c="cyan.3"
                        style={{ textDecoration: 'none' }}
                      >
                        biuro@motherboard.pl
                      </Text>
                    </Box>
                  </Group>

                  <Tooltip label={emailClipboard.copied ? 'Copied!' : 'Copy email'}>
                    <Button
                      size="xs"
                      variant="light"
                      color={emailClipboard.copied ? 'teal' : 'cyan'}
                      leftSection={
                        emailClipboard.copied ? <IconCheck size={14} /> : <IconCopy size={14} />
                      }
                      onClick={() => emailClipboard.copy('biuro@motherboard.pl')}
                      aria-label="Copy email biuro@motherboard.pl"
                    >
                      {emailClipboard.copied ? 'Copied' : 'Copy'}
                    </Button>
                  </Tooltip>
                </Group>
              </Paper>
            </Stack>
          </Paper>

          {/* 2. Official Company Registry Box (Corporate Details) */}
          <Paper
            id="company-info"
            className="glass-card glow-box"
            p={{ base: 'lg', sm: 'xl' }}
            radius="xl"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(7, 9, 14, 0.95) 100%)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box mb="xl">
              <Group justify="space-between" align="center" mb="md">
                <Badge color="cyan" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}>
                  CORPORATE ENTITY
                </Badge>
                <Text size="xs" c="cyan.4" fw={600}>
                  Verified Legal Registry
                </Text>
              </Group>

              <Group justify="space-between" align="center" wrap="wrap" gap="sm">
                <Box>
                  <Title order={3} fz="1.4rem" fw={800} mb={2}>
                    MOTHERBOARD sp. z o.o.
                  </Title>
                  <Text size="xs" c="dimmed">
                    Official Polish Commercial Register Entity
                  </Text>
                </Box>

                <Tooltip label={companyNameClipboard.copied ? 'Copied!' : 'Copy company name'}>
                  <Button
                    size="xs"
                    variant="light"
                    color={companyNameClipboard.copied ? 'teal' : 'cyan'}
                    leftSection={
                      companyNameClipboard.copied ? <IconCheck size={14} /> : <IconCopy size={14} />
                    }
                    onClick={() => companyNameClipboard.copy('MOTHERBOARD sp. z o.o.')}
                    aria-label="Copy company name MOTHERBOARD sp. z o.o."
                  >
                    {companyNameClipboard.copied ? 'Copied' : 'Copy'}
                  </Button>
                </Tooltip>
              </Group>
            </Box>

            <Stack gap="md">
              {/* NIP / VAT ID Tile */}
              <Paper
                p="md"
                radius="lg"
                style={{
                  background: 'rgba(0, 240, 255, 0.04)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                }}
              >
                <Group justify="space-between" align="center" wrap="wrap" gap="sm">
                  <Group gap="md">
                    <ThemeIcon size={44} radius="md" color="cyan" variant="light">
                      <IconFileText size={22} />
                    </ThemeIcon>
                    <Box>
                      <Text size="xs" c="dimmed" fw={600}>
                        NIP / VAT ID
                      </Text>
                      <Text
                        fw={800}
                        fz="1.15rem"
                        c="cyan.3"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}
                      >
                        9552587539
                      </Text>
                    </Box>
                  </Group>

                  <Tooltip label={nipClipboard.copied ? 'Copied!' : 'Copy NIP'}>
                    <Button
                      size="xs"
                      variant="light"
                      color={nipClipboard.copied ? 'teal' : 'cyan'}
                      leftSection={
                        nipClipboard.copied ? <IconCheck size={14} /> : <IconCopy size={14} />
                      }
                      onClick={() => nipClipboard.copy('9552587539')}
                      aria-label="Copy NIP 9552587539"
                    >
                      {nipClipboard.copied ? 'Copied' : 'Copy'}
                    </Button>
                  </Tooltip>
                </Group>
              </Paper>

              {/* KRS Tile */}
              <Paper
                p="md"
                radius="lg"
                style={{
                  background: 'rgba(0, 240, 255, 0.04)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                }}
              >
                <Group justify="space-between" align="center" wrap="wrap" gap="sm">
                  <Group gap="md">
                    <ThemeIcon size={44} radius="md" color="cyan" variant="light">
                      <IconBuildingSkyscraper size={22} />
                    </ThemeIcon>
                    <Box>
                      <Text size="xs" c="dimmed" fw={600}>
                        KRS
                      </Text>
                      <Text
                        fw={800}
                        fz="1.15rem"
                        c="cyan.3"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}
                      >
                        0001168436
                      </Text>
                    </Box>
                  </Group>

                  <Tooltip label={krsClipboard.copied ? 'Copied!' : 'Copy KRS'}>
                    <Button
                      size="xs"
                      variant="light"
                      color={krsClipboard.copied ? 'teal' : 'cyan'}
                      leftSection={
                        krsClipboard.copied ? <IconCheck size={14} /> : <IconCopy size={14} />
                      }
                      onClick={() => krsClipboard.copy('0001168436')}
                      aria-label="Copy KRS 0001168436"
                    >
                      {krsClipboard.copied ? 'Copied' : 'Copy'}
                    </Button>
                  </Tooltip>
                </Group>
              </Paper>

              {/* Registered Address Tile */}
              <Paper
                p="md"
                radius="lg"
                style={{
                  background: 'rgba(0, 240, 255, 0.04)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                }}
              >
                <Group justify="space-between" align="center" wrap="wrap" gap="sm">
                  <Group gap="md" style={{ flex: 1, minWidth: 200 }}>
                    <ThemeIcon size={44} radius="md" color="cyan" variant="light">
                      <IconMapPin size={22} />
                    </ThemeIcon>
                    <Box style={{ flex: 1 }}>
                      <Text size="xs" c="dimmed" fw={600}>
                        REGISTERED ADDRESS
                      </Text>
                      <Text fw={700} fz="0.95rem" c="cyan.3">
                        Aleja Powstańców Wielkopolskich 78A / LU2, 70-110 Szczecin, Poland
                      </Text>
                    </Box>
                  </Group>

                  <Tooltip label={addressClipboard.copied ? 'Copied!' : 'Copy address'}>
                    <Button
                      size="xs"
                      variant="light"
                      color={addressClipboard.copied ? 'teal' : 'cyan'}
                      leftSection={
                        addressClipboard.copied ? <IconCheck size={14} /> : <IconCopy size={14} />
                      }
                      onClick={() =>
                        addressClipboard.copy(
                          'Aleja Powstańców Wielkopolskich 78A / LU2, 70-110 Szczecin, Poland'
                        )
                      }
                      aria-label="Copy address"
                    >
                      {addressClipboard.copied ? 'Copied' : 'Copy'}
                    </Button>
                  </Tooltip>
                </Group>
              </Paper>
            </Stack>
          </Paper>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

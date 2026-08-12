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
  IconCreditCard,
  IconExternalLink,
  IconAt,
  IconClock,
  IconBuildingBank,
} from '@tabler/icons-react';

export function ContactSection() {
  const phoneClipboard = useClipboard({ timeout: 2000 });
  const emailClipboard = useClipboard({ timeout: 2000 });
  const companyNameClipboard = useClipboard({ timeout: 2000 });
  const nipClipboard = useClipboard({ timeout: 2000 });
  const krsClipboard = useClipboard({ timeout: 2000 });
  const addressClipboard = useClipboard({ timeout: 2000 });
  const ibanClipboard = useClipboard({ timeout: 2000 });
  const wiseTagClipboard = useClipboard({ timeout: 2000 });
  const wiseLinkClipboard = useClipboard({ timeout: 2000 });

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
            Direct Communication, Registry &amp; Payment Details
          </Badge>
          <Title order={2} fz={{ base: '2rem', sm: '2.8rem' }} ta="center" fw={800}>
            Get in Touch &amp; Company Info
          </Title>
          <Text c="dimmed" fz="lg" maw={700} ta="center">
            Reach out directly to discuss your project, view official corporate registration details, or access company payment links.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 'lg', md: 'xl' }}>
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
            <Box mb="md">
              <Group justify="space-between" align="center" mb="md">
                <Badge color="cyan" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}>
                  DIRECT CHANNELS
                </Badge>
                <Text size="xs" c="cyan.4" fw={600}>
                  Fastest Response &lt; 2h
                </Text>
              </Group>

              <Title order={3} fz="1.35rem" fw={700} mb="xs">
                Direct Contact
              </Title>
              <Text size="sm" c="dimmed">
                Reach out by phone or email to discuss your project or team scaling needs.
              </Text>
            </Box>

            <Stack gap="md" style={{ flex: 1, justifyContent: 'flex-start' }}>
              {/* Direct Phone Card */}
              <Paper
                p="md"
                radius="lg"
                style={{
                  background: 'rgba(0, 240, 255, 0.04)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                }}
              >
                <Group justify="space-between" align="center" wrap="nowrap" gap="sm">
                  <Group gap="sm" wrap="nowrap" style={{ overflow: 'hidden' }}>
                    <ThemeIcon size={40} radius="md" color="cyan" variant="light" style={{ flexShrink: 0 }}>
                      <IconPhoneCall size={20} />
                    </ThemeIcon>
                    <Box style={{ overflow: 'hidden' }}>
                      <Text size="xs" c="dimmed" fw={600}>
                        DIRECT PHONE
                      </Text>
                      <Text
                        component="a"
                        href="tel:+48883934010"
                        fw={800}
                        fz="1.05rem"
                        c="cyan.3"
                        style={{ textDecoration: 'none', display: 'block', whiteSpace: 'nowrap' }}
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
                      style={{ flexShrink: 0 }}
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
                <Group justify="space-between" align="center" wrap="nowrap" gap="sm">
                  <Group gap="sm" wrap="nowrap" style={{ overflow: 'hidden' }}>
                    <ThemeIcon size={40} radius="md" color="cyan" variant="light" style={{ flexShrink: 0 }}>
                      <IconMail size={20} />
                    </ThemeIcon>
                    <Box style={{ overflow: 'hidden' }}>
                      <Text size="xs" c="dimmed" fw={600}>
                        OFFICIAL EMAIL
                      </Text>
                      <Text
                        component="a"
                        href="mailto:biuro@motherboard.pl"
                        fw={800}
                        fz="0.95rem"
                        c="cyan.3"
                        style={{ textDecoration: 'none', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden' }}
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
                      style={{ flexShrink: 0 }}
                    >
                      {emailClipboard.copied ? 'Copied' : 'Copy'}
                    </Button>
                  </Tooltip>
                </Group>
              </Paper>

              {/* Support Hours Card */}
              <Paper
                p="md"
                radius="lg"
                style={{
                  background: 'rgba(0, 240, 255, 0.04)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                }}
              >
                <Group justify="space-between" align="center" wrap="nowrap" gap="sm">
                  <Group gap="sm" wrap="nowrap">
                    <ThemeIcon size={40} radius="md" color="cyan" variant="light" style={{ flexShrink: 0 }}>
                      <IconClock size={20} />
                    </ThemeIcon>
                    <Box>
                      <Text size="xs" c="dimmed" fw={600}>
                        BUSINESS HOURS
                      </Text>
                      <Text fw={700} fz="0.9rem" c="cyan.3">
                        Mon – Fri, 09:00 – 17:00 CET
                      </Text>
                    </Box>
                  </Group>

                  <Badge size="xs" variant="outline" color="teal">
                    Active
                  </Badge>
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
            <Box mb="md">
              <Group justify="space-between" align="center" mb="md">
                <Badge color="cyan" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}>
                  CORPORATE ENTITY
                </Badge>
                <Text size="xs" c="cyan.4" fw={600}>
                  Verified Legal Registry
                </Text>
              </Group>

              <Group justify="space-between" align="center" wrap="nowrap" gap="xs">
                <Box style={{ overflow: 'hidden' }}>
                  <Title order={3} fz="1.25rem" fw={800} mb={2} style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    MOTHERBOARD sp. z o.o.
                  </Title>
                  <Text size="xs" c="dimmed">
                    Official Polish Commercial Register
                  </Text>
                </Box>

                <Tooltip label={companyNameClipboard.copied ? 'Copied!' : 'Copy name'}>
                  <Button
                    size="xs"
                    variant="light"
                    color={companyNameClipboard.copied ? 'teal' : 'cyan'}
                    leftSection={
                      companyNameClipboard.copied ? <IconCheck size={14} /> : <IconCopy size={14} />
                    }
                    onClick={() => companyNameClipboard.copy('MOTHERBOARD sp. z o.o.')}
                    aria-label="Copy company name MOTHERBOARD sp. z o.o."
                    style={{ flexShrink: 0 }}
                  >
                    {companyNameClipboard.copied ? 'Copied' : 'Copy'}
                  </Button>
                </Tooltip>
              </Group>
            </Box>

            <Stack gap="md" style={{ flex: 1, justifyContent: 'flex-start' }}>
              {/* NIP / VAT ID Tile */}
              <Paper
                p="md"
                radius="lg"
                style={{
                  background: 'rgba(0, 240, 255, 0.04)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                }}
              >
                <Group justify="space-between" align="center" wrap="nowrap" gap="sm">
                  <Group gap="sm" wrap="nowrap">
                    <ThemeIcon size={40} radius="md" color="cyan" variant="light" style={{ flexShrink: 0 }}>
                      <IconFileText size={20} />
                    </ThemeIcon>
                    <Box>
                      <Text size="xs" c="dimmed" fw={600}>
                        NIP / VAT ID
                      </Text>
                      <Text
                        fw={800}
                        fz="1.05rem"
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
                      style={{ flexShrink: 0 }}
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
                <Group justify="space-between" align="center" wrap="nowrap" gap="sm">
                  <Group gap="sm" wrap="nowrap">
                    <ThemeIcon size={40} radius="md" color="cyan" variant="light" style={{ flexShrink: 0 }}>
                      <IconBuildingSkyscraper size={20} />
                    </ThemeIcon>
                    <Box>
                      <Text size="xs" c="dimmed" fw={600}>
                        KRS NUMBER
                      </Text>
                      <Text
                        fw={800}
                        fz="1.05rem"
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
                      style={{ flexShrink: 0 }}
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
                <Group justify="space-between" align="center" wrap="nowrap" gap="sm">
                  <Group gap="sm" wrap="nowrap" style={{ overflow: 'hidden' }}>
                    <ThemeIcon size={40} radius="md" color="cyan" variant="light" style={{ flexShrink: 0 }}>
                      <IconMapPin size={20} />
                    </ThemeIcon>
                    <Box style={{ overflow: 'hidden' }}>
                      <Text size="xs" c="dimmed" fw={600}>
                        REGISTERED ADDRESS
                      </Text>
                      <Text fw={700} fz="0.85rem" c="cyan.3" style={{ lineHeight: 1.3 }}>
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
                      style={{ flexShrink: 0 }}
                    >
                      {addressClipboard.copied ? 'Copied' : 'Copy'}
                    </Button>
                  </Tooltip>
                </Group>
              </Paper>
            </Stack>
          </Paper>

          {/* 3. Official Payment & Banking Details Box */}
          <Paper
            id="payment-info"
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
            <Box mb="md">
              <Group justify="space-between" align="center" mb="md">
                <Badge color="cyan" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}>
                  PAYMENT DETAILS
                </Badge>
                <Text size="xs" c="cyan.4" fw={600}>
                  Global Bank &amp; Wise
                </Text>
              </Group>

              <Title order={3} fz="1.35rem" fw={700} mb="xs">
                Banking &amp; Transfers
              </Title>
              <Text size="sm" c="dimmed">
                Official company IBAN bank account details and instant Wise payment channels.
              </Text>
            </Box>

            <Stack gap="md" style={{ flex: 1, justifyContent: 'flex-start' }}>
              {/* IBAN Tile */}
              <Paper
                p="md"
                radius="lg"
                style={{
                  background: 'rgba(0, 240, 255, 0.04)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                }}
              >
                <Group justify="space-between" align="center" wrap="nowrap" gap="sm">
                  <Group gap="sm" wrap="nowrap" style={{ overflow: 'hidden' }}>
                    <ThemeIcon size={40} radius="md" color="cyan" variant="light" style={{ flexShrink: 0 }}>
                      <IconBuildingBank size={20} />
                    </ThemeIcon>
                    <Box style={{ overflow: 'hidden' }}>
                      <Text size="xs" c="dimmed" fw={600}>
                        IBAN ACCOUNT NUMBER
                      </Text>
                      <Text
                        fw={800}
                        fz="0.95rem"
                        c="cyan.3"
                        style={{
                          fontFamily: 'var(--font-geist-mono)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        BE98 9058 9211 7693
                      </Text>
                    </Box>
                  </Group>

                  <Tooltip label={ibanClipboard.copied ? 'Copied!' : 'Copy IBAN'}>
                    <Button
                      size="xs"
                      variant="light"
                      color={ibanClipboard.copied ? 'teal' : 'cyan'}
                      leftSection={
                        ibanClipboard.copied ? <IconCheck size={14} /> : <IconCopy size={14} />
                      }
                      onClick={() => ibanClipboard.copy('BE98905892117693')}
                      aria-label="Copy IBAN BE98905892117693"
                      style={{ flexShrink: 0 }}
                    >
                      {ibanClipboard.copied ? 'Copied' : 'Copy'}
                    </Button>
                  </Tooltip>
                </Group>
              </Paper>

              {/* WISE Tag Tile */}
              <Paper
                p="md"
                radius="lg"
                style={{
                  background: 'rgba(0, 240, 255, 0.04)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                }}
              >
                <Group justify="space-between" align="center" wrap="nowrap" gap="sm">
                  <Group gap="sm" wrap="nowrap" style={{ overflow: 'hidden' }}>
                    <ThemeIcon size={40} radius="md" color="cyan" variant="light" style={{ flexShrink: 0 }}>
                      <IconAt size={20} />
                    </ThemeIcon>
                    <Box style={{ overflow: 'hidden' }}>
                      <Text size="xs" c="dimmed" fw={600}>
                        WISE TAG
                      </Text>
                      <Text
                        fw={800}
                        fz="1.05rem"
                        c="cyan.3"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}
                      >
                        @motherboardspzoo
                      </Text>
                    </Box>
                  </Group>

                  <Tooltip label={wiseTagClipboard.copied ? 'Copied!' : 'Copy Wise Tag'}>
                    <Button
                      size="xs"
                      variant="light"
                      color={wiseTagClipboard.copied ? 'teal' : 'cyan'}
                      leftSection={
                        wiseTagClipboard.copied ? <IconCheck size={14} /> : <IconCopy size={14} />
                      }
                      onClick={() => wiseTagClipboard.copy('@motherboardspzoo')}
                      aria-label="Copy Wise Tag @motherboardspzoo"
                      style={{ flexShrink: 0 }}
                    >
                      {wiseTagClipboard.copied ? 'Copied' : 'Copy'}
                    </Button>
                  </Tooltip>
                </Group>
              </Paper>

              {/* WISE Payment Link Tile */}
              <Paper
                p="md"
                radius="lg"
                style={{
                  background: 'rgba(0, 240, 255, 0.04)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                }}
              >
                <Group justify="space-between" align="center" wrap="nowrap" gap="sm">
                  <Group gap="sm" wrap="nowrap" style={{ overflow: 'hidden' }}>
                    <ThemeIcon size={40} radius="md" color="cyan" variant="light" style={{ flexShrink: 0 }}>
                      <IconCreditCard size={20} />
                    </ThemeIcon>
                    <Box style={{ overflow: 'hidden' }}>
                      <Text size="xs" c="dimmed" fw={600}>
                        WISE PAYMENT LINK
                      </Text>
                      <Text
                        component="a"
                        href="https://wise.com/pay/business/motherboardspzoo"
                        target="_blank"
                        rel="noopener noreferrer"
                        fw={700}
                        fz="0.85rem"
                        c="cyan.3"
                        style={{
                          textDecoration: 'none',
                          display: 'block',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                        }}
                      >
                        wise.com/pay/business/motherboardspzoo
                      </Text>
                    </Box>
                  </Group>

                  <Group gap={6} wrap="nowrap" style={{ flexShrink: 0 }}>
                    <Button
                      component="a"
                      href="https://wise.com/pay/business/motherboardspzoo"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="xs"
                      variant="gradient"
                      gradient={{ from: 'cyan', to: 'blue', deg: 135 }}
                      rightSection={<IconExternalLink size={12} />}
                      aria-label="Pay via Wise payment page"
                    >
                      Pay
                    </Button>

                    <Tooltip label={wiseLinkClipboard.copied ? 'Copied!' : 'Copy Link'}>
                      <Button
                        size="xs"
                        variant="light"
                        color={wiseLinkClipboard.copied ? 'teal' : 'cyan'}
                        onClick={() => wiseLinkClipboard.copy('https://wise.com/pay/business/motherboardspzoo')}
                        aria-label="Copy Wise payment link"
                      >
                        {wiseLinkClipboard.copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                      </Button>
                    </Tooltip>
                  </Group>
                </Group>
              </Paper>
            </Stack>
          </Paper>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

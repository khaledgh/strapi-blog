"use client";
import {
  Group,
  UnstyledButton,
  Text,
  ThemeIcon,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { revalidatePath } from "next/cache"
import Image from "next/image";
import Link from "next/link";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box className="py-4 px-2 md:px-14 shadow-md">
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href="/" prefetch={false} className={classes.link}>
            <Image
              src={`${PUBLIC_URL}/uploads/bracketed_high_resolution_logo_white_a4ab270cc9.png`}
              width={200}
              height={50}
              alt="logo"
            />
          </Link>
          <Group h="100%" gap={0} visibleFrom="sm">
            <Link href="/" prefetch={false} className={classes.link}>
              Home
            </Link>
            <Link href="/" prefetch={false} className={classes.link}>
              Website
            </Link>
            <Link href="/" prefetch={false} className={classes.link}>
              Mobile
            </Link>
            <Link href="/" prefetch={false} className={classes.link}>
              Desktop
            </Link>
          </Group>

           {/*<Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button> 
          </Group>*/}

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link href="/" prefetch={false}  className={classes.link}>
            Home
          </Link>
          <Link href="/" prefetch={false} className={classes.link}>
            Website
          </Link>
          <Link href="/" prefetch={false} className={classes.link}>
            Mobile
          </Link>
          <Link href="/" prefetch={false} className={classes.link}>
            Desktop
          </Link>

          <Divider my="sm" />

          {/* <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group> */}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

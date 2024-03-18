"use client";
import { Container, Group, Anchor } from "@mantine/core";
import classes from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Careers" },
];
const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
export function Footer() {
  const items = links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={`${classes.footer} py-4 px-2 md:px-14 shadow-md`}>
      <Container className={classes.inner}>
        <Image
          src={`${PUBLIC_URL}/uploads/bracketed_high_resolution_logo_white_a4ab270cc9.png`}
          width={200}
          height={50}
          alt="logo"
        />
        <Group className={classes.links}>
          <Link href="/" className={classes.link}>
            Home
          </Link>
          <Link href="/" className={classes.link}>
            Website
          </Link>
          <Link href="/" className={classes.link}>
            Mobile
          </Link>
          <Link href="/" className={classes.link}>
            Desktop
          </Link>
        </Group>
      </Container>
    </div>
  );
}

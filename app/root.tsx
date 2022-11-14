import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Links, Scripts, ScrollRestoration, LiveReload, Meta, Outlet } from "@remix-run/react";

import GlobalStyle, { Container, FooterStr } from './styles/global';
import { themes } from '~/styles/themes'
import Menu from "./components/menu";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "dotdev",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" },
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined"
          ? "__STYLES__"
          : null}
      </head>
      <body>

        <Container>
          <Menu />
          <Outlet context={themes} />
          <FooterStr>Made with 🌻☕🎧 by <a href="https://github.com/akadot" target="_blank" rel="noreferrer">akadot</a>.</FooterStr>
        </Container>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <GlobalStyle />
      </body>
    </html>
  );
}

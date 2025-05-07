import type { Metadata } from "next";
import { Inter } from "next/font/google";
import oboStar from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const obostar = oboStar({
  src: "./fonts/obostartest-regular.otf",
  variable: "--font-obostar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NerdWorks",
  description: "It is a comic reviewing website that is built",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${obostar.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

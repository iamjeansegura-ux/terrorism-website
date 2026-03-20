import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Understanding Terrorism: Root Causes and Prevention",
  description:
    "Educational college project website about terrorism awareness, domestic and foreign terrorism, root causes, and prevention.",
  keywords: [
    "terrorism awareness",
    "prevention",
    "criminal justice project",
    "college website",
    "root causes"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-brand-sand text-brand-ink antialiased">{children}</body>
    </html>
  );
}

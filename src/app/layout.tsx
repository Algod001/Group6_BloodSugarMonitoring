import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blood Sugar Monitoring",
  description: "AI-Powered Blood Sugar Monitoring System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
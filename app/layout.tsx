import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Github User Profile",
  description: "Web application that generates data based on searched username",
  icons: "",
  openGraph: { images: "logo.png", type: "website", locale: "en" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-black/95">{children}</body>
    </html>
  );
}

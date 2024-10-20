import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Github User Profile",
  description: "Web application that generates data based on searched username",
  icons: "https://github-user-profile-search.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f4fb486d.jpg&w=3840&q=75",
  openGraph: { images: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f4fb486d.jpg&w=3840&q=75", type: "website", locale: "en" },
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

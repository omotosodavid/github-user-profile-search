import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Github User Profile",
  description: "Web application that generates data based on searched username",
  icons:"https://img.freepik.com/free-vector/gradient-triangle-molecule-logo-technology-design_53876-116026.jpg?t=st=1729382835~exp=1729386435~hmac=650e7df42570cc87832f0f3a2ef434f19fc3e2abd71b254bafcd8f85d655449e&w=740",
  openGraph:{images:"logo.png",type:"website",locale:"en"}
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="dark:bg-black/95"
      >
        {children}
      </body>
    </html>
  );
}

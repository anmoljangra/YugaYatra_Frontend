import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YugaYatra Retail (OPC) Pvt Ltd — Building Digital Products. Creating Future Professionals.",
  description: "YugaYatra Retail (OPC) Pvt Ltd — a government-registered company building digital products and creating future professionals through real-world internships, product development, and career growth.",
  keywords: "YugaYatra, internship, digital products, career, training, Bengaluru, startup India",
  openGraph: {
    title: "YugaYatra Retail (OPC) Pvt Ltd — Building Digital Products. Creating Future Professionals.",
    description: "YugaYatra Retail (OPC) Pvt Ltd — a government-registered company building digital products and creating future professionals.",
    type: "website",
    url: "https://yugayatra.com",
    siteName: "YugaYatra",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

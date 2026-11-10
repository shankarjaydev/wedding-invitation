import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://wedding-invitation-eight-nu-66.vercel.app"
  ),
  title: "Sai Kiran Mohan & Sri Anusha Wedding",
  description:
    "Join us for Sai Kiran Mohan and Sri Anusha's wedding celebration on Sunday, 22nd November 2026 at Madhura Banquet Hall, KPHB, Hyderabad.",
  openGraph: {
    type: "website",
    title: "Sai Kiran Mohan & Sri Anusha Wedding",
    description:
      "We cordially invite you to celebrate the wedding of Sai Kiran Mohan & Sri Anusha on Sunday, 22nd November 2026 at Madhura Banquet Hall, KPHB, Hyderabad.",
    images: [
      {
        url: "/og-invite.jpg",
        width: 1200,
        height: 800,
        alt: "Sai Kiran Mohan & Sri Anusha Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Kiran Mohan & Sri Anusha Wedding",
    description:
      "We cordially invite you to celebrate the wedding of Sai Kiran Mohan & Sri Anusha on Sunday, 22nd November 2026 at Madhura Banquet Hall, KPHB, Hyderabad.",
    images: ["/og-invite.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Great+Vibes&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#c4a15b] selection:text-[#3f2219]">
        {children}
      </body>
    </html>
  );
}

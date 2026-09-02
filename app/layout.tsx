import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*
=========================================================
SITE-WIDE SEO METADATA
=========================================================
*/

export const metadata: Metadata = {
  metadataBase: new URL("https://effortlessevents.in"),

  title: {
    default:
      "Effortless Events | Farmhouses, Wedding & Event Venues in Delhi NCR",
    template: "%s | Effortless Events",
  },

  description:
    "Discover and book premium farmhouses, villas and event venues in Delhi NCR for weddings, birthdays, private parties, corporate events and celebrations with Effortless Events.",

  keywords: [
    "Effortless Events",
    "farmhouses in Delhi NCR",
    "farmhouse in Delhi",
    "farmhouses in Gurgaon",
    "farmhouse for party",
    "farmhouse for birthday party",
    "farmhouse for wedding",
    "wedding venues in Delhi NCR",
    "wedding venues in Gurgaon",
    "private party venues Delhi NCR",
    "birthday party venues Delhi NCR",
    "corporate event venues Delhi NCR",
    "event venues Delhi NCR",
    "villa for party Delhi NCR",
    "farmhouse booking Delhi",
    "farmhouse booking Gurgaon",
    "event planning Delhi NCR",
  ],

  authors: [
    {
      name: "Effortless Events",
      url: "https://effortlessevents.in",
    },
  ],

  creator: "Effortless Events",
  publisher: "Effortless Events",

  applicationName: "Effortless Events",

  category: "event planning",

  /*
  =======================================================
  CANONICAL
  =======================================================
  */

  alternates: {
    canonical: "/",
  },

  /*
  =======================================================
  ROBOTS
  =======================================================
  */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /*
  =======================================================
  OPEN GRAPH
  =======================================================
  */

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: "https://effortlessevents.in",

    siteName: "Effortless Events",

    title:
      "Effortless Events | Farmhouses, Wedding & Event Venues in Delhi NCR",

    description:
      "Discover and book premium farmhouses, villas and event venues in Delhi NCR for weddings, birthdays, private parties, corporate events and celebrations.",

    images: [
      {
        url: "/effortless-events-og.png",
        width: 1200,
        height: 630,
        alt:
          "Effortless Events - Farmhouses, Wedding & Event Venues in Delhi NCR",
      },
    ],
  },

  /*
  =======================================================
  TWITTER / X
  =======================================================
  */

  twitter: {
    card: "summary_large_image",

    title:
      "Effortless Events | Farmhouses, Wedding & Event Venues in Delhi NCR",

    description:
      "Discover premium farmhouses, villas and event venues in Delhi NCR for weddings, birthdays, private parties and celebrations.",

    images: ["/effortless-events-og.png"],
  },

  /*
  =======================================================
  ICONS
  =======================================================
  */

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

/*
=========================================================
ROOT LAYOUT
=========================================================
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}

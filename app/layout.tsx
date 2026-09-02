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

export const metadata: Metadata = {
  metadataBase: new URL("https://effortlessevents.in"),

  title: {
    default:
      "Effortless Events | Farmhouses, Venues & Event Planning in Delhi NCR",
    template: "%s | Effortless Events",
  },

  description:
    "Effortless Events is Delhi NCR's premier event planning and venue platform for farmhouses, weddings, birthdays, corporate events, private parties and celebrations.",

  keywords: [
    "Effortless Events",
    "farmhouses in Delhi NCR",
    "farmhouses in Gurgaon",
    "farmhouses near Delhi",
    "party farmhouses Delhi NCR",
    "birthday party farmhouse",
    "birthday party venues Delhi NCR",
    "wedding venues Delhi NCR",
    "wedding farmhouse Delhi",
    "private party venues Delhi NCR",
    "corporate event venues Delhi NCR",
    "event planning Delhi NCR",
    "farmhouse booking",
    "party venue Gurgaon",
    "farmhouse with pool Delhi NCR",
  ],

  authors: [
    {
      name: "Effortless Events",
    },
  ],

  creator: "Effortless Events",
  publisher: "Effortless Events",

  applicationName: "Effortless Events",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  icons: {
    icon: "/effortless-events-og.png",
    shortcut: "/effortless-events-og.png",
    apple: "/effortless-events-og.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://effortlessevents.in",
    siteName: "Effortless Events",

    title:
      "Effortless Events | Farmhouses, Venues & Event Planning in Delhi NCR",

    description:
      "Discover premium farmhouses, event venues and professional event planning services across Delhi NCR with Effortless Events.",

    images: [
      {
        url: "/effortless-events-og.png",
        width: 1200,
        height: 630,
        alt: "Effortless Events - Farmhouses, Venues & Event Planning in Delhi NCR",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Effortless Events | Farmhouses, Venues & Event Planning in Delhi NCR",

    description:
      "Discover premium farmhouses, venues and event planning services across Delhi NCR.",

    images: [
      {
        url: "/effortless-events-og.png",
        width: 1200,
        height: 630,
        alt: "Effortless Events",
      },
    ],
  },

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

  category: "Event Planning",
};

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
}    siteName: "Effortless Events",

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
    icon: "/effortless-events-og.png",
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

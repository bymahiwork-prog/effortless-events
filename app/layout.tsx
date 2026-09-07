import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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

    images: ["/effortless-events-og.png"],
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

        {/* =====================================================
            GOOGLE ADS GOOGLE TAG
        ===================================================== */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18057906313"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'AW-18057906313');
          `}
        </Script>

        {/* =====================================================
            OPENAI ADS MANAGER PIXEL
            Pixel ID: Ja9aXfC992WKVZqEKLYDy
        ===================================================== */}

        <Script id="openai-ads-pixel" strategy="afterInteractive">
          {`
            (function (w, d, s, u) {
              if (w.oaiq) return;

              var q = function () {
                q.q.push(arguments);
              };

              q.q = [];
              w.oaiq = q;

              var js = d.createElement(s);
              js.async = true;
              js.src = u;

              var f = d.getElementsByTagName(s)[0];
              f.parentNode.insertBefore(js, f);
            })(
              window,
              document,
              "script",
              "https://bzrcdn.openai.com/sdk/oaiq.min.js"
            );

            oaiq("init", {
              pixelId: "Ja9aXfC992WKVZqEKLYDy",
            });
          `}
        </Script>

        {/* =====================================================
            WEBSITE CONTENT
        ===================================================== */}

        {children}

        {/* =====================================================
            FLOATING WHATSAPP BUTTON
        ===================================================== */}

        <FloatingWhatsAppButton />

      </body>
    </html>
  );
}

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

  /*
   * =====================================================
   * FAVICON
   * =====================================================
   */

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  /*
   * =====================================================
   * OPEN GRAPH
   * =====================================================
   *
   * IMPORTANT:
   * Create /public/og-image.jpg
   * Recommended size: 1200 × 630
   */

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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Effortless Events - Farmhouses, Venues & Event Planning in Delhi NCR",
      },
    ],
  },

  /*
   * =====================================================
   * TWITTER / X
   * =====================================================
   */

  twitter: {
    card: "summary_large_image",

    title:
      "Effortless Events | Farmhouses, Venues & Event Planning in Delhi NCR",

    description:
      "Discover premium farmhouses, venues and event planning services across Delhi NCR.",

    images: ["/og-image.jpg"],
  },

  /*
   * =====================================================
   * ROBOTS
   * =====================================================
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
            GOOGLE TAG MANAGER
            Container ID: GTM-KGZKTPHK
        ===================================================== */}

        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KGZKTPHK');
          `}
        </Script>

        {/* =====================================================
            GOOGLE TAG MANAGER NOSCRIPT
        ===================================================== */}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGZKTPHK"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {/* =====================================================
            OPENAI ADS MANAGER PIXEL
            Pixel ID: Q3fYF8PM7QAcqUo8E2z6Ao
        ===================================================== */}

        <Script id="openai-ads-pixel" strategy="afterInteractive">
          {`
            !function(w,d,s,u){
              if(w.oaiq)return;

              var q=function(){
                q.q.push(arguments)
              };

              q.q=[];

              w.oaiq=q;

              var j=d.createElement(s);
              j.async=1;
              j.src=u;

              var f=d.getElementsByTagName(s)[0];
              f.parentNode.insertBefore(j,f)
            }(
              window,
              document,
              "script",
              "https://bzrcdn.openai.com/sdk/oaiq.min.js"
            );

            oaiq("init",{
              pixelId:"Q3fYF8PM7QAcqUo8E2z6Ao",
              debug:true
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

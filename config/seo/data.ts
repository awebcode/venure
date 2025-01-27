import { Metadata, type Viewport } from "next";
/**
 * @site_name Venure
 * Book your Venue
 * Search for venues to host your latest events
 */
export const defaultSEOdata: Metadata = {
  title: "Venure - Book the Perfect Venue for Your Events",
  description:
    "Venure is your go-to platform to search and book the ideal venues for weddings, parties, conferences, and more. Simplify your event planning process today!",
  keywords: [
    "venue booking",
    "event venues",
    "wedding venues",
    "conference halls",
    "book venues online",
    "Venure platform",
    "party venues",
    "venue search",
    "event planning",
    "find venues",
    "online venue booking",
    "venue management",
    "venue for rent",
    "best venues",
    "awebcode",
  ],
  openGraph: {
    title: "Venure - Your Perfect Venue Awaits",
    description:
      "Find and book the perfect venue for your next event. Explore a wide range of venues tailored to your needs and preferences on Venure.",
    url: "https://venure-app.vercel.app", // Replace with the actual Venure URL
    siteName: "Venure",
    locale: "en",
    type: "website",
  },
  twitter: {
    title: "Venure - Book the Perfect Venue",
    description:
      "Explore and book the ideal venues for your events on Venure. Streamline your event planning and find venues effortlessly.",
    card: "summary_large_image",
    site: "@venureapp", // Replace with actual Twitter handle
    creator: "@venureapp", // Replace with actual Twitter handle
  },
  appleWebApp: {
    title: "Venure - Book Venues for Events",
    capable: true,
    statusBarStyle: "default",
  },
  facebook: {
    appId: "123456789", // Replace with the actual Facebook App ID
  },
  robots: {
    index: true,
    follow: true,
    googleBot: "all",
  },
  icons: [
    {
      rel: "icon",
      url: "/apple-touch-icon.png",
    },
    {
      url: "https://venure-app.vercel.app/og-image.png", // Replace with actual Venure icon URL
      type: "image/png",
      sizes: "512x512",
    },
    {
      url: "https://venure-app.vercel.app/favicon.ico", // Replace with actual favicon URL
      type: "image/x-icon",
      sizes: "16x16",
    },
  ],
  applicationName: "Venure",
  authors: [
    { name: "Venure Team", url: "https://venure-app.vercel.app" }, // Replace with actual team URL
  ],
  verification: {
    google: "google-site-verification=1234567890", // Replace with actual verification code
    yandex: "yandex-verification=1234567890", // Replace with actual verification code
    yahoo: "y_key=1234567890", // Replace with actual verification code
  },
  manifest: "https://venure-app.vercel.app/manifest.webmanifest", // Replace with actual manifest URL
  appLinks: {
    web: [{ url: "https://venure-app.vercel.app", should_fallback: true }],
  },
  creator: "Venure",
  category: "venue booking, event planning",
};

// Default viewport data
export const defaultViewPort: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: "#FFFFFF", // White for event planning theme
  minimumScale: 1,
  interactiveWidget: "resizes-content",
};

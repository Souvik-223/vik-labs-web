import "~/styles/globals.css";

import { type Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import { Providers } from "~/components/providers";

export const metadata: Metadata = {
  title: "VikLabs — Independent Technology Studio",
  description:
    "VikLabs is an independent technology studio crafting exceptional digital products.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${patrickHand.variable} dark`}
      suppressHydrationWarning
    >
      <body
        className="bg-black text-white antialiased"
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

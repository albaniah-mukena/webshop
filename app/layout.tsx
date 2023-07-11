import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Albaniah is coming soon",
  description: "Halaman web resmi Albaniah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head> */}
      {/*   <link */}
      {/*     rel="icon" */}
      {/*     href="/icon.png" */}
      {/*     type="image/png" */}
      {/*     sizes="any" */}
      {/*   /> */}
      {/* </head> */}
      <body className={nunitoSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Header from "./_components/header";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: `Math Finance | U Toronto`,
  description: `The Math Finance program at UTStat is a unique program that combines the study of mathematics and finance.`,
};

const faviconPath = "/favicon";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href={`${faviconPath}/favicon.svg?v=mf1`} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${faviconPath}/apple-touch-icon.png?v=mf1`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${faviconPath}/favicon-32x32.png?v=mf1`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${faviconPath}/favicon-16x16.png?v=mf1`}
        />
        <link rel="manifest" href={`${faviconPath}/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${faviconPath}/safari-pinned-tab.svg?v=mf1`}
          color="#1e3765"
        />
        <link rel="shortcut icon" href={`${faviconPath}/favicon.ico?v=mf1`} />
        <meta name="msapplication-TileColor" content="#1e3765" />
        <meta
          name="msapplication-config"
          content={`${faviconPath}/browserconfig.xml`}
        />
        <meta name="theme-color" content="#1e3765" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.MathJax = {
                tex: {
                  inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
                  displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
                  processEscapes: true
                },
                options: {
                  skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
                }
              };
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Script
          id="mathjax"
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
          strategy="afterInteractive"
        />
        <Header />
        <div className="min-h-screen pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

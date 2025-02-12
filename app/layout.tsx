"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import "./globals.css";
import "./index.css";
import { MainMenu } from "@/components/MainMenu/MainMenu";
import Script from "next/script";

const Footer = dynamic(() =>
  import("@/components/Footer/Footer").then((module) => module.Footer)
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

  return (
    <html lang="es-AR">
      {/* <script type="text/javascript">(function () { var ldk = document.createElement('script'); ldk.type = 'text/javascript'; ldk.async = true; ldk.src = 'https://s.cliengo.com/weboptimizer/5bbcb1c2e4b036ee4dde5680/5bbcb1c3e4b036ee4dde5683.js?platform=view_installation_code'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ldk, s); })();</script> */}
      <head>
        <title>Ovnisa</title>
        <meta
          name="description"
          content="Soluciones técnicas al servicio de la industria"
        />
        <meta property="og:title" content="Ovnisa" />
        <meta property="og:url" content="https://www.ovnisa.com/" />
        <meta
          property="og:description"
          content="Soluciones técnicas al servicio de la industria"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <Script
          src=" https://s.cliengo.com/weboptimizer/5bbcb1c2e4b036ee4dde5680/5bbcb1c3e4b036ee4dde5683.js?platform=view_installation_code"
          strategy="lazyOnload"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KNKXLDZ');
            `,
          }}
        />
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNKXLDZ"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <MainMenu
          showSearchOverlay={showSearchOverlay}
          setShowSearchOverlay={setShowSearchOverlay}
        />
        {showSearchOverlay ? (
          <div className="w-full bg-slate-900 opacity-50 fixed searchOverlay z-40"></div>
        ) : null}
        <Suspense>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}

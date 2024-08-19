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
        <Script
          src=" https://s.cliengo.com/weboptimizer/5bbcb1c2e4b036ee4dde5680/5bbcb1c3e4b036ee4dde5683.js?platform=view_installation_code"
          strategy="lazyOnload"
        />
      </head>
      <body>
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

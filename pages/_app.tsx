import { MainLayout } from "@/modules/Layout/main-layout";
import "@/styles/globals.css";
import { Lexend } from 'next/font/google'

import type { AppProps } from "next/app";

const outfit = Lexend({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <style jsx global>{`
        :root {
          --font-sans: ${outfit.style.fontFamily};
        }
      `}</style>
    <MainLayout>
  <Component {...pageProps} />
  </MainLayout>
  </>
);
}

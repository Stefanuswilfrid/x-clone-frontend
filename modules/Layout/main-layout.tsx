import { ReactNode } from "react";
import { DefaultToastOptions } from "react-hot-toast";

import { JSX } from "react/jsx-runtime";
import Sidebar from "./Sidebar";
import { Overlay } from "./overlay";
import { Footer } from "./Footer";

const toastOptions: DefaultToastOptions = {
  style: {
    color: "white",
    borderRadius: "4px",
    backgroundColor: "rgb(var(--main-accent))",
  },
  success: { duration: 4000 },
};
export type LayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <div className=" bg-background flex w-full justify-center gap-0 lg:gap-4">
       <style jsx>{`
        #container {
          display: grid;
          grid-template-columns: minmax(60px, 290px) minmax(604px, 1fr) 300px;
          width: 100%;
          max-width: calc(290px + 604px + 300px);
          margin: 0 auto;
          min-height: 100vh;
          min-height: 100dvh;
        }

        @media (max-width: 960px) {
          #container {
            grid-template-columns: 260px 1fr ;
          }
        }

        @media (max-width: 781px) {
          #container {
            grid-template-columns: 200px 1fr;
          }
        }

        @media (max-width: 522px) {
          #container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div id="container" className="relative text-black">
      {/* <Overlay /> */}

      <Sidebar />
      <main className="border-x border-x-divider max-xs:border-none max-xs:pb-[60px]">
          {children}
        </main>
        <Footer />

      </div>
    </div>
  );
}

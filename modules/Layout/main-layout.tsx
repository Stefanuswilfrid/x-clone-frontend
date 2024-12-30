import { WindowContextProvider } from "@/lib/context/window-context";
import { ReactNode } from "react";
import { DefaultToastOptions, Toaster } from "react-hot-toast";
import { SWRConfig } from "swr";
import { Sidebar } from "./Sidebar/sidebar";
import { fetchJSON } from "@/lib/fetch";
import { JSX } from "react/jsx-runtime";

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
    <div className="flex w-full justify-center gap-0 lg:gap-4">
      <WindowContextProvider>
        <Sidebar />
        <SWRConfig value={{ fetcher: fetchJSON }}>{children}</SWRConfig>
      </WindowContextProvider>

      <Toaster
        position="bottom-center"
        toastOptions={toastOptions}
        containerClassName="mb-12 xs:mb-0"
      />
    </div>
  );
}

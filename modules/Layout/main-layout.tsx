import { WindowContextProvider } from "@/lib/context/window-context";
import { ReactNode } from "react";
import { DefaultToastOptions, Toaster } from "react-hot-toast";
import { SWRConfig } from "swr";
import { fetchJSON } from "@/lib/fetch";
import { JSX } from "react/jsx-runtime";
import Sidebar from "./Sidebar";

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
              <Sidebar />

    </div>
  );
}

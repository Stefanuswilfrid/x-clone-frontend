import { Tooltip } from "@/components/UI/tooltip";
import { useWindowSize } from "@/hooks/useWindowSize";
import clsx from "clsx";
import React from "react";
import { NavItem } from "./navigation";
import { HomeIcon, HomeIconInactive } from "@/components/Icons/home";
import { usePathname } from "next/navigation";
import { Search, SearchIconInactive } from "@/components/Icons/search";
import { Dialog } from "@/components/UI/dialog";
import { RegularButton } from "@/components/UI/Button/RegularButton";

export default function Sidebar() {
  const { width } = useWindowSize();
  const side = width < 522 ? "top" : "right";
  const pathname = usePathname();

  return (
    <aside
      className={clsx(
        "bg-background w-[calc(100%-var(--removed-body-scroll-bar-size))] xs:w-full",
        "xs:sticky xs:top-0 xs:py-4 xs:h-fit",
        "max-xs:h-[61px] max-xs:fixed max-xs:bottom-[calc(0px+env(safe-area-inset-bottom))] max-xs:border-t max-xs:border-t-divider"
      )}
    >
      <div className="relative w-full h-full">
        <ul
          className={clsx(
            "grid xs:grid-rows-7 text-left gap-8",
            "xs:ml-auto  xs:flex-col",
            "max-xs:h-full max-xs:px-4 max-xs:grid-cols-6"
          )}
        >
            <NavItem href="/">
              {pathname === "/" ? <HomeIcon /> : <HomeIconInactive />}
            </NavItem>

            <NavItem href="/search" text={"Explore"}>
            {pathname === "/search" ? <Search /> : <SearchIconInactive /> }
            </NavItem>

            <RegularButton
            isLoading={false}
            className="accent-tab absolute right-4 -translate-y-[72px rounded-full  text-lg  text-black
                       outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0
                         lg:w-8/12"

            >
              Tweet
              </RegularButton>

            {/* <li className="max-xs:hidden xs:-translate-y-1">
            <Dialog canEscape={false} needAuth>
                <Dialog.Trigger asChild>
                  <button className="w-9 h-9 active:opacity-80 duration-200 bg-primary rounded-full grid place-items-center">
                    <NewPost />
                    post
                  </button>
                </Dialog.Trigger>
              <Dialog.Content className="max-w-[480px]">
                <NewThreadDialog />
              </Dialog.Content>
            </Dialog>
          </li> */}

        </ul>
      </div>
    </aside>
  );
}

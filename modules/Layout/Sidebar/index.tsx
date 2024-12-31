import { Tooltip } from "@/components/UI/tooltip";
import { useWindowSize } from "@/hooks/useWindowSize";
import clsx from "clsx";
import React from "react";
import { NavItem } from "./navigation";
import { HomeIcon, HomeIconInactive } from "@/components/Icons/home";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const { width } = useWindowSize();
  const side = width < 522 ? "top" : "right";
  const pathname = usePathname();

  return (
    <aside
      className={clsx(
        "bg-blue-400 w-[calc(100%-var(--removed-body-scroll-bar-size))] xs:w-full",
        "xs:sticky xs:top-0 xs:py-4 xs:h-fit",
        "max-xs:h-[61px] max-xs:fixed max-xs:bottom-[calc(0px+env(safe-area-inset-bottom))] max-xs:border-t max-xs:border-t-divider"
      )}
    >
      <div className="relative w-full h-full">
        <ul
          className={clsx(
            "grid xs:grid-rows-7 place-items-center gap-8",
            "xs:ml-auto xs:w-[60px] xs:flex-col",
            "max-xs:h-full max-xs:px-4 max-xs:grid-cols-6"
          )}
        >
          <Tooltip label="Home" tabIndex={-1} side={side}>
            <NavItem href="/">
              {pathname === "/" ? <HomeIcon /> : <HomeIconInactive />}
            </NavItem>
          </Tooltip>

          <Tooltip label="Search ⌘K" tabIndex={-1} side={side}>
            <NavItem href="/search">
              {/* Add the Search Icon here */}
            </NavItem>
          </Tooltip>

          {/* Add additional NavItems here as needed */}
        </ul>
      </div>
    </aside>
  );
}

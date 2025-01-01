import { cn } from "@/lib/cn"
import Link from "next/link"

type URLS = '/' | '/notifications' | '/bookmarks' | '/replies' | 'search'
type AvailableUrls = URLS | Omit<URLS, string>


export function NavItem({
    href,
    children,
    className,
    needAuth,
    text
  }: {
    href: AvailableUrls
    children: React.ReactNode
    className?: string
    needAuth?: boolean
    text?: string
  }) {
    // const { openAuthDialog, isAuthenticated } = useAuth()
  
    return (
      <li className={cn('relative h-[28px] shrink-0 text-white', className)}>
        <Link
          scroll={false}
          onClick={(e) => {
            // if (needAuth && !isAuthenticated) {
            //   e.preventDefault()
            //   openAuthDialog()
            // }
          }}
          className="active:opacity-80 rounded-md gap-4 items-center flex"
          href={href as string}
        >
          {children}
          <span className="hidden lg:block ">{text}</span>
          
        </Link>
      </li>
    )
  }
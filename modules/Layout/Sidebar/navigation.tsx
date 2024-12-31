import { cn } from "@/lib/cn"
import Link from "next/link"

type URLS = '/' | '/notifications' | '/bookmarks' | '/replies' | 'search'
type AvailableUrls = URLS | Omit<URLS, string>


export function NavItem({
    href,
    children,
    className,
    needAuth,
  }: {
    href: AvailableUrls
    children: React.ReactNode
    className?: string
    needAuth?: boolean
  }) {
    // const { openAuthDialog, isAuthenticated } = useAuth()
  
    return (
      <li className={cn('relative h-[28px] shrink-0', className)}>
        <Link
          scroll={false}
          onClick={(e) => {
            // if (needAuth && !isAuthenticated) {
            //   e.preventDefault()
            //   openAuthDialog()
            // }
          }}
          className="active:opacity-80 rounded-md inline-block"
          href={href as string}
        >
          {children}
        </Link>
      </li>
    )
  }
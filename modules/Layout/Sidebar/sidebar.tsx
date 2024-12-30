import { JSX } from "react/jsx-runtime";

export type NavLink = {
    href: string;
    linkName: string;
    // iconName: IconName;
    iconName: string;
    disabled?: boolean;
    canBeHidden?: boolean;
};

const navLinks: Readonly<NavLink[]> = [
    {
      href: '/home',
      linkName: 'Home',
      iconName: 'HomeIcon'
    },
    {
      href: '/explore',
      linkName: 'Explore',
      iconName: 'HashtagIcon',
      disabled: true,
      canBeHidden: true
    },
    {
      href: '/notifications',
      linkName: 'Notifications',
      iconName: 'BellIcon',
      disabled: true
    },
    {
      href: '/messages',
      linkName: 'Messages',
      iconName: 'EnvelopeIcon',
      disabled: true
    },
    {
      href: '/bookmarks',
      linkName: 'Bookmarks',
      iconName: 'BookmarkIcon',
      canBeHidden: true
    },
    {
      href: '/lists',
      linkName: 'Lists',
      iconName: 'Bars3BottomLeftIcon',
      disabled: true,
      canBeHidden: true
    }
];

export function Sidebar(): JSX.Element {
    return (
<header
      id='sidebar'
      className='flex w-0 shrink-0 transition-opacity duration-200 xs:w-20 md:w-24
                 lg:max-w-none xl:-mr-4 xl:w-full xl:max-w-xs xl:justify-end'
    ></header>
    )
}
  
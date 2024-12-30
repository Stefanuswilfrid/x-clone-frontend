
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

    )
}
  
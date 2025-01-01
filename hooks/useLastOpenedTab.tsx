import React from 'react'


export const HOME_TABS = ['For You', 'Following'] as const
export type HomeTab = (typeof HOME_TABS)[number]

const getTabFromLocalStorage = (isAuthenticated: boolean) => {
  const lastOpenedTab = localStorage.getItem('lastOpenedTab') as HomeTab | null
  if (!isAuthenticated && lastOpenedTab === 'Following') {
    localStorage.removeItem('lastOpenedTab')
    return 'Highlights'
  }
  return lastOpenedTab || 'Highlights'
}

export function useLastOpenedTab() {
  const [activeTab, setActiveTab] = React.useState<HomeTab | null>(null)
//   const { isAuthenticated } = useAuth()

  React.useEffect(() => {
    const storedTab = getTabFromLocalStorage(true)
    setActiveTab(storedTab)
  }, [activeTab])

  return {
    activeTab,
    setActiveTab: (tab: HomeTab) => {
      localStorage.setItem('lastOpenedTab', tab)
      setActiveTab(tab)
    },
  }
}

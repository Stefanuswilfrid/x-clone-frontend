import { HOME_TABS, HomeTab } from "@/hooks/useLastOpenedTab";

export function Header({
  activeTab,
  setActiveTab,
}: {
  activeTab?: HomeTab | null;
  setActiveTab: (tab: HomeTab) => void;
}) {

  const  isAuthenticated  =false

  const tabs = isAuthenticated
  ? HOME_TABS
  : HOME_TABS.filter((tab) => tab !== 'Following')
  return (
    <header className="bg-background sticky top-0 grid place-items-center h-[61px] border-b-[1.5px] border-b-divider">
      <ul className="flex text-span text-[14px] gap-6 font-medium">
      {tabs.map((tab) => {
          return (
            <li key={tab} className="relative">
              {tab === 'For You' && status.state === 'For You' && (
                <span className="absolute top-1 -right-1.5 w-1 h-1 rounded-full bg-danger-soft" />
              )}
              <button
                onClick={() => {
                  if (tab === 'Following' || activeTab === 'Following') {
                    if (status.state === 'success') reset()
                  }
                  setActiveTab(tab)
                }}
                data-active={activeTab === tab}
                className="data-[active=true]:text-primary duration-200"
              >
                {tab}
              </button>
            </li>
          )
        })}
      </ul>
    </header>
  );
}

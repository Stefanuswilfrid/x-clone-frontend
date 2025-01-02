import { HOME_TABS, HomeTab } from "@/hooks/useLastOpenedTab";
import { useMutation } from "@/hooks/useMutation";

export function Header({
  activeTab,
  setActiveTab,
}: {
  activeTab?: HomeTab | null;
  setActiveTab: (tab: HomeTab) => void;
}) {

  const  isAuthenticated  =true

  const tabs = isAuthenticated
  ? HOME_TABS
  : HOME_TABS.filter((tab) => tab !== 'Following')

  // const { reset, status } = useMutation('/threads')

  return (
    <header className="bg-background sticky top-0 grid place-items-center h-[61px] border-b-[1.5px] border-b-divider">
      <ul className="flex text-span text-[14px] text-center font-medium h-full">
      {tabs.map((tab) => {
          return (
            <li key={tab} className=
            {`relative h-full ${activeTab ===tab? "border-b border-b-white":""} hover:opacity-60 duration-300  w-full place-content-center p-4
             `}>
              {/* {tab === 'For You' && status.state === 'success' && (
                <span className="absolute top-1 -right-1.5 w-1 h-1 rounded-full bg-danger-soft" />
              )} */}
              <button
                onClick={() => {
                  if (tab === 'For You' || activeTab === 'For You') {
                    // if (status.state === 'success') reset()
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

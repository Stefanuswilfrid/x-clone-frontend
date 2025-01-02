import { useLastOpenedTab } from "@/hooks/useLastOpenedTab";
import { Header } from "@/modules/Home/Header";


export default function Home() {
  const { activeTab, setActiveTab } = useLastOpenedTab()

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      </>
      
  );
}

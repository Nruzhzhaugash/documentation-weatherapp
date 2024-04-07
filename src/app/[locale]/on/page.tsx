import StartingPage from "@/_pages/On/ui/On";
import Layout from "@/widgets/Layout/Layout";
import Sidebar from "@/widgets/Sidebar/ui/Sidebar";

export default function Starting() {
  return (
    <Layout>
      <main className="container flex gap-[100px]">
        <Sidebar />
        <StartingPage />  
      </main>
    </Layout>
  )
}
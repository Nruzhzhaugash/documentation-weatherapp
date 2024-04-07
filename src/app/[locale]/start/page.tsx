import Sidebar from "@/widgets/Sidebar/ui/Sidebar";
import Layout from "@/widgets/Layout/Layout";
import StartPage from "@/_pages/Start/ui/StartPage";

export default function Start() {
  return (
    <Layout>
      <main className="container flex gap-[100px]">
        <Sidebar />
        <StartPage />
      </main>
    </Layout>
  )
}
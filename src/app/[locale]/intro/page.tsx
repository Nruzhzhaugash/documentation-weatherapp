import IntroPage from "@/_pages/introduction/ui/introPage";
import Layout from "@/widgets/Layout/Layout";
import Sidebar from "@/widgets/Sidebar/ui/Sidebar";

export default function Intro() {
  return (
    <Layout>
      <main className="flex container gap-[100px]">
        <Sidebar />
        <IntroPage />
      </main>
    </Layout>
  )
}
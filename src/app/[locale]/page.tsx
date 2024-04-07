import HomePages from "@/_pages/Home/ui/HomePagese";
import Layout from "@/widgets/Layout/Layout";
import Sidebar from "@/widgets/Sidebar/ui/Sidebar";

export default function Home() {
  return (
    <Layout>
      <main className="container flex gap-[100px]">
        <Sidebar />
        <HomePages />
      </main>
    </Layout>
  )
}
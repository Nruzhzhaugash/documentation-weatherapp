import ApiPage from "@/_pages/ApiPage/ui/ApiPage";
import Layout from "@/widgets/Layout/Layout";
import Sidebar from "@/widgets/Sidebar/ui/Sidebar";

export default function Api() {
  return (
    <Layout>
      <main className="container flex gap-[100px]">
        <Sidebar />
        <ApiPage />
      </main>
    </Layout>
  );
}

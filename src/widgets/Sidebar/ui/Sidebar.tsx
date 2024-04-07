import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Sidebar() {
  const sidebar = useTranslations("Sidebar");

  return (
    <aside className="flex flex-col gap-3 py-10">
      <h1 className="font-semibold my-1 whitespace-nowrap">
        {sidebar("started")}
      </h1>
      <Link
        href={"/"}
        className="font-medium hover:opacity-90 transition-all hover:underline text-gray-300"
      >
        Home
      </Link>
      <Link
        href={"/intro"}
        className="font-medium hover:opacity-90 transition-all hover:underline text-gray-300"
      >
        {sidebar("1_sidebar")}
      </Link>
      <Link
        href={"/start"}
        className="font-medium hover:opacity-90 transition-all hover:underline text-gray-300"
      >
        {sidebar("2_sidebar")}
      </Link>
      <Link
        href={"/on"}
        className="font-medium hover:opacity-90 transition-all hover:underline text-gray-300"
      >
        {sidebar("3_sidebar")}
      </Link>
      <Link
        href={"/api"}
        className="font-medium hover:opacity-90 transition-all text-gray-300 hover:underline"
      >
        API
      </Link>
    </aside>
  );
}

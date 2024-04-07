import { useTranslations } from "next-intl"

export default function ApiPage() {
  const api = useTranslations("Api")

  return (
    <section className="pt-10">
      <h1 className="text-[32px] font-bold mb-5">API</h1>
      <p className="font-medium mb-5">{api("text")}</p>
      <p className="mb-5">API: <a className="hover:underline mb-5" href="https://openweathermap.org/">https://openweathermap.org/</a></p>
      <p>{api("wha")}</p>
    </section>
  )
}
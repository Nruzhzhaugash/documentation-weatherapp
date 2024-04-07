import { useTranslations } from "next-intl"

export default function IntroPage() {
  const i = useTranslations("Intro")
  return (
    <section className="pt-10">
      <h1 className="text-[32px] font-bold mb-5">{i("title")}</h1>
      <p className="text-[24px] font-medium">{i("paragraph")}</p>
    </section>
  )
}
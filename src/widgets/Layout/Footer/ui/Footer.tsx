import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="container">
      <h1 className="text-center">{t("text_footer")}</h1>
    </footer>
  );
}

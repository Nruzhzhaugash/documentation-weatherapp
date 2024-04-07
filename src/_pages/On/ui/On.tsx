import { useTranslations } from "next-intl";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function StartingPage() {
  const launch = useTranslations("On");
  const s = useTranslations("Start")

  const code = `python app.py`;

  return (
    <section className="pt-10">
      <h1 className="text-[32px] font-bold mb-5">{launch("title")}</h1>
      <p className="font-medium mb-5">{launch("lol")}</p>
      <ul className="flex flex-col gap-2 mb-10 pl-10 list-decimal">
        <li className="text-[20px]">{s("text6")}</li>
        <li className="text-[20px]">{s("text7")}</li>
        <li className="text-[20px]">{s("text8")}</li>
      </ul>
      <SyntaxHighlighter className="mb-10" language="python" style={dracula}>
        {code}
      </SyntaxHighlighter>
      <h1 className="text-[32px] font-bold mb-5">{launch('text1')}</h1>
      <p className="font-medium mb-5">{launch("text2")}</p>
    </section>
  );
}

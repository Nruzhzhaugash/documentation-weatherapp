import { useTranslations } from "next-intl";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function StartPage() {
  const s = useTranslations("Start");

  const code = `python -m pip install --upgrade pip 
  
pip install requests`;

  return (
    <section className="pl-10 pt-10">
      <h1 className="text-[32px] font-bold mb-5">{s("text1")}</h1>
      <div className="flex flex-col gap-7">
        <p className="text-[24px] text-gray-400">{s("text2")}</p>
        <ul className="mb-10 pl-10 list-decimal flex flex-col gap-2">
          <li className="text-[20px]">Python 3.x</li>
          <li className="text-[20px]">{s("text3")}</li>
        </ul>
      </div>
      <h1 className="text-[32px] font-bold mb-5">{s("text4")}</h1>
      <p className="text-[24px] text-gray-400 mb-7">{s("text5")}</p>
      <ul className="flex flex-col gap-2 mb-10 pl-10 list-decimal">
        <li className="text-[20px]">{s("text6")}</li>
        <li className="text-[20px]">{s("text7")}</li>
        <li className="text-[20px]">{s("text8")}</li>
      </ul>
      <SyntaxHighlighter language="python" style={dracula}>
        {code}
      </SyntaxHighlighter>
    </section>
  );
}

import { useTranslations } from "next-intl";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function HomePages() {
  const translations = useTranslations("documentation");

  const code = `
  import requests

key = "YOUR_API_KEY"
city = "New York"

res = requests.get("https://api.openweathermap.org/data/2.5/weather", params={"q": city, "units": "metric", "lang": "RU", "APPID": key})
data = res.json()
  `;

  const code2 = `
  print("Город: ", city)
print("Температура: ", data["main"]["temp"])
print("Минимальная температура: ", data["main"]["temp_min"])
print("Максимальная температура: ", data["main"]["temp_max"])`

  return (
    <section className="pt-10">
      <h1 className="text-[32px] font-bold mb-10">
        {translations("websiteDocumentation")}
      </h1>
      <h1 className="text-[32px] mb-5">{translations("development")}</h1>
      <p className="mb-5">{translations("contributionSteps")}</p>
      <ul className="list-decimal pl-10 mb-5">
        <li>{translations("step1")}</li>
        <li>{translations("step2")}</li>
        <li>{translations("step3")}</li>
        <li>{translations("step4")}</li>
        <li>{translations("step5")}</li>
      </ul>
      <p>
        {translations("githubLink")}:{" "}
        <a
          href="https://github.com/Nruzhzhaugash/project"
          className="hover:underline font-bold"
        >
          {translations("clickHere")}
        </a>
      </p>
      <ul className="mb-10 list-disc pl-10">
        <li>{translations("queryCityOrCoordinates")}</li>
        <li>{translations("queryUnits")}</li>
        <li>{translations("queryLanguage")}</li>
        <li>{translations("queryAPIKey")}</li>
      </ul>
      <h1 className="mb-5 text-[32px] font-bold">{translations("texting")}</h1>
      <SyntaxHighlighter className='mb-5 w-[1000px]' language="python" style={dracula}>
        {code}
      </SyntaxHighlighter>
      <h1 className="font-bold mb-5">{translations("json")}</h1>
      <SyntaxHighlighter language="python" style={dracula}>
        {code2}
      </SyntaxHighlighter>
    </section>
  );
}

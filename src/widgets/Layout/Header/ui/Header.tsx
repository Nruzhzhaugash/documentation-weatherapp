import LangSwitcher from "@/features/lang-switcher/ui/lang-switcher";

export default function Header() {
  return (
    <header className="container pb-[30px] flex justify-between items-center">
      <div className="logo">
        Documentation for PY
      </div>
      <LangSwitcher />
    </header>
  )
}
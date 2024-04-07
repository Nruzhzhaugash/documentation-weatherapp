import { ReactNode } from "react";
import Header from "./Header/ui/Header";
import Footer from "./Footer/ui/Footer";

interface ILayout {
  children: ReactNode;
}
export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

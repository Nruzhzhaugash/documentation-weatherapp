import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  children: ReactNode | string;
}

export default function Button({ className, children, ...rest }: IButton) {
  return (
    <button
      className={classNames(className, "border-none, outline-none")}
      {...rest}
    >
      {children}
    </button>
  );
}

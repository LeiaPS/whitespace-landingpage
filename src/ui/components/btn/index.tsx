import React, { FC } from "react";

type BtnProps = {
  text?: string;
  hasIcon?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Btn: FC<BtnProps> = ({ text, hasIcon = true, ...props }) => {
  return (
    <button {...props}>
      {text}
      {hasIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      )}
    </button>
  );
};

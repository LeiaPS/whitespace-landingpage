import React from "react";

type NavMenuItemProps = {
  text: string;
  items?: string[];
  isActive?: boolean
} & React.LiHTMLAttributes<HTMLLIElement>;

export const NavMenuItem = ({ text, items, isActive = false, ...props }: NavMenuItemProps) => {
  return (
    <>
      <li {...props}>
        <span className="pr-3">{text}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 1L5 5L9.5 1"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      {items && isActive && (
        <ul className="top-12 absolute bg-secondary-white text-slate-600 text-xs px-5 py-2 rounded flex flex-col gap-1">
          {items.map((item, index) => {
            return <li className="hover:text-secondary-black hover:font-bold" key={index + "navMenuitem"}>{item}</li>;
          })}
        </ul>
      )}
      </li>
    </>
  );
};

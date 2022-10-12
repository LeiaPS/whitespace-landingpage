import { FC } from "react";
import { Btn } from "..";
import { PriceType } from "../../../ts/prices";

type PriceProps = {
  isActive?: boolean;
  price: PriceType;
} & React.HTMLAttributes<HTMLDivElement>;
export const Price: FC<PriceProps> = ({
  price,
  isActive = false,
  ...props
}) => {
  return (
    <div
      className={`flex pb-4 ${
        isActive && "bg-primary-dark text-white"
      } rounded`}
    >
      <div
        className={`${!isActive && "border border-secondary-yellow m-9 pb-5"}`}
        {...props}
      >
        <div className="rounded-xl flex-1 gap-6 px-6 py-7">
          <div className="py-5 flex flex-col gap-5">
            <h6 className="text-2xl font-semibold leading-9">{price.title}</h6>
            <h1 className="font-bold text-4xl leading-10">${price.value}</h1>
            <h6 className="text-lg font-medium">{price.subtitle}</h6>
          </div>
          <div className="text-base p-2 flex flex-col gap-4">
            {price.items.map((item, index) => {
              return (
                <div key={`price-${index}`} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h6 className="text-base w-[100%]">{item}</h6>
                </div>
              );
            })}
          </div>
          <Btn
            hasIcon={false}
            text="Get Started"
            className={`font-bold ${
              isActive
                ? "bg-primary-light text-white"
                : "bg-white text-secondary-grey border border-secondary-yellow"
            } mt-5 noicon`}
          />
        </div>
      </div>
    </div>
  );
};

import { FC, useState } from "react";
import { Btn, Price } from "..";
import { prices } from "../../../tests";

type PricingProps = {
  text?: string;
};
export const Pricing: FC<PricingProps> = () => {
  const [selected, setSelected] = useState(1)

  return (
    <section className="flex-1 h-[100%] px-10">
      <div className="text-center">
        <h1 className="text-black font-bold text-7xl">Choose Your Plan</h1>
        <h6 className="leading-10 text-lg">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </h6>
      </div>
      <div className="flex pb-4">
        {
          prices.map((priceItem, index) => {
            return (
              <Price key={index} isActive={index === selected} onClick={() => setSelected(index)} price={priceItem} />
            )
          })
        }
      </div>
    </section>
  );
};

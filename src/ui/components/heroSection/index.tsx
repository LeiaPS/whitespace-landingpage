import { FC } from "react";
import { Btn } from "../btn";
import { WorkManagement } from "../workManagement";

type HeroSectionProps = {
  text?: string;
};
export const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <>
      <section className="bg-primary-dark flex-1 h-[100%] flex px-10 py-16 gap-3">
        <div className="flex-1 justify-between flex flex-col">
          <div className=" flex flex-col justify-between gap-4 py-8 flex-1">
            <h1 className="text-6xl text-white">
              Get More Done with whitepace
            </h1>
            <h6 className="text-lg text-white">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </h6>
            <Btn
              text="Try Whitespace free"
              className="font-bold text-white w-[300px] bg-primary-light default"
            />
          </div>
        </div>
        <div className="flex-1 bg-primary-lightest"></div>
      </section>
    </>
  );
};

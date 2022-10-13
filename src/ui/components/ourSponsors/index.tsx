import { FC } from "react";
import { ourSponsorsType } from "../../../ts/ourSponsors";

type OurSponsorsProps = {
  ourSponsorsItems: ourSponsorsType;
};
export const OurSponsors: FC<OurSponsorsProps> = ({ ourSponsorsItems }) => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="font-bold text-6xl text-zinc-400">{ourSponsorsItems.title}</h1>
      <div className="w-[100%] flex justify-center gap-24 py-20">
      {ourSponsorsItems.urls.map((url, index) => {
        return (
            <div className="">
            <img className="h-10 flex" key={index} src={url} alt="" />
            </div>
        )
      })}
       
      </div>
    </section>
  );
};

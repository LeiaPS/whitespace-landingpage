import { FC } from "react";
import { Btn } from "..";

type CustomiseProps = {
  text?: string;
};
export const Customise: FC<CustomiseProps> = () => {
  return (
    <>
      <section className=" bg-primary-dark flex-1 h-[100%] flex px-10 py-16 gap-3">
        <div className="flex-1 justify-between flex flex-col">
          <div className=" flex flex-col justify-between gap-4 py-8 flex-1">
            <h1 className="text-7xl text-white font-bold">Use as Extension</h1>
            <h6 className="text-lg text-white">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </h6>
            <Btn
              text="Let's Go"
              className="w-[250px] font-bold text-white bg-primary-light  default"
            />
          </div>
        </div>
        <div className="h-[350px] flex-1 bg-primary-lightest"></div>
      </section>
      <section className="flex-1 h-[100%] flex px-10 py-16 gap-3">
        <div className="flex-1 bg-primary-lightest "></div>
        <div className="flex-1 justify-between flex flex-col">
          <div className=" flex flex-col justify-between gap-4 py-8 flex-1">
            <h1 className="text-7xl text-black font-bold">
              Customise it to your needs
            </h1>
            <h6 className="text-lg text-black">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </h6>
            <Btn
              text="Let's Go"
              className="font-bold text-white w-[250px] bg-primary-light default"
            />
          </div>
        </div>
      </section>
    </>
  );
};

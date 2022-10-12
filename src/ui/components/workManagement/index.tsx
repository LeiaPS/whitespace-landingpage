import { FC } from "react";
import { Btn } from "..";

type WorkManagementProps = {
  text?: string;
};
export const WorkManagement: FC<WorkManagementProps> = () => {
  return (
    <>
      <section className="flex-1 h-[100%] flex px-10 py-16 gap-3">
        <div className="flex-1 justify-between flex flex-col">
          <div className=" flex flex-col justify-between gap-4 py-8 flex-1">
            <h1 className="text-7xl text-black font-bold">
              Project Management
            </h1>
            <h6 className="text-lg text-black">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </h6>
            <Btn
              text="Get Started"
              className="w-[250px]  bg-primary-light font-bold text-white default"
            />
          </div>
        </div>
        <div className="flex-1 bg-primary-lightest"></div>
      </section>
      <section className="flex-1 h-[100%] flex px-40 py-16 gap-3">
        <div className="flex-1 flex ">
          <img className="h-[400px]" src="assets/img/image.png" alt="" />
        </div>
        <div className="flex-1 justify-between flex flex-col">
          <div className=" flex flex-col justify-between gap-4 py-8 flex-1">
            <h1 className="text-7xl text-black font-bold">Work together</h1>
            <h6 className="text-lg text-black">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </h6>
            <Btn
              text="Try it now"
              className="w-[250px] font-bold text-white bg-primary-light default"
            />
          </div>
        </div>
      </section>
    </>
  );
};

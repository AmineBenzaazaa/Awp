import { Feature } from "@/types/feature";

const SingleFeature = ({ process }: { process: Feature }) => {
  const { icon, title, paragraph } = process;
  return (
    <div className="w-full hover:bg-white/10 rounded hover:bg-opacity-10 hover:scale-110 duration-500 cursor-pointer p-10">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-white p-4 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;

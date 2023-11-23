const SectionTitle = ({
  title,
  subTitle,
  tagline,
  paragraph1,
  paragraph2,
  width = "620px",
  center,
  mb = "100px",
}: {
  title: string;
  subTitle?: string;
  tagline?: string;
  paragraph1: string;
  paragraph2: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="text-5xl sm:text-7xl font-meduim text-[#1f9356] !leading-tight">
          {title}
        </h2>
        <h2 className="text-5xl sm:text-7xl font-extrabold text-[#1f9356] !leading-tight uppercase">
          {subTitle}
        </h2>
        <h2 className="text-3xl sm:text-5xl font-meduim text-[#2E8ABF] !leading-tight uppercase">
          {tagline}
        </h2>
        <p className="text-sm sm:text-sm md:text-md py-6 text-gray-500 !leading-relaxed text-body-colormy-4 sm:my-1">
          {paragraph1}
        </p>
        <p className="text-sm sm:text-sm md:text-md text-gray-500 !leading-relaxed text-body-color  sm:block hidden  ">
          {paragraph2}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;

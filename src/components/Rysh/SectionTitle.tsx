const SectionTitle = ({
  title,
  subTitle,
  subTitle2,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  subTitle?: string;
  subTitle2?: string;
  paragraph: string;
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
        <h2 className="text-5xl sm:text-7xl font-meduim text-[#672a81] !leading-tight">
          {title}
        </h2>
        <h2 className="text-5xl sm:text-7xl font-extrabold text-[#672a81] !leading-tight uppercase">
          {subTitle}
        </h2>
        <h2 className="text-5xl sm:text-7xl font-light text-[#ca962b] !leading-tight uppercase">
          {subTitle2}
        </h2>
        <p className="text-sm sm:text-md py-6 text-gray-500 !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;

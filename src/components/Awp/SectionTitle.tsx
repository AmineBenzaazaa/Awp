const SectionTitle = ({
  title,
  subTitle,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  subTitle?: string;
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
        <h2 className="text-7xl font-meduim text-[#1f9356] !leading-tight">
          {title}
        </h2>
        <h2 className="text-7xl font-extrabold text-[#1f9356] !leading-tight uppercase">
          {subTitle}
        </h2>
        <p className="text-md text-gray-500 !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;

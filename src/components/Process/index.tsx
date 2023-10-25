import SectionTitle from "../Common/SectionTitle";
import SingleProcess from "./SingleProcess";
import processData from "./processData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-14 "
      >
        <div className="container ">
          <SectionTitle title="Our Process" paragraph="" SubTitle="" />

          <div className="grid grid-cols-1 gap-x-8  gap-y-20 md:grid-cols-2 lg:grid-cols-5">
            {processData.map((process) => (
              <SingleProcess key={process.id} process={process} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-14 "
      >
        <div className="container ">
          <SectionTitle
            title="Why choose us"
            // paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            
          />

          <div className="grid grid-cols-1 gap-x-8  gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

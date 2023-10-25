import SectionTitle from "../Common/SectionTitle";
import Question from "./question";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-14 "
      >
        <div className="container ">
          <SectionTitle title="FAQs" paragraph="" SubTitle="" center mb="10px"/>
          <div>
            <Question
              question="Do you have experience working with businesses in my industry?"
              answer="Yes, we have experience working with a diverse range of industries. We tailor our strategies to meet the unique needs of your industry and target audience."
            />
            <Question
              question="How will you measure the success of digital marketing campaigns?"
              answer="We use key performance indicators (KPIs) and analytics tools to track various metrics, including website traffic, conversions, click-through rates, and more. This data helps us assess the success of campaigns and make data-driven adjustments."
            />
            <Question
              question="How can I get started with your digital marketing services?"
              answer="Simply get in touch with us, and we'll set up an initial consultation to discuss your goals and develop a tailored digital marketing strategy for your business."
            />
            <Question
              question="How do you stay updated with the latest digital marketing technologies?"
              answer="Our team is committed to ongoing learning and staying up-to-date with the latest digital marketing trends, technologies, and best practices. We're members of industry organizations and continuously invest in training and education.
              "
            />
            <Question
              question="How can SEO benefit my business?"
              answer="SEO, or Search Engine Optimization, is a key component of digital marketing that improves your website's visibility on search engines like Google. Our SEO services can help your business rank higher in search results, bringing more traffic to your website and increasing opportunities for sales and conversions."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

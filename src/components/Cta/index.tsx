import Link from "next/link";

interface CtaProps {
  title: string;
  buttonText: string;
  href: string;
}

const Cta: React.FC<CtaProps> = ({ title, buttonText, href }) => {
  return (
    <>
      <div
        id="cta"
        className="relative z-10 m-20 overflow-hidden pt-[20px] pb-8 md:pt-[30px] md:pb-[30px]"
      >
        <div className="mx-20 rounded bg-white p-10">
          <h1 className="mb-5 text-7xl font-bold leading-tight text-black sm:text-xl sm:leading-tight md:text-7xl md:leading-tight">
            {title}
          </h1>
          <div className="justify-left flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href={href}
              className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;

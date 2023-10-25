import NewsLatterBox from "./NewsLatterBox";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import Logo from "../../../public/images/page 1/Logo.png";
const Contact = () => {
  return (
    <div id="contact" className="flex flex-row container">
      <section className="w-1/2 px-12 flex justify-center items-center">
        {" "}
        {/* Centered using flex */}
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <Image src={Logo} alt="Africa West Paper" width={280} height={1000} />
        </div>
      </section>
      <section className="w-1/2 px-12">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contactez-nous
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-200 sm:text-xl">
            Vous avez un problème technique ? Vous souhaitez envoyer des
            commentaires sur une fonctionnalité bêta ? Besoin de détails sur
            notre plan Business ? Faites le nous savoir.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-md font-bold text-white">
                email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="name@AWP.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-md font-bold text-white">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Sujet"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-md font-bold text-white">
                Message
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-bold w-full text-center bg-white text-green-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

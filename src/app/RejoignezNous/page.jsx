import React from "react";

const RejoignezNous = () => {
  return (
    <section
      id="home"
      className="from-[#22a45b] via-[#2f9e98] to-[#3f8ec4] relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] py-[20px] md:pt-[100px] md:pb-[20px] "
    >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          REJOIGNEZ NOUS
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-50 sm:text-md">
          Nous sommes ravis que vous envisagiez de rejoindre notre équipe
          dynamique chez Africa West Paper. Chez nous, nous croyons en la
          puissance de l'innovation, de la collaboration et du dévouement pour
          créer un environnement de travail exceptionnel.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-md font-bold text-gray-50"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-100 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="name@awp.ma"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-md font-bold text-gray-50"
            >
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-100 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="Dites-nous comment nous pouvons vous aider"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-md font-bold text-gray-50"
            >
              Votre message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  placeholder-gray-400  focus:ring-primary-500 focus:border-primary-500"
              placeholder="Laissez un commentaire..."
            ></textarea>
          </div>

          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-green-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-white hover:bg-primary-700 focus:ring-primary-800"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
};

export default RejoignezNous;

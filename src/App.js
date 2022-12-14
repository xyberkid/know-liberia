import Navbar from "./components/Navbar"
export default function App() {
  return (

    <>
      <Navbar />
      <main>
        <div class="relative bg-gray">
          <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
              <div class="w-full px-4 lg:w-5/12">
                <div class="rounder-300 box-border h-300 w-400 p-4 border-4">
                  <h1
                    class="text-dark mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]"
                  >
                    Welcome <br />
                    To Know Liberia.
                  </h1>
                  <p class="text-body-color mb-8 max-w-[480px] text-base">
                    Liberia officially the Republic of Liberia, is a country in West Africa.
                    It is bordered by Sierra Leone on the west, Guinea on the north and Ivory
                    Coast on the east. Liberia covers an area of 111,369 km2 (43,000 sq mi)
                    and is home to about 5.4 million people. English is the official language,
                    while over 30 indigenous languages are spoken within the country.

                  </p>
                  <ul class="flex flex-wrap items-center">
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                      <div class="relative mt-3 md:hidden">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                      </div>
                      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Counties</label>
                          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a county</option>
                            <option value="bomi">Bomi</option>
                            <option >Bong</option>
                            <option >Gbarpolu</option>
                            <option >Grand Bassa</option>
                            <option >Grand Cape Mount</option>
                            <option>Grand Gedeh</option>
                            <option>Grand Kru</option>
                            <option>Lofa</option>
                            <option>Margibi</option>
                            <option>Marry Land</option>
                            <option>Montserrado</option>
                            <option>Nimba</option>
                            <option>Rivercess</option>
                            <option>River Gee</option>
                            <option>Sinoe</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
              </div>
              <div class="w-full px-4 lg:w-2/4 ">
                <div class="lg:ml-auto lg:text-right">
                  <div class="relative z-10 inline-block pt-11 lg:pt-0 x-4 flex flex-wrap">
                    <img
                      src="https://www.mia.gov.lr/images/280px-Liberia_Counties.png" alt="hero"
                      class="max-w-full lg:ml-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>

  )
}
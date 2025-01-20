function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl uppercase">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-neutral-800 from-neutral-700">Tip Calculator</span>
      </h1>
      <form className="mx-auto my-10 w-7/12">
        {/* Bill Amount */}
        <div className="mb-5 flex items-center justify-center">
          <label htmlFor="bill-amount" className="text-sm font-medium text-gray-900 dark:text-white w-1/3">
            How much was the bill?
          </label>
          <input
            type="number"
            id="bill-amount"
            className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/* My Rating */}
        <div className="mb-5 flex items-center justify-center">
          <label htmlFor="my-rating" className="text-sm font-medium text-gray-900 dark:text-white w-1/3">
            How did you like the service?
          </label>
          <select
            id="countries"
            class="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="0" selected>
              Dissatisfied (0%)
            </option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing! (20%)</option>
          </select>
        </div>

        {/* Friend Rating */}
        <div className="mb-5 flex items-center justify-center">
          <label htmlFor="my-rating" className="text-sm font-medium text-gray-900 dark:text-white w-1/3">
            How did your friend like the service?
          </label>
          <select
            id="countries"
            class="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="0" selected>
              Dissatisfied (0%)
            </option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing! (20%)</option>
          </select>
        </div>
        {/* Submit Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 h-11 mt-10"
        >
          <svg className="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
            />
          </svg>
          Reset
        </button>
      </form>
    </div>
  );
}

export default App;

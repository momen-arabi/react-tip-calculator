import BillInput from "./BillInput";
import ResetButton from "./ResetButton";
import Result from "./Result";
import ServiceRating from "./ServiceRating";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl uppercase">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-neutral-800 from-neutral-700">Tip Calculator</span>
      </h1>
      <form className="mx-auto my-10 w-2/4">
        <BillInput />
        <ServiceRating />
        <div className="flex justify-end items-center mt-10">
          <div
            id="button-container"
            className="flex justify-end items-center pl-5 gap-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
            <Result />
            <ResetButton />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;

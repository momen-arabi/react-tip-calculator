import { useState } from "react";
import BillInput from "./BillInput";
import ResetButton from "./ResetButton";
import Result from "./Result";
import ServiceRating from "./ServiceRating";

function App() {
  const [bill, setBill] = useState(0);

  function onBillChange(amount) {
    if (amount >= 0) setBill(amount);
    else setBill(0);
  }

  function onReset() {
    setBill(0);
  }

  function onRatingSelect(perc) {
    console.log("Percentage Selected: " + perc);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl uppercase">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-neutral-800 from-neutral-700">Tip Calculator</span>
      </h1>
      <form className="mx-auto my-10 w-7/12">
        <BillInput bill={bill} onBillChange={onBillChange} />
        <ServiceRating bill={bill} onRatingSelect={onRatingSelect}>
          How did you like the service?
        </ServiceRating>
        <ServiceRating bill={bill} onRatingSelect={onRatingSelect}>
          How did your friend like the service?
        </ServiceRating>
        {bill > 0 && (
          <div className="flex justify-end items-center mt-10">
            <div
              id="button-container"
              className="flex justify-end items-center pl-5 gap-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            >
              <Result bill={bill} />
              <ResetButton onReset={onReset} />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;

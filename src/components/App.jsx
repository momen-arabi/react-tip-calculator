import { useState } from "react";
import BillInput from "./BillInput";
import ResetButton from "./ResetButton";
import Result from "./Result";
import ServiceRating from "./ServiceRating";

function App() {
  const [bill, setBill] = useState(0);
  const [myRating, setMyRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);

  function onBillChange(amount) {
    if (amount >= 0) setBill(amount);
    else setBill(0);
  }

  function onReset() {
    setBill(0);
    setMyRating(0);
    setFriendRating(0);
  }

  function onRatingSelect(target) {
    let { name, value } = target;
    if (name === "my-rating") setMyRating(+value);
    else if (name === "friend-rating") setFriendRating(+value);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl uppercase">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-neutral-800 from-neutral-700">Tip Calculator</span>
      </h1>
      <form className="mx-auto my-10 w-7/12">
        {/* BILL INPUT */}
        <BillInput bill={bill} onBillChange={onBillChange} />
        {/* MY RATING */}
        <ServiceRating selectValue={myRating} name="my" onRatingSelect={onRatingSelect}>
          How did you like the service?
        </ServiceRating>
        {/* FRIEND RATING */}
        <ServiceRating selectValue={friendRating} name="friend" onRatingSelect={onRatingSelect}>
          How did your friend like the service?
        </ServiceRating>
        {/* SEPARATOR */}
        <hr className="my-5 border-b-1 border-gray-200 dark:border-gray-600" />
        {/* RESULT & RESET BUTTON */}

        <div className="flex justify-between items-center mt-5">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-white inline mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Tip percentage will be calculated based on the selected rating.
          </p>
          {bill > 0 && (
            <div
              id="button-container"
              className="flex justify-end items-center pl-5 gap-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            >
              <Result bill={bill} myRating={myRating} friendRating={friendRating} />
              <ResetButton onReset={onReset} />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;

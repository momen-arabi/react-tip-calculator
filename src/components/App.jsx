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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-10">
      <div className="container mx-auto max-w-2xl px-4">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
            Split the Bill
          </span>
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <form className="space-y-6">
            <BillInput bill={bill} onBillChange={onBillChange} />

            <div className="space-y-4">
              <ServiceRating selectValue={myRating} name="my" onRatingSelect={onRatingSelect}>
                Your rating
              </ServiceRating>
              <ServiceRating selectValue={friendRating} name="friend" onRatingSelect={onRatingSelect}>
                Friend's rating
              </ServiceRating>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start mb-4">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-1 mr-2 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-gray-500 dark:text-gray-400">The tip is calculated as an average of both ratings</p>
              </div>

              {bill > 0 && (
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Result bill={bill} myRating={myRating} friendRating={friendRating} />
                  <ResetButton onReset={onReset} />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

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

  const onRatingSelect = (target) => {
    if (target.name === "my") {
      setMyRating(parseInt(target.value));
    } else {
      setFriendRating(parseInt(target.value));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 text-sm font-medium px-3 py-1 rounded-full mb-3">
            Simple & Quick
          </span>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Calculate Your Tip</h1>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 shadow-xl shadow-teal-50 dark:shadow-none">
            <div className="space-y-8">
              <BillInput bill={bill} onBillChange={onBillChange} />

              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">How was the service?</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <ServiceRating selectValue={myRating} name="my" onRatingSelect={onRatingSelect}>
                    Your Rating
                  </ServiceRating>
                  <ServiceRating selectValue={friendRating} name="friend" onRatingSelect={onRatingSelect}>
                    Friend's Rating
                  </ServiceRating>
                </div>
              </div>
            </div>
          </div>

          {bill > 0 && (
            <div className="space-y-4">
              <Result bill={bill} myRating={myRating} friendRating={friendRating} />
              <div className="flex justify-center pt-4">
                <ResetButton onReset={onReset} />
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Final tip is calculated as the average of both ratings
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

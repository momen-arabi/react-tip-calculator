function Result({ bill, myRating, friendRating }) {
  let averageRating = (myRating + friendRating) / 2;
  let tip = (averageRating * +bill) / 100;

  return (
    <div id="result" className="flex flex-col gap-1 py-3">
      <div className="text-sm text-gray-600 dark:text-gray-300">
        Bill amount: <span className="font-semibold">${(+bill).toFixed(2)}</span>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300">
        Tip ({averageRating}%): <span className="font-semibold">${tip.toFixed(2)}</span>
      </div>
      <div className="text-lg font-bold text-gray-900 dark:text-white">Total: ${(+bill + tip).toFixed(2)}</div>
    </div>
  );
}

export default Result;

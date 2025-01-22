function Result({ bill, myRating, friendRating }) {
  let averageRating = (myRating + friendRating) / 2;
  let tip = (averageRating * +bill) / 100;

  return (
    <div id="result" className="relative overflow-hidden">
      <div className="bg-teal-500 rounded-3xl p-6 text-white">
        <div className="relative space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-teal-100 text-sm">Bill Amount</p>
              <p className="text-2xl font-bold">${(+bill).toFixed(2)}</p>
            </div>
            <div className="h-12 w-px bg-teal-400"></div>
            <div className="space-y-1">
              <p className="text-teal-100 text-sm">Tip ({averageRating}%)</p>
              <p className="text-2xl font-bold">${tip.toFixed(2)}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-teal-400">
            <div className="flex justify-between items-end">
              <span className="text-teal-100">Total to Pay</span>
              <span className="text-3xl font-bold">${(+bill + tip).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 opacity-10">
          <svg className="w-48 h-48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Result;

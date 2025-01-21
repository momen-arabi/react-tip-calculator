function BillInput() {
  return (
    <div className="mb-5 flex items-center justify-center gap-2">
      <label htmlFor="bill-amount" className="text-sm font-medium text-gray-900 dark:text-white w-1/3">
        How much was the bill?
      </label>
      <input
        type="number"
        id="bill-amount"
        className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}

export default BillInput;

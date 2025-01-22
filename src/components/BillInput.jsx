function BillInput({ bill, onBillChange }) {
  return (
    <div className="relative">
      <label htmlFor="bill-amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Bill Amount
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
        <input
          type="number"
          id="bill-amount"
          name="bill-amount"
          value={bill}
          onChange={(e) => onBillChange(e.target.value)}
          className="pl-7 w-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="0.00"
          min="0"
          step="0.01"
        />
      </div>
    </div>
  );
}

export default BillInput;

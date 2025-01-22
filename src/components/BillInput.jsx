function BillInput({ bill, onBillChange }) {
  return (
    <div>
      <label htmlFor="bill-amount" className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
        What's the bill amount?
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-6">
          <span className="text-2xl font-semibold text-teal-500">$</span>
        </div>
        <input
          type="number"
          id="bill-amount"
          name="bill-amount"
          value={bill}
          onChange={(e) => onBillChange(e.target.value)}
          className="block w-full pl-12 pr-4 py-4 text-2xl font-semibold text-gray-900 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-teal-400"
          placeholder="0.00"
          min="0"
          step="0.01"
        />
      </div>
    </div>
  );
}

export default BillInput;

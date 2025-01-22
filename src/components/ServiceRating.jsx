function ServiceRating({ children, onRatingSelect, name, selectValue }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-2">
      <label htmlFor={`${name}-rating`} className="text-sm font-medium text-gray-900 dark:text-white w-1/3">
        {children}
      </label>
      <select
        name={`${name}-rating`}
        id={`${name}-rating`}
        value={selectValue}
        onChange={(e) => onRatingSelect(e.target)}
        className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default ServiceRating;

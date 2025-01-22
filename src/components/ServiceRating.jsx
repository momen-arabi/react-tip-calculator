function ServiceRating({ children, onRatingSelect, name, selectValue }) {
  return (
    <div>
      <label htmlFor={`${name}-rating`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {children}
      </label>
      <select
        name={`${name}-rating`}
        id={`${name}-rating`}
        value={selectValue}
        onChange={(e) => onRatingSelect(e.target)}
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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

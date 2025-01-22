import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";

function ServiceRating({ children, onRatingSelect, name, selectValue }) {
  const options = [
    { value: "0", label: "😕 Not satisfied (0%)" },
    { value: "5", label: "🙂 Satisfied (5%)" },
    { value: "10", label: "😊 Very satisfied (10%)" },
    { value: "20", label: "🤩 Outstanding (20%)" },
  ];

  const selectedOption = options.find((option) => option.value === selectValue.toString());

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">{children}</label>

      <Listbox value={selectedOption} onChange={(option) => onRatingSelect({ name, value: option.value })}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button className="relative w-full py-3 px-4 text-left bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <span className="block truncate pr-8">{selectedOption.label}</span>
              <span className="absolute inset-y-0 right-2 flex items-center">
                <svg
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${open ? "transform rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </Listbox.Button>

            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options className="absolute z-10 w-full mt-1 overflow-auto bg-white dark:bg-gray-700 rounded-xl max-h-60 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-3 px-4 ${active ? "bg-teal-500 text-white" : "text-gray-900 dark:text-white"}`
                    }
                  >
                    {({ selected, active }) => <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{option.label}</span>}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
}

export default ServiceRating;

import React from 'react';

const InlineAddOnAndDropdownInput = ({ id, label, placeholder, options, ...props }) => {
  return (
    <div className='py-2'>
      <label htmlFor={id} className="block text-sm font-medium text-font-color-dark">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name={id}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-font-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
          placeholder={placeholder}
          {...props}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor={`${id}-currency`} className="sr-only">
            Currency
          </label>
          <select
            id={`${id}-currency`}
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm"
            {...props}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InlineAddOnAndDropdownInput;

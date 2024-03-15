import React from 'react';

const LeadingDropdownInput = ({ id, label, placeholder, options, inputProps }) => {
  return (
    <div className='py-2'>
      <label htmlFor={id} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <select
            id={`${id}-select`}
            name={`${id}-select`}
            autoComplete="country"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-1 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm"
            {...inputProps} // Assuming any additional props for select input
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          name={id}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
          placeholder={placeholder}
          {...inputProps} // Assuming any additional props for text input
        />
      </div>
    </div>
  );
};

export default LeadingDropdownInput;

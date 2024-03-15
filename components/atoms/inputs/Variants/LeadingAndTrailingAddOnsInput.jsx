import React from 'react';

const LeadingAndTrailingAddOnsInput = ({ id, label, placeholder, leadingText, trailingText, ...props }) => {
  return (
    <div className='py-2'>
      <label htmlFor={id} className="block text-sm font-medium text-font-color-dark">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{leadingText}</span>
        </div>
        <input
          type="text"
          name={id}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm"
          placeholder={placeholder}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm">{trailingText}</span>
        </div>
      </div>
    </div>
  );
};

export default LeadingAndTrailingAddOnsInput;

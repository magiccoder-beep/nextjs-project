import React from 'react';

const InlineAddOnInput = ({ id, label, placeholder, addonText, ...props }) => {
  return (
    <div className='py-2'>
      <label htmlFor={id} className="block text-sm font-medium text-font-color-dark">
        {label}
      </label>
      <div className="mt-4 bg-white">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus:ring-brand-primary">
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{addonText}</span>
          <input
            type="text"
            name={id}
            id={id}
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            {...props}
          />
        </div>
      </div>
    </div>
  );
};

export default InlineAddOnInput;

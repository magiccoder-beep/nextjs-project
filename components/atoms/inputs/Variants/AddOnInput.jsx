import React from 'react';

const AddOnInput = ({ id, label, addonText, placeholder, ...props }) => {
  return (
    <div className='py-2'>
      <label htmlFor={id} className="block text-sm font-medium text-font-color-dark">
        {label}
      </label>
      <div className="mt-4 flex rounded-md shadow-sm">
        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
          {addonText}
        </span>
        <input
          type="text"
          name={id}
          id={id}
          className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
};

export default AddOnInput;

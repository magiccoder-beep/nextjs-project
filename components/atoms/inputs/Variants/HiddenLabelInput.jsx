import React from 'react';

const HiddenLabelInput = ({ id, label, placeholder, ...props }) => {
  return (
    <div className='py-2'>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type="email"
        name={id}
        id={id}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default HiddenLabelInput;

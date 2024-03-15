import React from 'react';

const CustomizeInputComponent = ({ id, label, placeholder, IconComponent, type = 'text', value, ...props }) => {
  
  return (
    <div className='py-2'>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {IconComponent && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <IconComponent className="h-5 w-5 text-brand-tertiary" aria-hidden="true" />
          </div>
        )}
        <input
          type={type}
          name={id}
          id={id}
          className={`block w-full rounded-md border-0 py-1.5 ${IconComponent ? 'pl-10' : 'pl-3'} text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6`}
          placeholder={placeholder}
          text={value}
          {...props}
        />
      </div>
    </div>
  );
};

export default CustomizeInputComponent;

import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

const ValidationErrorInput = ({ id, label, placeholder, errorMessage, ...props }) => {
  return (
    <div className='py-2'>
      <label htmlFor={id} className="block text-sm font-medium text-font-color-dark">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="email"
          name={id}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          aria-invalid="true"
          aria-describedby={`${id}-error`}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {/* <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" /> */}
        </div>
      </div>
      <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
        {errorMessage || 'Not a valid email address.'}
      </p>
    </div>
  );
};

export default ValidationErrorInput;

// TrailingIconInput.jsx
import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';

const TrailingIconInput = ({ id, label, placeholder, ...props }) => {
  return (
    <div className='py-2'>
      <label htmlFor={id} className="block text-sm font-medium text-font-color-dark">
        {label}
      </label>
      <div className="relative mt-4 rounded-md shadow-sm">
        <input
          type="text"
          name={id}
          id={id}
          className="block w-full rounded-md border-0 pl-2 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
          placeholder={placeholder}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default TrailingIconInput;

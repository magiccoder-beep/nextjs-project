import React from 'react';
import { BarsArrowUpIcon, UsersIcon } from '@heroicons/react';

const LeadingIconAndButtonInput = ({ id, label, placeholder, buttonOnClick, ...props }) => {
  return (
    <div className='py-2'>
      <label htmlFor={id} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name={id}
            id={id}
            className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
            placeholder={placeholder}
            {...props}
          />
        </div>
        <button
          type="button"
          onClick={buttonOnClick}
          className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <BarsArrowUpIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          Sort
        </button>
      </div>
    </div>
  );
};

export default LeadingIconAndButtonInput;

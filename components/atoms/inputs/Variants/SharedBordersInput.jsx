import React from 'react';

const SharedBordersInput = ({ cardNumberProps, expirationDateProps, cvcProps, countryProps, postalCodeProps }) => {
  return (
    <div>
      <fieldset>
        <legend className="block text-sm font-medium leading-6 text-gray-900">Card Details</legend>
        <div className="mt-2 -space-y-px rounded-md bg-white shadow-sm">
          <input
            type="text"
            {...cardNumberProps}
            className="relative block w-full rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Card number"
          />
          <div className="flex -space-x-px">
            <input
              type="text"
              {...expirationDateProps}
              className="relative block w-1/2 rounded-none border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="MM / YY"
            />
            <input
              type="text"
              {...cvcProps}
              className="relative block w-1/2 rounded-none rounded-r-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="CVC"
            />
          </div>
        </div>
      </fieldset>
      
      <fieldset className="mt-6 bg-white">
        <legend className="block text-sm font-medium leading-6 text-gray-900">Billing address</legend>
        <select
          {...countryProps}
          className="relative block w-full rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          {/* Add options here */}
        </select>
        <input
          type="text"
          {...postalCodeProps}
          className="relative block w-full rounded-b-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="ZIP / Postal code"
        />
      </fieldset>
    </div>
  );
};

export default SharedBordersInput;

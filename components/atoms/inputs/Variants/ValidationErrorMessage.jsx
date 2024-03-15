import React from 'react';

const ValidationErrorMessage = ({ errorMessage, ...props }) => {
  return (
    <div className='py-2'>
      <p className="mt-2 text-sm text-red-600">
        {'Not a valid email address.'}
      </p>
    </div>
  );
};

export default ValidationErrorMessage;

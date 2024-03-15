import React from 'react';

const ValidationErrorMessage = ({ errorMessage, ...props }) => {
  console.log(props.status);
  return (
    <div className='py-2'>
      <p className="mt-2 text-sm text-red-600">
        {!props.status.userEmailValid && 'Not a valid email address.'}
      </p>
      <p className="mt-2 text-sm text-red-600">
        {!props.status.phoneNumberValid &&'You have to fill phone number'}
      </p>
      <p className="mt-2 text-sm text-red-600">
        {!props.status.userNameValid && 'You have to fill user name'}
      </p>
    </div>
  );
};

export default ValidationErrorMessage;

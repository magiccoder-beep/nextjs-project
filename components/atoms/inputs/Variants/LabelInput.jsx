export const LabelInput = ({ id, label, placeholder, ...props }) => {
  return (
        <div className='py-2'>
          <label htmlFor={id} className="block text-sm font-medium text-font-color-dark">
            {label}
          </label>
          <div className="mt-4">
            <input
              type="email"
              name={id}
              id={id}
              className="block w-full rounded-md border-0 pl-2 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
              placeholder={placeholder}
              {...props}
            />
          </div>
        </div>
      );
    };

    export default LabelInput;
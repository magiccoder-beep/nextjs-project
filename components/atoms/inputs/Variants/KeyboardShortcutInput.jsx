const KeyboardShortcutInput = ({ id, label, placeholder, shortcut, ...props }) => {
    return (
      <div className='py-2'>
        <label htmlFor={id} className="block text-sm font-medium text-font-color-dark">
          {label}
        </label>
        <div className="relative mt-2 flex items-center">
          <input
            type="text"
            name={id}
            id={id}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 pr-14"
            placeholder={placeholder}
            {...props}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-1.5">
            <kbd className="inline-flex items-center rounded border border-gray-200 px-1 text-xs text-gray-400">
              {shortcut}
            </kbd>
          </div>
        </div>
      </div>
    );
  };
  
  export default KeyboardShortcutInput;
  
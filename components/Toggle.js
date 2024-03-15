import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Toggle({ checked, onChange, label, description }) {
  return (
    <Switch.Group as="div" className="flex items-center justify-between py-2">
      {/* Label à esquerda */}
      <Switch.Label as="span" className="flex-grow text-sm">
        <span className="font-brand font-medium text-lg text-gray-900">{label}</span>
        {description && <span className="ml-2 text-gray-500">({description})</span>}
      </Switch.Label>
      {/* Switch à direita */}
      <Switch
        checked={checked}
        onChange={onChange}
        className={classNames(
          checked ? 'bg-brand-primary' : 'bg-gray-200',
          'relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            checked ? 'translate-x-5' : 'translate-x-0',
            'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
    </Switch.Group>
  );
}

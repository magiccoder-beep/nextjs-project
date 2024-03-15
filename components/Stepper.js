import { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Stepper({ steps, currentStep }) {
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, index) => (
          <li key={step.name} className={classNames(index !== steps.length - 1 ? 'pb-4' : '', 'relative')}>
            {index < currentStep ? (
              // Step Completed
              <div className="group relative flex items-start">
                <div className="flex h-9 items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary">
                    <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-brand-primary" aria-hidden="true" />
                )}
                <span className={`ml-4 flex min-w-0 flex-col ${isSmallViewport ? 'hidden' : ''}`}>
                  <span className="font-brand text-lg font-bold">{step.name}</span>
                  <span className="font-brand text-sm text-gray-500">{step.description}</span>
                </span>
              </div>
            ) : index === currentStep ? (
              // Step Current
              <div className="group relative flex items-start" aria-current="step">
                <div className="flex h-9 items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-primary bg-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
                  </span>
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                )}
                <span className={`ml-4 flex min-w-0 flex-col ${isSmallViewport ? 'hidden' : ''}`}>
                  <span className="font-brand text-lg font-bold text-font-color-dark">{step.name}</span>
                  <span className="font-brand text-sm text-gray-500">{step.description}</span>
                </span>
              </div>
            ) : (
              // Step Upcoming
              <div className="group relative flex items-start">
                <div className="flex h-9 items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-transparent" />
                  </span>
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                )}
                <span className={`ml-4 flex min-w-0 flex-col ${isSmallViewport ? 'hidden' : ''}`}>
                  <span className="font-brand text-lg font-bold text-gray-500">{step.name}</span>
                  <span className="font-brand text-sm text-gray-500">{step.description}</span>
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

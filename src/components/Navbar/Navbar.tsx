import React from 'react';
import { Disclosure } from '@headlessui/react';
import { CodeIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const navigation = [{ name: 'Home', href: '/', current: true }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {() => (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center ml-4 md:ml-6">
                <a
                  href="https://github.com/arifrdianto/cra-graphql-apollo-starter"
                  className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <CodeIcon className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
};

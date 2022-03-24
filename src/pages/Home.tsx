import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchKey(event.currentTarget.value);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/${searchKey}/repositories`, { replace: true });
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div>
        <svg
          height="32"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="32"
          data-view-component="true"
          className="w-auto h-12 mx-auto"
        >
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Find your Github account
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="flex items-center mt-2 mb-6">
          <input
            type="search"
            placeholder="Enter your username here"
            className="w-full py-2 pl-4 pr-10 text-gray-700 transition ease-in-out border-2 rounded-lg focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            value={searchKey}
            onChange={handleChange}
            required
          />
          <button type="submit">
            <svg
              className="z-10 w-4 h-4 -ml-8 text-gray-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

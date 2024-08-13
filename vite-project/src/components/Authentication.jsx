import React, { useState } from 'react';

const Authentication = () => {
  const [apiKey, setApiKey] = useState('');

  const generateApiKey = () => {
    const newApiKey = '12345-ABCDE-67890-FGHIJ';
    setApiKey(newApiKey);
  };

  return (
    <section className="flex justify-center py-8 px-4 bg-white dark:bg-[#0F172A]">
      <div className="bg-gray-100 dark:bg-[#1E293B] text-gray-800 dark:text-gray-300 p-6 md:p-8 rounded-lg max-w-5xl w-full mx-auto shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-[#6366F1] dark:text-[#A5B4FB] mb-6 md:mb-8">
          Authentication
        </h2>
        <p className="mb-4">
          To use the API, you need to include your API key in the header of each request:
        </p>
        <div className="bg-gray-200 dark:bg-[#0F172A] text-gray-700 dark:text-gray-400 p-4 rounded-md mb-4">
          <code className="block whitespace-pre-wrap">
            X-API-Key: YOUR_API_KEY
          </code>
        </div>
        <p className="mb-4">
          To generate an API key, use the button below:
        </p>
        <button 
          className="bg-[#06B6D4] dark:text-white font-semibold py-2 px-4 rounded-md hover:bg-[#6366F1] dark:hover:bg-[#6366F1] transition duration-200"
          onClick={generateApiKey}
        >
          Generate API Key
        </button>
        {apiKey && (
          <div className="bg-gray-200 dark:bg-[#0F172A] text-[#6366F1] dark:text-[#A5B4FB] p-4 rounded-md mt-4">
            <code className="block whitespace-pre-wrap break-all">{apiKey}</code>
          </div>
        )}
      </div>
    </section>
  );
};

export default Authentication;

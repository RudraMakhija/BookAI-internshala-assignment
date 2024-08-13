import React from 'react';

const Overview = () => {
  return (
    <section className="flex justify-center py-8 px-4 bg-white dark:bg-[#0F172A]">
      <div className="bg-gray-100 dark:bg-[#1E293B] text-gray-800 dark:text-gray-300 p-6 md:p-8 rounded-lg max-w-5xl w-full mx-auto shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-[#6366F1] dark:text-[#A5B4FB] mb-6 md:mb-8 mt-4">
          Overview
        </h2>
        <p className="text-base md:text-lg">
          The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.
        </p>
      </div>
    </section>
  );
};

export default Overview;

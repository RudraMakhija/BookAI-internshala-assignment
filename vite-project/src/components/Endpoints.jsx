import React from 'react';

const Endpoints = () => {
  const requestBodyData = [
    { parameter: 'api', type: 'string', description: 'The API provider to use. Options: "openai" or "together"' },
    { parameter: 'model', type: 'string', description: 'The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "Ilama-2-70b")' },
    { parameter: 'topic', type: 'string', description: 'The main topic or theme of the book' },
    { parameter: 'language', type: 'string', description: 'The language in which the book should be generated' },
    { parameter: 'word_count', type: 'integer', description: 'The approximate number of words for the generated book' },
  ];

  return (
    <section className="flex justify-center py-8 px-4 bg-white dark:bg-[#0F172A]">
      <div className="bg-gray-100 dark:bg-[#1E293B] text-gray-800 dark:text-gray-300 p-6 md:p-8 rounded-lg max-w-5xl w-full mx-auto shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-[#6366F1] dark:text-[#A5B4FB] mb-6 md:mb-8">
          Endpoints
        </h2>
        <h3 className="text-lg font-extrabold  mb-4 text-[#A5B4FB]">
          Generate Book
        </h3>

        <div className="flex flex-wrap items-center mb-4">
          <div className="bg-[#06B6D4] dark:bg-[#23D3ED] font-extrabold text-white p-2 rounded-lg mr-2 mb-2 md:mb-0">
            POST
          </div>
          <div className="font-extrabold text-white bg-[#6366F1]  p-2 rounded-lg">
            /api/generate-book
          </div>
        </div>

        <h4 className="text-lg font-extrabold text-[#A5B4FB] mb-4">
          Request Body
        </h4>

        <div className="overflow-x-auto rounded-lg">
          <table className="w-full border border-gray-300 dark:border-gray-700 text-left">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-[#6366F1] border-gray-300 dark:border-gray-700 text-left text-white dark:text-gray-300">
                  Parameter
                </th>
                <th className="py-2 px-4 border-b bg-[#6366F1] border-gray-300 dark:border-gray-700 text-left text-white dark:text-gray-300">
                  Type
                </th>
                <th className="py-2 px-4 border-b bg-[#6366F1] border-gray-300 dark:border-gray-700 text-left text-white dark:text-gray-300">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {requestBodyData.map((row, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300">
                    {row.parameter}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300">
                    {row.type}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-extrabold text-[#A5B4FB] mt-8 mb-4">
          Response
        </h4>
        <pre className="bg-gray-200 dark:bg-[#0F172A] text-gray-800 dark:text-[#A5B4FB] p-4 rounded-lg overflow-x-auto">
          &#123;
          <br />
          &quot;message&quot;: &quot;Book generation started&quot;,
          <br />
          &quot;status&quot;: &quot;processing&quot;,
          <br />
          &quot;job_id&quot;: &quot;unique-job-identifier&quot;
          <br />
          &#125;
        </pre>
      </div>
    </section>
  );
};

export default Endpoints;

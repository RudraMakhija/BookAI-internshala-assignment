const Tutorial = () => {
  return (
    <section className="flex justify-center py-8 px-4 bg-white dark:bg-[#0F172A]">
      <div className="bg-[#E5E7EB] dark:bg-[#1E293B] text-gray-700 dark:text-gray-300 p-6 md:p-8 rounded-lg max-w-5xl w-full mx-auto shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-[#4F46E5] dark:text-[#A5B4FB] my-6 md:my-12">
          Tutorial
        </h2>

        <h3 className="text-xl font-bold mb-4 text-[#4F46E5] dark:text-[#A5B4FB]">
          Step 1: Obtain an API Key
        </h3>
        <p className="mb-8">
          Generate an API key using the button in the Authentication section above.
        </p>

        <h3 className="text-xl font-bold mb-4 text-[#4F46E5] dark:text-[#A5B4FB]">
          Step 2: Make a Request
        </h3>
        <p className="mb-8">
          Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.
        </p>

        <h3 className="text-xl font-bold mb-4 text-[#4F46E5] dark:text-[#A5B4FB]">
          Step 3: Handle the Response
        </h3>
        <p className="mb-8">
          The API will return a response with a job ID. You can use this ID to check the status of your book generation job.
        </p>

        <h3 className="text-xl font-bold mb-4 text-[#4F46E5] dark:text-[#A5B4FB]">
          Step 4: Retrieve the Generated Book
        </h3>
        <p className="mb-8">
          Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).
        </p>
      </div>
    </section>
  );
};

export default Tutorial;

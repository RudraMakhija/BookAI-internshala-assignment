import React from 'react';

const CodeExamples = () => {
  return (
    <section className="flex justify-center py-8 px-4 bg-white dark:bg-[#0F172A]">
      <div className="bg-gray-100 dark:bg-[#1E293B] text-gray-800 dark:text-gray-300 p-6 md:p-8 rounded-lg max-w-5xl w-full mx-auto shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-[#6366F1] dark:text-[#A5B4FB] mb-4">
          Code Examples
        </h2>

        <h3 className="text-xl font-bold text-[#6366F1] dark:text-[#A5B4FB] mb-2">
          Python
        </h3>
        <div className="bg-gray-200 dark:bg-[#0F172A] text-gray-800 dark:text-gray-400 p-4 rounded-md mb-4 overflow-x-auto">
          <code className="block whitespace-pre-wrap">
            {`import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")`}
          </code>
        </div>

        <h3 className="text-xl font-bold text-[#6366F1] dark:text-[#A5B4FB] mb-2">
          JavaScript (Node.js)
        </h3>
        <div className="bg-gray-200 dark:bg-[#0F172A] text-gray-800 dark:text-gray-400 p-4 rounded-md mb-4 overflow-x-auto">
          <code className="block whitespace-pre-wrap">
            {`const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });`}
          </code>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;

const PricingTable = () => {
    const pricingData = [
        { api: 'OpenAI', model: 'GPT-3.5', price: '$0.002' },
        { api: 'OpenAI', model: 'GPT-4', price: '$0.03' },
        { api: 'Together AI', model: 'Llama-2-70b', price: '$0.0008' },
        { api: 'Together AI', model: 'Llama-2-13b', price: '$0.0006' },
    ];

    return (
        <section className="flex justify-center py-8 px-4 bg-white dark:bg-[#0F172A]">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-lg max-w-5xl w-full mx-auto shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-[#A5B4FB] mb-4">
                    API Pricing
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 dark:border-gray-700 text-left">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b bg-[#6366F1] border-gray-300 dark:border-gray-700 text-left text-white dark:text-gray-300">API</th>
                                <th className="py-2 px-4 border-b bg-[#6366F1] border-gray-300 dark:border-gray-700 text-left text-white dark:text-gray-300">Model</th>
                                <th className="py-2 px-4 border-b bg-[#6366F1] border-gray-300 dark:border-gray-700 text-left text-white dark:text-gray-300">Price per 1K Tokens</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricingData.map((row, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300">{row.api}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300">{row.model}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300">{row.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4">
                    <h3 className="text-xl font-extrabold text-[#22A2C6]  mb-2">Token Estimation</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
                    </p>
                </div>

                <div className="mt-4">
                    <h3 className="text-xl font-extrabold text-[#22A2C6]  mb-2">Billing</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingTable;

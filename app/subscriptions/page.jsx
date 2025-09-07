import React from "react";

const Subscription = () => {
  return (
    <main className="bg-[#141414] text-white min-h-screen px-6 lg:px-26 py-16">
      <section className=" mx-aut mt-18">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Compare our plans and find the right one for you
        </h1>
        <p className="text-[#999999] mb-10 max-w-3xl">
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that’s right for you.
        </p>

        <div className="overflow-x-auto text-[#999999] rounded-lg">
          <table className="w-full table-auto border-collapse text-sm">
            <thead className="text-white font-bold text-2xl">
              <tr className="bg-[#0F0F0F] text-left">
                <th className="border border-[#333] pr-20 pl-5 py-6">
                  Features
                </th>
                <th className="border border-[#333] pr-21 pl-5 py-6">Basic</th>
                <th className="border border-[#333] pr-17 pl-5 py-6">
                  Standard
                </th>
                <th className="border border-[#333] pr-20 pl-5 py-6">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Price",
                  basic: "$9.99",
                  standard: "$12.99",
                  premium: "$14.99",
                },
                {
                  feature: "Content",
                  basic:
                    "Access to a wide selection of movies and shows, including some new releases.",
                  standard:
                    "Access to a wider selection of movies and shows, including most new releases and exclusive content",
                  premium:
                    "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
                },
                {
                  feature: "Devices",
                  basic: "Watch on one device simultaneously",
                  standard: "Watch on Two device simultaneously",
                  premium: "Watch on Four device simultaneously",
                },
                {
                  feature: "Free Trial",
                  basic: "7 Days",
                  standard: "7 Days",
                  premium: "7 Days",
                },
                {
                  feature: "Cancel Anytime",
                  basic: "Yes",
                  standard: "Yes",
                  premium: "Yes",
                },
                {
                  feature: "HDR",
                  basic: "No",
                  standard: "Yes",
                  premium: "Yes",
                },
                {
                  feature: "Dolby Atmos",
                  basic: "No",
                  standard: "Yes",
                  premium: "Yes",
                },
                {
                  feature: "Ad - Free",
                  basic: "No",
                  standard: "Yes",
                  premium: "Yes",
                },
                {
                  feature: "Offline Viewing",
                  basic: "No",
                  standard: "Yes, for select titles.",
                  premium: "Yes, for all titles.",
                },
                {
                  feature: "Family Sharing",
                  basic: "No",
                  standard: "Yes, up to 5 family members.",
                  premium: "Yes, up to 6 family members.",
                },
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="border border-[#333] px-5 py-8">
                    {row.feature}
                  </td>
                  <td className="border border-[#333] px-5 py-10">
                    {row.basic}
                  </td>
                  <td className="border border-[#333] px-5 ">{row.standard}</td>
                  <td className="border border-[#333] px-5 ">{row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Free Trial Section */}
      <div className=" mt-20">
        <section
          className="relative bg-cover bg-center bg-no-repeat py-20 px-10 rounded-lg items-center justify-between max-w-7xl mx-auto border-1 border-[#262626]"
          style={{
            backgroundImage: "url('/images/logo/Sub.png')",
            minHeight: "300px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative max-w-4xl text-white">
            <h2 className="text-4xl font-bold mb-6">
              Start your free trial today!
            </h2>
            <p className="text-lg text-[#999999] max-w-3xl">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <button className="relative cursor-pointer bg-red-600 mt-8 hover:bg-red-700 text-white font-semibold px-6 py-3 text-xl rounded-md shadow-lg transition">
            Start a Free Trial
          </button>
        </section>
      </div>
    </main>
  );
};

export default Subscription;

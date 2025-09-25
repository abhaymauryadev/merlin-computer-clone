import React from "react";

const Cal = () => {
  return (
    <>
     
  <section className="bg-[#f5f5f4] py-20 mt-30 leading-[47px] font-inter font-medium ">
  <div className="max-w-7xl mx-auto text-left  px-6">
    <h1 className="text-3xl font-medium mb-4">
      Your Inbox, Calendar & Slack – finally working together
    </h1>
    <p className="text-lg text-gray-600">
      Merlin syncs Gmail, Google Calendar, and Slack so you can book trips, clear tasks, and silence chaos from one chat.
    </p>
  </div>

  <div className="max-w-7xl flex flex-col items-center justify-center mt-20 mx-auto rounded-4xl  h-96 bg-gradient-to-b from-[#96dfff] to-[#dddd]">
    
  </div>

  {/* Bottom two side-by-side cards */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px- mt-20">
    {/* Card 1 */}
    <div className="rounded-4xl bg-white p-10 text-left h-[600px]">
      <h3 className="text-2xl font-semibold mb-4">Clarity over clutter</h3>
        <p className="text-gray-600">
          No more switching between tools. Manage your emails, calendar,
          and Slack in one place.
        </p>
     </div>

    {/* Card 2 */}
      <div className="rounded-4xl bg-white p-10 text-left h-[600px]">
        <h3 className="text-2xl font-semibold mb-4">Talk. Type. Done.</h3>
        <p className="text-gray-600">
        Ask in plain language. Whether it’s booking a meeting or
        clearing your inbox, Merlin gets it done instantly.
        </p>
      </div>
    </div>
</section>
    </>
  );
};

export default Cal;
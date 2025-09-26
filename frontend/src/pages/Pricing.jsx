import React from 'react'
import { Check ,ChevronRight,X} from 'lucide-react'

const pricing = () => {
  return (
    <>
    <section className="mt-8 py-20">
      {/* Section header */}
      <div className="text-center">
        <h1 className="text-[40px] font-medium">Pricing</h1>
        <p className="text-[16px] text-gray-400 font-medium mt-2">
          Hire your full-time, dedicated AI chief of staff for only $19 per
          month
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 px-9">
        {/* Card 1 - Merlin AI */}
        <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-sm">
          {/* Header */}
          <div className="bg-gray-100 py-4">
            <h3 className="text-xl font-medium text-center text-gray-700">
              Merlin AI
            </h3>
          </div>
          {/* Body */}
          <div className="lg:p-5 bg-white h-[620px] text-[12px] ">
            <ul className="space-y-4 text-gray-600 ">
              <li className='border-b border-gray-600 pb-5 flex items-center gap-2'><Check /> Available 24/7 to monitor your inbox, calendar, and Slack.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><Check size={35} /> Schedule meetings, reply to investors, block time, or snooze threads instantly from your inbox.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><Check size={35}/> Merlin combines ChatGPT, Superhuman, Calendly, or Clay and saves hundreds per month.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><Check size={35}/> SOC 2-ready. No human sees your data. Merlin keeps your information private and secure.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><Check size={35}/> Automatically maps your most important contacts from email, calendar, and Slack history.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><Check size={26}/> Flags high-priority issues and suggests next actions without being asked.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><Check /> $19 per month. No payroll, HR, or hidden costs.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><Check /> Access Merlin from WhatsApp and take action on the go.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><Check size={30}/> Connect Gmail, Slack, and Calendar in 60 seconds. No interviews or training.</li>
              <li className=' flex items-center gap-2 '><Check /> No contracts or notice periods. Start and stop when you want.</li>
              
            </ul>
          </div>
        </div>

        {/* Card 2 - Traditional EA */}
        <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-sm">
          {/* Header */}
          <div className="bg-gray-100 py-4">
            <h3 className="text-xl font-medium text-center text-gray-700">
              Traditional EA
            </h3>
          </div>
          {/* Body */}
          <div className="p-5 bg-white h-[650px] text-[12px]">
            <ul className="space-y-4 text-gray-600">
              <li className='border-b border-gray-600 pb-4 flex items-center gap-2'><X size={28}/> Works only during office hours. May miss urgent issues after hours or on weekends.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><X size={28} /> Requires back-and-forth. Delays are common due to bandwidth and task switching.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><X size={28}/> Still need separate tools for AI, scheduling, email UX, and contact intelligence.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><X size={25}/> Data privacy depends on one person's discretion and your trust.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><X size={25}/> Assistants maintain lists based on memory or scattered notes</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><X size={25}/>Waits for instruction. May overlook subtle but urgent items.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><X /> $4,000 to $8,000 per month plus benefits, software, and admin time..</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><X /> Not optimized for async messaging or quick mobile-first communication.</li>
              <li className='border-b border-gray-600 pb-3 flex items-center gap-2'><X size={25}/> Weeks to hire, train, and build trust. Impact is delayed</li>
              <li className=' flex items-center gap-2 '><X /> Requires HR processes, transition plans, and emotional navigation.</li>
              
            </ul>
          </div>
          
        </div>

        
        </div>
        
    </section>
    <section className="my-12 md:my-16">
    <div className='max-w-xl mx-auto px-4'>
        <div className='flex justify-center items-center'>
            <button className='bg-gray-300 flex items-center justify-center gap-2  md:w-auto px-6 py-4 rounded-full font-semibold 
                transition-all duration-200 shadow-md  text-gray-700'
            >
                Make the switch to Merlin
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    </div>
</section>
    </>
  )
}

export default pricing
import React from 'react'
import { Check ,ChevronRight,X} from 'lucide-react'

const pricing = () => {
  return (
    <>
    <section className="mt-8 py-10 sm:py-16 md:py-20">
      {/* Section header */}
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium">Pricing</h1>
        <p className="text-sm sm:text-base md:text-[16px] text-gray-400 font-medium mt-2 max-w-2xl mx-auto">
          Hire your full-time, dedicated AI chief of staff for only $19 per
          month
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-9">
        {/* Card 1 - Merlin AI */}
        <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-sm">
          {/* Header */}
          <div className="bg-gray-100 py-3 sm:py-4">
            <h3 className="text-lg sm:text-xl font-medium text-center text-gray-700">
              Merlin AI
            </h3>
          </div>
          {/* Body */}
          <div className="p-3 sm:p-4 md:p-5 bg-white min-h-[500px] sm:min-h-[550px] md:h-[620px] text-[10px] sm:text-[11px] md:text-[12px]">
            <ul className="space-y-3 sm:space-y-4 text-gray-600">
              <li className='border-b border-gray-600 pb-3 sm:pb-4 md:pb-5 flex items-start gap-2'><Check className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" /> <span>Available 24/7 to monitor your inbox, calendar, and Slack.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><Check className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" /> <span>Schedule meetings, reply to investors, block time, or snooze threads instantly from your inbox.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><Check className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"/> <span>Merlin combines ChatGPT, Superhuman, Calendly, or Clay and saves hundreds per month.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><Check className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"/> <span>SOC 2-ready. No human sees your data. Merlin keeps your information private and secure.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><Check className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"/> <span>Automatically maps your most important contacts from email, calendar, and Slack history.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><Check className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"/> <span>Flags high-priority issues and suggests next actions without being asked.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><Check className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" /> <span>$19 per month. No payroll, HR, or hidden costs.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><Check className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" /> <span>Access Merlin from WhatsApp and take action on the go.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><Check className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"/> <span>Connect Gmail, Slack, and Calendar in 60 seconds. No interviews or training.</span></li>
              <li className='flex items-start gap-2'><Check className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" /> <span>No contracts or notice periods. Start and stop when you want.</span></li>
              
            </ul>
          </div>
        </div>

        {/* Card 2 - Traditional EA */}
        <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-sm">
          {/* Header */}
          <div className="bg-gray-100 py-3 sm:py-4">
            <h3 className="text-lg sm:text-xl font-medium text-center text-gray-700">
              Traditional EA
            </h3>
          </div>
          {/* Body */}
          <div className="p-3 sm:p-4 md:p-5 bg-white min-h-[500px] sm:min-h-[550px] md:h-[650px] text-[10px] sm:text-[11px] md:text-[12px]">
            <ul className="space-y-3 sm:space-y-4 text-gray-600">
              <li className='border-b border-gray-600 pb-3 sm:pb-4 flex items-start gap-2'><X className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"/> <span>Works only during office hours. May miss urgent issues after hours or on weekends.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><X className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" /> <span>Requires back-and-forth. Delays are common due to bandwidth and task switching.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><X className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"/> <span>Still need separate tools for AI, scheduling, email UX, and contact intelligence.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><X className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"/> <span>Data privacy depends on one person's discretion and your trust.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><X className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"/> <span>Assistants maintain lists based on memory or scattered notes</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><X className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"/> <span>Waits for instruction. May overlook subtle but urgent items.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><X className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" /> <span>$4,000 to $8,000 per month plus benefits, software, and admin time..</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><X className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" /> <span>Not optimized for async messaging or quick mobile-first communication.</span></li>
              <li className='border-b border-gray-600 pb-2 sm:pb-3 flex items-start gap-2'><X className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"/> <span>Weeks to hire, train, and build trust. Impact is delayed</span></li>
              <li className='flex items-start gap-2'><X className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" /> <span>Requires HR processes, transition plans, and emotional navigation.</span></li>
              
            </ul>
          </div>
          
        </div>

        
        </div>
        
    </section>
    <section className="my-4 sm:my-6 md:my-8">
    <div className='max-w-xl mx-auto px-4'>
        <div className='flex justify-center items-center'>
            <button className='bg-[#eeeeee] flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 rounded-full font-semibold 
                transition-all duration-200 shadow-md text-gray-700 text-sm sm:text-base'
            >
                Make the switch to Merlin
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
        </div>
    </div>
</section>
    </>
  )
}

export default pricing
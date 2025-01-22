export default function Section2() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12">
        <div className="text-sm text-gray-600 mb-2">:: Coding tests ::</div>
        <h2 className="text-4xl font-bold text-green-600 mb-2">
          Join the movement.
        </h2>
        <h3 className="text-4xl font-bold mb-8">Screen on skills.</h3>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Candidate Info */}
          <div className="col-span-4 border-r pr-8">
            <div className="mb-6">
              <h4 className="text-2xl font-semibold mb-4">Melissa Ibarra</h4>
              <button className="w-full bg-[#1b2b8c] text-white py-3 px-4 rounded flex items-center justify-between group">
                Create Interview
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <p className="text-sm text-gray-600 mt-2">
                Create and schedule an interview for the candidate.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Email</span>
                <span>Melissa@ibarra.io</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Test</span>
                <span>HackerRank Front End Test</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Taken on</span>
                <span>Oct 14, 2020 10:25:30 AM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Time Taken</span>
                <span className="text-blue-600">88 min 10 sec/ 110 mins</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Work Exp.</span>
                <span>2 years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Invited by</span>
                <span>Ishani Gupta</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Invited on</span>
                <span>Oct 13, 2020 11:45:11 AM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Past Attempts</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Score: 200/285</span>
                </div>
              </div>
              <div className="pl-4 text-gray-500">Nov 13, 2020 11:45:11 AM</div>
            </div>
          </div>
          {/* Right Column - Test Details */}
          <div className="col-span-8">
            <img
              src="img/contenders.png"
              alt="Filter Section"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

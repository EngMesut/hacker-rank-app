export default function Section1() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          It's not a pipeline problem.
        </h2>
        <h3 className="text-4xl font-bold text-green-600 mb-6">
          It's a spotlight problem.
        </h3>
        <p className="max-w-3xl mx-auto text-gray-600">
          Tech hiring needs a reset. From prepping for jobs and practicing
          coding to running a world-class technical interview, give developers
          the tools they need to showcase their skills, passion, and potential.
        </p>
      </div>

      <div className="flex justify-center gap-16 mb-16">
        <div className="text-center">
          <div className="text-lg font-medium">Prep</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-medium">Screen</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-medium">Interview</div>
        </div>
      </div>

      <div className="bg-[#141c2f] text-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 gap-8 p-12">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-gray-400 mb-6">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span>Coding practice</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Explore and expand your skills.
            </h3>
            <p className="text-gray-300 mb-8">
              Every idea has a first line of code. Prep for jobs and sharpen
              your skills alongside a global community of developers. Access the
              content you need to develop new skills — and land the job you've
              dreamed of.
            </p>
            <button className="flex items-center text-white hover:text-green-400 transition-colors w-fit">
              <span>Sign up and practice</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <img
              src="img/community.jpg"
              alt="Coding Practice Interface"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

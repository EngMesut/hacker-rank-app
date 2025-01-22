
export default function Section6() {
  return (
    <div>
      <section>
        <div
          className="grid md:grid-cols-2 gap-8"
          style={{ height: "500px", padding: "5% 10%" }}
        >
          {/* Left Section */}
          <div className="relative p-8 rounded-xl overflow-hidden">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">
                Practice coding challenges &{" "}
                <span className="text-emerald-500">prep for interviews</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Start practicing your skills now and land the job of your
                dreams.
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Join the community
              </button>
            </div>
            {/* Gradient effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-50/50 to-transparent -z-10" />
          </div>

          {/* Right Section */}
          <div className="bg-slate-50 p-8 rounded-xl">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">
                Get started{" "}
                <span className="text-emerald-500">hiring with HackerRank</span>
              </h2>
              <p className="text-gray-600 text-lg">
                More than 3,000 tech teams, representing all industries and from
                countries around the world, trust HackerRank
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request a demo
              </button>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}

export default function FeaturesTable() {
  const features = [
    {
      name: "User licenses",
      starter: "1",
      pro: "Unlimited",
      enterprise: "Custom Quantities and Roles",
    },
    {
      name: "Attempts",
      starter: "Includes 120 attempts per year",
      pro: "Includes 300 attempts per year",
      enterprise: "Custom number of attempts",
    },
    {
      name: "Coding tests",
      starter: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Coding interviews",
      starter: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Plagiarism detection",
      starter: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Leaked-question detection",
      starter: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Real-world questions",
      starter: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Code reviews",
      starter: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Insights",
      starter: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Email & chat support",
      starter: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Customer success team",
      starter: false,
      pro: false,
      enterprise: true,
    },
    {
      name: "API access",
      starter: false,
      pro: false,
      enterprise: true,
    },
    {
      name: "Integrations",
      starter: false,
      pro: {
        text: "ATS: Greenhouse, Lever, Ashby\nCalendar: Google & Outlook",
      },
      enterprise: "40+",
    },
    {
      name: "Single sign-on (SSO)",
      starter: false,
      pro: false,
      enterprise: true,
    },
    {
      name: "Archiving",
      starter: false,
      pro: false,
      enterprise: true,
    },
  ];

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Features & Capabilities
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="py-4 px-6 font-normal"></th>
              <th className="py-4 px-6 font-normal">Starter</th>
              <th className="py-4 px-6 font-normal">Pro</th>
              <th className="py-4 px-6 font-normal bg-green-50">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="py-4 px-6 text-sm">{feature.name}</td>
                <td className="py-4 px-6">
                  {typeof feature.starter === "boolean" ? (
                    feature.starter ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 text-green-600"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : null
                  ) : (
                    <span className="text-sm">{feature.starter}</span>
                  )}
                </td>
                <td className="py-4 px-6">
                  {typeof feature.pro === "boolean" ? (
                    feature.pro ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 text-green-600"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : null
                  ) : (
                    <span className="text-sm whitespace-pre-line">
                      {typeof feature.pro === "object"
                        ? feature.pro.text
                        : feature.pro}
                    </span>
                  )}
                </td>
                <td
                  className={`py-4 px-6 ${
                    index % 2 === 0 ? "bg-green-50" : "bg-green-50/50"
                  }`}
                >
                  {typeof feature.enterprise === "boolean" ? (
                    feature.enterprise ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 text-green-600"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : null
                  ) : (
                    <span className="text-sm">{feature.enterprise}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

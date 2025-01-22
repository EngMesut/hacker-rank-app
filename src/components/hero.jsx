import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-100 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
          Skills speak louder
          <br />
          than words
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
          We help companies develop the strongest tech teams around. We help
          candidates sharpen their tech skills and pursue job opportunities.
        </p>
        <div className="flex justify-center gap-4 ">
          <Button className="text-lg px-8">Sign up</Button>
          <Button
            variant="outline"
            className="text-lg px-8 "
            style={{ color: "black" }}
          >
            Request demo
          </Button>
        </div>

        <p className="mt-12 text-gray-600">
          Over 40% of developers worldwide and 3,000 companies use HackerRank
        </p>

        <div className="mt-12 flex justify-center items-center gap-12  w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity dark:grayscale-0 dark:opacity-100">
          <img src="img/peloton_black.png" alt="Peloton" className="h-16" />
          <img src="img/atlassian_black.png" alt="Atlassian" className="h-16" />
          <img src="img/bloomberg_black.png" alt="Bloomberg" className="h-16" />
          <img src="img/vmware_black.png" alt="VMware" className="h-16" />
          <img src="img/stripe_black.png" alt="Stripe" className="h-16" />
          <img
            src="img/goldmansachs_black.png"
            alt="Goldman Sachs"
            className="h-16"
          />
          <img src="img/adobe_black.png" alt="Adobe" className="h-16" />
          <img src="img/linkedin_black.png" alt="LinkedIn" className="h-16" />
        </div>  
      </div>
    </div>
  );
}

import { Button } from "../ui/button";

export default function HomeHero() {
  return (
    <div className="bg-[url(/Background.svg)] h-screen bg-cover flex justify-center">
      <div className="w-full max-w-[67rem] pt-[9.5rem]">
        <div className="flex flex-col gap-[2rem] items-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Introducing Custo
            {/* <ArrowRight size={18} /> */}
          </button>
          <div className="flex flex-col gap-[1rem] typography text-center max-w-[55.75rem] mx-auto">
            <h1 className="font-sans font-semibold">
              Powerful CRM Solutions for Growing Businesses
            </h1>
            <p className="font-sans font-normal text-[1.125rem] leading-[160%] max-w-[41rem] mx-auto">
              Streamline your customer relationships with an intuitive CRM
              platform. Optimize workflows, and drive business growth with ease.
            </p>
          </div>
          <div>
            <Button variant="primary" size="base">
              Start for Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

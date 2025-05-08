import Image from "next/image";
export default function about() {
  return (
    <div className="hero-section pt-[152px] pb-[96px] px-[56px] flex flex-col items-center">
        <div className="container max-w-[1072px] flex flex-col gap-[64px] items-center justify-center">
            <div className="header flex flex-col gap-[16px] items-center">
                <div className="typography text-grayscale-950">
                  <h1>About Custo</h1>
                </div>
                <p className="text-xlarge max-w-[656px] text-center text-gray-600">Custo is a team of passionate makers dedicated to building tools that empower businesses to grow.</p>
            </div>
            <div className="content grid grid-cols-3 gap-[20px]">
              <div className="flex flex-col gap-[20px]">
                <Image src="/content1.svg" alt="content" width={344} height={198} />
                <Image src="/content2.svg" alt="content" width={344} height={198} />
              </div>
              <div>
                <Image src="/content3.svg" alt="content" width={344} height={416} />
              </div>
              <div className="flex flex-col gap-[20px]">
                <Image src="/content4.svg" alt="content" width={344} height={198} />
                <Image src="/content5.svg" alt="content" width={344} height={198} />
              </div>
            </div>
            <div className="clients flex flex-col gap-[32px]">
              <p className="text-xlarge text-grayscale-600">Trusted by companies around the world</p>
              <div className="flex flex-row gap-[64px]">
                  
              </div>
            </div>
        </div>
    </div>
  );
}
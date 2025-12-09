import Image from "next/image";

const LeaderBanner = () => {
  return (
    <div className="w-full pb-10">
      <Image
        src="/Leadership/businesspeople-meeting-office-working 1.webp"
        alt="About Banner"
        width={1600}
        height={600} 
        className="w-full h-[600px] object-cover" 
        priority 
      />
    </div>
  );
};

export default LeaderBanner;

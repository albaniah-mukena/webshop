import Image from "next/image";

export const LunnaPhoto = () => {
  return (
    <Image
      className="drop-shadow-md"
      src="/imgs/lunna.png"
      alt="main lunna photo"
      width={480}
      height={400}
    />
  );
};

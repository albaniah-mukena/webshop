import Image from "next/image"

export const AlbaHeader = () => {
  return (
    <div className="flex flex-col items-center space-y-3 uppercase">
      <Image src="/imgs/logo.png" alt="albaniah logo" width={90} height={90} />
      <div className="text-center">
        <h4 className="text-4xl font-black tracking-wider">albaniah</h4>
        <p>temani ibadahmu</p>
      </div>
    </div>
  )
}

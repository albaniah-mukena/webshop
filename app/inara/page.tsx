import { Button } from "@/components/ui/button";
import { LinkTreeInaraData } from "@/configs";
import clsx from "clsx";
import Link from "next/link";
import { InaraHeader } from "../../components/inara-header";

const cn = clsx(
  "min-h-screen lg:max-w-2xl",
  "py-16 px-6 space-y-5 lg:mx-auto",
  "flex flex-col items-center place-content-center"
);

export default function Arumi() {
  return (
    <main className={cn}>
      <InaraHeader />
      {/* <LunnaPhoto />
      <p className="text-xl text-center">
        Dapatkan mukena Lunna ini di beberapa <strong>marketplace</strong> di
        bawah ini atau bisa langsung chat di wa 😊:
      </p> */}
      {Object.entries(LinkTreeInaraData).map((entry) => (
        <Button variant="albaPrimary" size="albaLg" asChild key={entry[0]}>
          <Link href={entry[1]}>{entry[0]}</Link>
        </Button>
      ))}
    </main>
  );
}

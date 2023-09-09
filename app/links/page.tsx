import { AlbaHeader } from "@/components/alba-header";
import { Button } from "@/components/ui/button";
import { LinkTreeData, SpecialItem } from "@/configs";
import clsx from "clsx";
import Link from "next/link";

const cn = clsx(
  "min-h-screen lg:max-w-2xl",
  "px-6 space-y-5 lg:mx-auto",
  "flex flex-col items-center place-content-center"
);

export default function Links() {
  return (
    <main className={cn}>
      <AlbaHeader />
      <Button variant="albaSpecial" size="albaLg">
        <Link href={SpecialItem}>🥳 New - Mukena Alisha 🎉🎉</Link>
      </Button>
      {Object.entries(LinkTreeData).map((entry) => (
        <Button variant="albaPrimary" size="albaLg" asChild key={entry[0]}>
          <Link href={entry[1]}>{entry[0]}</Link>
        </Button>
      ))}
    </main>
  );
}

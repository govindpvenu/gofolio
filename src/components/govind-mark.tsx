import Image from "next/image";
import { useTheme } from "next-themes";

export function GovindMark() {
  const { resolvedTheme } = useTheme();

  const isLight = resolvedTheme === "light";

  return (
    <Image
      src={isLight ? "/go-light.png" : "/go-dark.png"}
      alt="Go"
      className="h-12 w-auto min-[25rem]:h-14 min-[25rem]:w-auto sm:h-32 sm:w-auto"
      width={1536}
      height={1024}
    />
  );
}

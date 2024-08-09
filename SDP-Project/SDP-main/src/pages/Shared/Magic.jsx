import { useTheme } from "next-themes";

import { MagicCard } from "@/components/magicui/magic-card";

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex h-[300px] w-full flex-col gap-4 lg:h-[330px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <img src="https://i.pinimg.com/736x/72/0c/74/720c7457a6af70a649613d4b7b549994.jpg"></img>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <img src="https://static.vecteezy.com/system/resources/previews/034/985/958/original/3d-kid-toy-store-big-sale-this-week-half-price-concept-placard-poster-banner-card-template-cartoon-style-vector.jpg"></img>
      </MagicCard>
    </div>
  );
}

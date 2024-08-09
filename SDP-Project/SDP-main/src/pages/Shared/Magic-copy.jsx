import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/magicui/magic-card";

export function MagicCards() {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex h-[300px] w-full flex-col gap-4 lg:h-[380px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <img src="https://i.pinimg.com/564x/81/1d/7c/811d7cd8008dc5c242ba8ad7f79d93ef.jpg"></img>
        
        <p className="pr-2">Plush Animal Toy - Cuddly Bear</p>
       <br></br>
        <div className="flex justify-center items-center">
        <Button className="bg-red-600 border-black">Explore</Button>
        </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <img src="https://i.pinimg.com/564x/3d/1d/d7/3d1dd7bd1f201f0d6da240f467daeec9.jpg"></img>
        <p className="pr-2">Imaginative Iconic Characters</p>
        <br></br>
        <div className="flex justify-center items-center">
        <Button className="bg-red-600 border-black">Explore</Button>
        </div>
      </MagicCard>
    
      
    
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <img src="https://i.pinimg.com/564x/5f/75/05/5f75055c46e37fe93c03f2fd606dae38.jpg"></img>
        <p className="pr-2">Dive into a World of Cartoon Fun</p>
        <br></br>
        <div className="flex justify-center items-center">
        <Button className="bg-red-600  border-black">Explore</Button>
        </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <img src="https://i.pinimg.com/564x/e4/7e/19/e47e194d43282e4a7da39eb57ad258d8.jpg"></img>
        <p className="pr-2">Bricks for Endless Creations</p>
        <br></br>
        <div className="flex justify-center items-center">
        <Button className="bg-red-600 border-black">Explore</Button>
        </div>
      </MagicCard>
    </div>
  );
}

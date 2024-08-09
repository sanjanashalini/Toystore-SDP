import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";

export  function BoxRevealDemo() {
  return (
    <div className="h-full w-full max-w-[32rem] flex flex-col items-center justify-center overflow-hidden pt-4">
      <BoxReveal boxColor={"#e71126"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          KIDS WORLD<span className="#e71126"></span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#e71126"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
        Adventure awaits in {" "}
          <span className="#e71126">every toy</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#e71126"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; Toys inspire the youngest minds,
teaching them to 

            <span className="font-semibold text-[#e71126]"> explore,</span>,
            <span className="font-semibold text-[#e71126]"> create,</span>,
            <span className="font-semibold text-[#e71126]"> and dream</span>,
            and
            <span className="font-semibold text-[#e71126]">  turning every playtime</span>
            . <br />
            -&gt; In the land of toys, imagination knows no bounds and creativity flourishes.<br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#e71126"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#e71126]">Explore</Button>
      </BoxReveal>
    </div>
  );
}

import { ContainerScroll } from "../componants/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl  md:text-4xl font-semibold text-zinc-700 dark:text-white">
              Colour through and through.
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Tough all around.
              </span>
            </h1>
          </>
        }
      >
        <img
          src="/assets/images/iphone15collage.webp"
          alt="hero"
          height={720}
          width={1500}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

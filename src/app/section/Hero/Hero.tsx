import Search from "@/app/components/Search/Search";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[100px]">
      <div className="container px-5 mx-auto">
        <div className="max-w-[724px] mx-auto text-center mb-[30px]">
          <h1 className="text-2xl lg:text-6xl">
            Discover Furniture With High Quality Wood
          </h1>
        </div>
        <div className="max-w-[796px] mx-auto text-center mb-[50px] lg:mb-[92px]">
          <p className="text-lg text-textPrimary">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non. Purus parturient
            viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing
            tempor.
          </p>
        </div>
        <div className="relative">
          <Search />
        </div>
        <div>
          <Image
            src={"/hero-img.png"}
            width={1240}
            height={480}
            alt={"Hero img"}
          />
        </div>
      </div>
    </section>
  );
}

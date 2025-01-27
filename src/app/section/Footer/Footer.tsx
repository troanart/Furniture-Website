import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-5">
      <div className="container px-5 mx-auto ">
        <div className="pt-5  pb-6 md:pt-10 md:pb-11 xl:pt-20 xl:pb-[88px] border-t-2 flex flex-wrap  justify-between items-center">
          <div className="max-w-[505px] mb-[30px] mr-auto">
            <a href="" className="block mb-5 md:mb-9">
              <Image
                src={"/logo.png"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                height={42}
                width={130}
                alt={"Logo"}
              />
            </a>
            <h6 className="text-textPrimary">
              Lalasia is digital agency that help you make better experience
              iaculis cras in.
            </h6>
          </div>
          <div className="flex justify-start  items-baseline  gap-x-[30px] md:gap-x-[50px] xl:gap-x-[100px]">
            <div>
              <h5 className="font-bold">Product</h5>
              <ul className="mt-[14px] md:mt-5 flex flex-col justify-start items-start  gap-y-[6px] md:gap-y-3">
                <li className="text-textPrimary">
                  <a
                    href=""
                    className="relative inline-block  transition-all hover:text-primaryColor before:absolute before:bottom-[-1px] before:left-0 before:h-[2px] before:w-0 before:bg-primaryColor before:transition-all before:duration-300 hover:before:w-full">
                    New Arrivals
                  </a>
                </li>
                <li className="text-textPrimary">
                  <a href="">Best Selling</a>
                </li>
                <li className="text-textPrimary">
                  <a href="">Home Decor</a>
                </li>
                <li className="text-textPrimary">
                  <a href="">Kitchen Set</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold">Services</h5>
              <ul className="mt-[14px] md:mt-5 flex flex-col justify-start items-start gap-y-[6px] md:gap-y-3">
                <li className="text-textPrimary">
                  <a href="">Catalog</a>
                </li>
                <li className="text-textPrimary">
                  <a href="">Blog</a>
                </li>
                <li className="text-textPrimary">
                  <a href="">FaQ</a>
                </li>
                <li className="text-textPrimary">
                  <a href="">Pricing</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold">Follow Us</h5>
              <ul className="mt-[14px] md:mt-5 flex flex-col justify-start items-start gap-y-[6px] md:gap-y-3">
                <li className="text-textPrimary">
                  <a href="">Facebook</a>
                </li>
                <li className="text-textPrimary">
                  <a href="">Instagram</a>
                </li>
                <li className="text-textPrimary">
                  <a href="">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

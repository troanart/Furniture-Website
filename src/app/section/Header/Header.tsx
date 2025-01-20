import Image from "next/image";
import Icon from "./ui/IconButton/IconButton";

export default function Header() {
  return (
    <header className="py-[39px] border-b-2 ">
      <div className="flex justify-between items-center container mx-auto px-5">
        <a href="#" className="p-0 max-h-[41px]">
          <Image src="/logo.png" width={130} height={40} alt="Logo" />
        </a>
        <ul className="hidden md:flex justify-center items-center md:gap-x-10 xl:gap-x-60 max-h-[32px]">
          <li>
            <a
              href=""
              className="relative inline-block md:text-base text-gray-800 hover:text-primaryColor before:absolute before:bottom-[-49px] before:left-0 before:h-[3px] before:w-0 before:bg-primaryColor before:transition-all before:duration-300 hover:before:w-full">
              Product
            </a>
          </li>
          <li>
            <a
              href=""
              className="relative inline-block md:text-base text-gray-800 hover:text-primaryColor before:absolute before:bottom-[-49px] before:left-0 before:h-[3px] before:w-0 before:bg-primaryColor before:transition-all before:duration-300 hover:before:w-full">
              Services
            </a>
          </li>
          <li>
            <a
              href=""
              className="relative inline-block md:text-base text-gray-800 hover:text-primaryColor before:absolute before:bottom-[-49px] before:left-0 before:h-[3px] before:w-0 before:bg-primaryColor before:transition-all before:duration-300 hover:before:w-full">
              Article
            </a>
          </li>
          <li>
            <a
              href=""
              className="relative inline-block md:text-base text-gray-800 hover:text-primaryColor before:absolute before:bottom-[-49px] before:left-0 before:h-[3px] before:w-0 before:bg-primaryColor before:transition-all before:duration-300 hover:before:w-full">
              About Us
            </a>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-6">
          <Icon
            src="/bag.svg"
            width={30}
            height={30}
            alt={"User icon"}
            className="hidden md:block"
          />
          <Icon
            src="/user.svg"
            width={30}
            height={30}
            alt={"User icon"}
            className="hidden  md:block"
          />
          <Icon
            src="/menu.svg"
            width={30}
            height={30}
            alt="Menu"
            className="md:hidden"
          />
        </div>
      </div>
    </header>
  );
}

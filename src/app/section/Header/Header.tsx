import Image from "next/image";
import Icon from "./ui/IconButton/IconButton";

export default function Header() {
  return (
    <header className="">
      <a href="#" className="">
        <Image src="/logo.png" width={130} height={42} alt="Logo" />
      </a>
      <ul className="">
        <li>
          <a href="">Product</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Article</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
      </ul>
      <div>
        <Icon src="/bag.svg" width={30} height={30} alt={"User icon"} />
        <Icon src="/user.svg" width={30} height={30} alt={"User icon"} />
      </div>
    </header>
  );
}

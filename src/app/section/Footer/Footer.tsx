import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-2 pt-20">
      <div className="container px-5 flex justify-between items-center mx-auto ">
        <div className="max-w-[505px]">
          <a href="" className="block mb-[36px]">
            <Image src={"/logo.png"} height={42} width={130} alt={"Logo"} />
          </a>
          <h6>
            Lalasia is digital agency that help you make better experience
            iaculis cras in.
          </h6>
        </div>
        <div className="flex justify-center items-baseline gap-x-[100px]">
          <div>
            <h5 className="font-bold">Product</h5>
            <ul className="mt-5 flex flex-col justify-start items-start gap-y-[12px]">
              <li>
                <a href="">New Arrivals</a>
              </li>
              <li>
                <a href="">Best Selling</a>
              </li>
              <li>
                <a href="">Home Decor</a>
              </li>
              <li>
                <a href="">Kitchen Set</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold">Services</h5>
            <ul className="mt-5 flex flex-col justify-start items-start gap-y-[12px]">
              <li>
                <a href="">Catalog</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">FaQ</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold">Follow Us</h5>
            <ul className="mt-5 flex flex-col justify-start items-start gap-y-[12px]">
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

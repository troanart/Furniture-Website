import Icon from "@/app/components/Icon/Icon";

export default function Benefits() {
  return (
    <section className="">
      <div className="container mx-auto px-5 pt-[100px]">
        <div>
          <div>
            <span className="text-orangePrimary text-sm">Benefits</span>
            <h2 className="mt-2 mb-4 text-titleColor text-2xl font-bold">
              Benefits when using our services
            </h2>
          </div>
          <div>
            <p className="text-textPrimary">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>
        </div>
        <ul className="pt-[30px] flex justify-center flex-wrap items-start  gap-y-5">
          <li className="p-4 max-w-[394px] w-100% shadow-shadowSearch bg-white">
            <span className="flex justify-center items-center w-[44px] h-[44px] rounded-[50%] bg-spanBg p-[10px] mb-[14px]">
              <Icon
                src={"/benefit-icon1.svg"}
                width={24}
                height={24}
                alt={"Icon"}
              />
            </span>
            <h4 className="text-base font-bold mb-[6px] text-titleColor">
              Many Choices
            </h4>
            <p className="text-sm font-medium text-textPrimary">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non.
            </p>
          </li>
          <li className="p-4 max-w-[394px] w-100% shadow-shadowSearch bg-white">
            <span className="flex justify-center items-center w-[44px] h-[44px] rounded-[50%] bg-spanBg p-[10px] mb-[14px]">
              <Icon
                src={"/benefit-icon2.svg"}
                width={24}
                height={24}
                alt={"Icon"}
              />
            </span>
            <h4 className="text-base font-bold mb-[6px] text-titleColor">
              Fast and On Time
            </h4>
            <p className="text-sm font-medium text-textPrimary">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non.
            </p>
          </li>
          <li className="p-4 max-w-[394px] w-100% shadow-shadowSearch bg-white">
            <span className="flex justify-center items-center w-[44px] h-[44px] rounded-[50%] bg-spanBg p-[10px] mb-[14px]">
              <Icon
                src={"/benefit-icon2.svg"}
                width={24}
                height={24}
                alt={"Icon"}
              />
            </span>
            <h4 className="text-base font-bold mb-[6px] text-titleColor">
              Fast and On Time
            </h4>
            <p className="text-sm font-medium text-textPrimary">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

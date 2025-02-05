import Image from "next/image";

export default function Search() {
  return (
    <div className="py-2 pr-2 pl-[14px] shadow-[0px_4px_80px_0px_rgba(175,173,181,0.2)] mb-[30px] bg-white flex justify-between items-center max-w-[810px] w-[100%]">
      <Image
        className="mr-3 "
        src={"/search.svg"}
        width={24}
        height={24}
        alt={"Search icon"}
      />
      <input
        type="text"
        className="outline-none"
        placeholder="Search property"
      />
      <button className="bg-greenColor text-white ml-auto  w-[100px] py-[10px] px-[26px]">
        Search
      </button>
    </div>
  );
}

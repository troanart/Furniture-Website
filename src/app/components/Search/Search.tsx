import Image from "next/image";

export default function Search() {
  return (
    <div className="absolute bg-white flex justify-between items-center">
      <Image src={"/search.svg"} width={32} height={32} alt={"Search icon"} />
      <input type="text" placeholder="Search property" />
      <button>Search</button>
    </div>
  );
}

import Image from "next/image"
import ShimmerButton from "@/components/magicui/shimmer-button";

export default function Header() {
  return (
    <header className="flex gap-10 py-3 z-30 w-screen fixed px-5 items-center bg-white bg-opacity-[0.02] shadow-sm backdrop-blur-sm">
      <div className="w-20">
        <Image
          src={"/logo.png"}
          alt="logo"
          className="object-cover"
          width={100}
          height={100}
        />
      </div>

      <nav>
        <ul className="flex gap-8 text-lg font-bold">
          <li>ACTUS</li>
          <li>CALENDRIERS</li>
          <li>CLASSEMENT</li>
          <li>CHAMPIONSHIP</li>
		  <li>SOUVENIRS</li>
        </ul>
      </nav>
      <ShimmerButton className="shadow-2xl absolute right-0 mx-10">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Major Ticket
        </span>
      </ShimmerButton>
    </header>
  )
}


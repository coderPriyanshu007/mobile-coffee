import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import Navigationi from "../components/Navigationi";
export default function () {
  return (
    <main className="flex flex-col flex-1 min-h-screen">
      <Container className="bg-gradient-to-r pb-30 py-8  from-[#313131] from-50% to-black ">
        <div className="relative">
          {/* location profile */}

          <span className="text-gray-400 text-xs">Location</span>
          <div className="flex items-center text-sm gap-1 text-gray-200 font-semibold">
            Bilzen, Tanjungbalai <ChevronDown size={20} />
          </div>
          <div className="flex gap-4 mt-6  ">
            <div className="flex flex-1 bg-[#313131]  p-4 rounded-xl ">
              <Search color="white" size={25} />
              <form action="">
                <input
                  type="search"
                  placeholder="Search coffee"
                  className="text-white ms-2 text-sm"
                />
              </form>
            </div>
            <button className="bg-[#C67C4E] px-4   rounded-xl">
              <SlidersHorizontal color="white" className="" />
            </button>
          </div>
        </div>
      </Container>
      <section className="px-6 z-10">
        <div className="relative space-y-4">
          <div
            style={{
              background: "url('/images/Banner.png')",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
            className="p-4 -mt-20 rounded-2xl   w-full"
          >
            <span className="bg-[#ED5151] text-sm font-semibold text-white p-1.5 rounded-md ">
              Promo
            </span>
            <div className="text-4xl mt-4 max-w-3xs font-semibold text-white before"> 
              <h1  className="before:bg-black/70  w-fit isolate z-0 before:w-full before:h-8  mb-2 before:inset-0 before:translate-y-1/3 before:-z-1 before:absolute relative">
              Buy one get 
            </h1>
            <h1  className="before:bg-black/70  w-fit isolate z-0 before:w-full before:h-8  mb-2 before:inset-0 before:translate-y-1/3 before:-z-1 before:absolute relative">
              one FREE
            </h1>
            
            </div>
          </div>
          <div className="flex overflow-x-auto text-sm text-white font-semibold no-scrollbar whitespace-nowrap gap-4">
            <div className="bg-[#C67C4E] px-2 py-1.5 rounded-lg">All Coffee</div>
            <div className="px-2 py-1.5 rounded-lg text-black">Machiato</div>
            <div className="px-2 py-1.5 rounded-lg text-black">Latte</div>
            <div className="px-2 py-1.5 rounded-lg text-black">Americano</div>
            <div className="px-2 py-1.5 rounded-lg text-black">Espresso</div>
            <div className="px-2 py-1.5 rounded-lg text-black">Flat</div>
          </div>
          <div className="grid grid-cols-2 px-2 md:grid-cols-3 gap-8">
            {
              Array.from({length:4}).map((_,index)=>(
                <ProductCard key={index} />
              ))
            }
          </div>
        </div>
      </section>
      <Navigationi />
    </main>
  );
}

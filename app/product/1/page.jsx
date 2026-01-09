import Container from "@/app/components/Container";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Heart , Motorbike, Bean , Package } from "lucide-react";
import Button from "@/app/components/Button";
export default function () {
  return (
        <><header className="px-4 py-8 relative ">
        {/* page heading */}
        <div className="flex">
          <div>
            <Link href="/home"><ChevronLeft  /></Link>
          </div>
          <h2 className="ms-auto">Detail</h2>
          <div className="ms-auto">
            <Heart />
          </div>
        </div>
    </header>
    <main className="space-y-4 min-h-screen">
        

        {/* product details container*/}
        <Container>
        <div className="w-full relative rounded-xl overflow-hidden aspect-video">

            {/* product image */}
          <Image
            src="/images/Product.png"
            alt="Caffee Mocha"
            fill
            className="object-cover"
          />
        </div>
        </Container>

        {/* product name and details */}
        <Container>
        <div className="">
          <h1>Caffe Mocha</h1>
          <div className="flex items-center">
            <small className="">ice/Hot</small>
            <div className="ms-auto flex gap-2 ">
                <div className="p-2 bg-gray-50 rounded-lg">
                    <Motorbike size={20} color="#C67C4E" />
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                    <Bean size={20} color="#C67C4E" />
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                    <Package size={20} color="#C67C4E" />
                </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl me-1">&#9733;</span> <span>4.8 <small>(230)</small></span>
            </div>
          </div>
          <div className="h1.5 border border-gray-200 mx-2 mt-2"></div>
        </div>
        </Container>

        {/* description */}
        <Container>
        <div className="space-y-2">
            <h2 className="font-semibold">Description</h2>
            <p className="text-sm font-light text-[#A2A2A2]">A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. <strong className="text-[#C67C4E]">Read More</strong></p>
        </div>
        </Container>

        {/* size */}
        <Container>
        <div className="space-y-2">
            <h2 className="font-semibold">Size</h2>
            <div className="flex gap-5 text-center text-sm">
                <div className="px-6 py-2 ring-2 flex-1 ring-gray-200 rounded-xl">S</div>
                <div className="px-6 py-2 ring-2 flex-1 ring-[#C67C4E] rounded-xl">M</div>
                <div className="px-6 py-2 ring-2 flex-1 ring-gray-200 rounded-xl">L</div>
                
            </div>
        </div>
        </Container>

        {/* buy button */}
        <div className="flex px-4 gap-12 py-4 bg-white  fixed bottom-0 w-full">
            <div className="">
                <span className="text-sm">Price</span>
                <div className="font-semibold text-[#C67C4E] text-lg">$ 4.53</div>
            </div>
            <Link href="/order/1" className=" flex flex-1">
              <Button>Buy</Button>
            </Link>
           
        </div>
      
    </main>
    </>
  );
}

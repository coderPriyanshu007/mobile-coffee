import Link from "next/link";
import { ChevronLeft , BadgePercent, LucideWallet, SquarePen,NotepadText, ChevronRight, ChevronDown} from "lucide-react";
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";

export default function () {
  return (
    <>
      <header className="">
        <nav>
          {/* page heading */}
          <div className=" flex px-4 py-8 relative">
            <Link href="/home" className="absolute left-4">
              <ChevronLeft />
            </Link>

            <h2 className="mx-auto font-semibold">Order</h2>
          </div>
        </nav>
      </header>

      <main className="space-y-4">
        {/* deliver */}
        <Container>
          <div className="grid grid-cols-2   text-white p-1 bg-gray-200 rounded-lg">
            <button className="bg-[#C67C4E] font-semibold py-1.5 rounded-lg">
              Deliver
            </button>
            <button className="text-black py-1.5 rounded-lg">Pick Up</button>
          </div>
        </Container>

        {/* delivery adress */}
        <Container>
            <h2 className="font-semibold">
                Delivery Address
            </h2>
            <div className="mt-4">
                <h3 className="text-sm font-semibold">
                    JI. Kpg Sutoyo
                </h3>
                <small className="text-gray-400">Kpg.Sutoyo No. 620, Blizen, Tanjungbalai</small>
            </div>
            <div className="flex gap-2 mt-4">
                <div className="flex border items-center px-4 py-1.5 rounded-full border-[gray] text-gray-600 text-xs gap-2">
                    <SquarePen size={16} className="" /> <span>Edit Address</span>
                </div>
                <div className="flex border items-center px-2 py-1 rounded-full border-[gray] text-gray-600 text-xs gap-2">
                    <NotepadText size={16} className="" /> <span>Add Note</span>
                </div>
            </div>
        </Container>
        <div className="border mx-12 border-gray-200">

        </div>
        <Container>
            <div className="flex gap-4">
                <div className=" relative size-12 rounded-lg overflow-hidden">
                    <img src="/images/Product.png" alt="coffee image"  className="object-cover aspect-square" />
                </div>
                <div  className="flex flex-col justify-center">
                    <h1 className="font-semibold">Caffee Mocha</h1>
                    <small className="text-[gray] text-xs">Deep Foam</small>
                </div>
                <div className="flex ms-auto  gap-4 items-center">
                    <span className="text-lg/0 px-2 py-3 bg-white  rounded-full border  border-gray-200 ms ">-</span>
                    <span className="text-sm font-semibold">1</span>
                    <span className="text-lg/0 px-2 py-3 bg-white rounded-full border border-gray-200">+</span>
                </div>
            </div>
        </Container>
        <div className="border-2 border-[#F9F2ED]"></div>
        {/* payment summary */}
        <Container>
            <div className="flex gap-4 p-4 items-center border-1 rounded-xl border-gray-200 ">
                <BadgePercent color="#C67C4E" />
                <span className="font-semibold text-sm text-gray-700">
                    1 Discount is Applies
                </span>
                <ChevronRight className="ms-auto text-gray-700" />
            </div>
            <h2 className="font-semibold text-base/16">Payment Summary</h2>
            <div className="flex mb-2">
                <span className="text-sm">Price</span>
                <span className="ms-auto font-semibold text-sm">$ 4.53</span>
            </div>
            <div className="flex">
                <span className="text-sm">Delivery Fee</span>
                <span className="ms-auto  text-sm"> <span className="line-through me-2">$ 2.0</span><span className="font-semibold">$ 1.0</span></span>
            </div>
        </Container>
        
      </main>
      <footer className="fixed bottom-0 py-2  z-20 bg-white w-full">
           <div className="px-6 space-y-2">
             <div className="flex gap-4 items-center">
                <LucideWallet size={20} color="#C67C4E" />
                <div>
                    <h4 className="text-sm font-semibold">Cash/Wallet</h4>
                    <small className="text-[#C67C4E] font-semibold ">
                        $5.53
                    </small>
                </div>
                <ChevronDown color="gray" className="ms-auto" />
            </div>
             <Link href="/pickup/1" className="flex ">
                <Button>
                    Order
                </Button>
            </Link>
           </div>
           
        </footer>
    </>
  );
}

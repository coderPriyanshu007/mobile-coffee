import Link from "next/link"
import Image from "next/image"
export default function(){
    return <Link href="/product/1" className="">
        <div className="space-y-1">
        <div className="relative aspect-square overflow-hidden w-full rounded-2xl">
            <Image src="/images/Product.png" alt="coffee" fill className="object-cover" />
        </div>
        <h2 className="text-base font-semibold">
            Caffe Mocha
        </h2>
        <div className="text-xs">Deep Foam</div>
        <div className="flex space-between  items-center  w-full">
            <div className="flex-1 text-lg font-semibold">
                $4.53
            </div>
            <button className="font-bold bg-[#C67C4E]  rounded-lg text-xl px-3 py-1 text-white font-bold">+</button>
        </div>
    </div>
    </Link>
}
import Image from "next/image";
import Container from "@/app/components/Container";
import Link from "next/link";
import { ChevronLeft, Motorbike, PhoneCall ,LocateFixed} from "lucide-react";
export default function () {
  return (
    <main className="min-h-screen relative">

        {/* map */}
      <Image
        src="/images/maps.png"
        fill
        alt="map"
        className="absolute -z-1 inset-0 object-cover"
      />

        {/* top buttons */}

        <div className="py-8 px-6 flex">
            <Link href="/order/1" className="p-4 bg-[#EDEDED] dark:bg-black/40 rounded-xl ">
                <ChevronLeft size={32} />
            </Link>

             <div className="p-4  ms-auto bg-black/40 bg-[#EDEDED] rounded-xl ">
                <LocateFixed size={32} />
            </div>
           
        </div>

      {/* pickup details */}
      <Container className="fixed bottom-0 bg-white dark:bg-gray-900 py-6">
        <div className="border-4 border-gray-200 dark:border-white/40 w-16 rounded-full mx-auto"></div>
        <div className="py-4 text-center">
          <h1 className="font-semibold">10 minutes left</h1>
          <p><span className="text-gray-400">Delivery to</span> JI.Kpg Sutoyo</p>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-4">
            <div className="border-3 rounded-full border-green-500"></div>
            <div className="border-3 rounded-full border-green-500"></div>
            <div className="border-3 rounded-full border-green-500"></div>
            <div className="border-3 rounded-full border-gray-200"></div>
          </div>
          <div className="flex items-center gap-4 p-2 border-2 rounded-lg border-gray-200 dark:border-white/10">
            <div className="p-4 border-2 border-gray-200 dark:border-white/10 rounded-xl"><Motorbike size={35} color="#C67C4E" className="" /></div>
            <div>
              <h4 className="font-semibold">Delivered your order</h4>
              <p className="font-thin text-sm">
                We will deliver your goods to you in the shortest possible time
              </p>
            </div>
          </div>
          {/* delivery person */}
          <div className="flex gap-4 items-center">

            {/* image */}
            <div className="size-20 relative rounded-3xl overflow-hidden">
                <Image src="/images/person.png" alt="delivery boy image" fill className="object-cover" />
                
            </div>
            {/* name */}
            <div>
                <h4 className=" font-semibold text-lg">
                    Brooklyn Simmons
                </h4>
                <span className="text-gray-400">
                    Personal Courier
                </span>
            </div>

            {/* phone call */}
            <div className="ms-auto p-4 border-2 border-gray-200 dark:border-white/10 rounded-xl">
                <PhoneCall size={30}  className="dark:text-white" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

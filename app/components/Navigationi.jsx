import { Home,Heart ,ShoppingBag  ,Bell} from "lucide-react"
export default function(){
    return <footer className="fixed bottom-0 bg-white w-full w-full z-50 ">
        <nav className="flex w-full  px-4  ">
        <div className="p-4  space-y-2  mx-auto">
            <Home size={24} color="#C67C4E" />
            <div className="h-1.5 rounded-lg w-[50%] mx-auto bg-[#C67C4E]">

            </div>
        </div>
        <div className="p-4  space-y-2 mx-auto">
            <Heart size={24} color="gray" />
            <div className="h-1.5 hidden rounded-lg w-[50%] mx-auto bg-[#C67C4E]">

            </div>
        </div>
        <div className="p-4 space-y-2 mx-auto">
            <ShoppingBag size={24} color="gray" />
            <div className="h-1.5 hidden rounded-lg w-[50%] mx-auto bg-[#C67C4E]">

            </div>
        </div>
        <div className="p-4  space-y-2 mx-auto">
            <Bell size={24} color="gray" />
            <div className="h-1.5 hidden rounded-lg w-[50%] mx-auto bg-[#C67C4E]">

            </div>
        </div>
    </nav>
    </footer>
}
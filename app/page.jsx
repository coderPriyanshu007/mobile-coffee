import Image from "next/image";
import Link from "next/link";
import Container from "./components/Container";
import Button from "./components/Button";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full min-h-screen bg-black   flex-col flex-1 items-center justify-between   sm:items-start">
        <div className="w-full h-screen  absolute inset-0  -translate-y-1/4">
          <Image
            src="/images/onboarding-bg.png"
            alt="coffee image on onboarding page"
            fill
            className="object-cover"
          />
        </div>

        <Container className="absolute bottom-0">
          <div className="text-white text-center space-y-4 ">
            <h1 className="text-3xl font-semibold ">
              Fall in Love with Coffee in Blissful Delight
            </h1>
            <p className="text-gray-400">
              Welcome to our cozy coffee corner, where every cup is a delightful
              for you.
            </p>
            <Link href='/home' className="flex py-4">
                <Button>Get Started</Button>
            </Link>
          </div>
        </Container>
      </main>
    </div>
  );
}

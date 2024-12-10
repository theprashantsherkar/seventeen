import { CoolMode } from "@/components/ui/cool-mode"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LetterPullup from "@/components/ui/letter-pullup"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5" >
      <h1 className="text-3xl"><LetterPullup words="Hello Tanvi" delay={0.05}/></h1>
      <CoolMode>
        <Button>
          <Link href={"/q1"}>Lets get started.</Link>
        </Button>
      </CoolMode>
    </div>
  )
}
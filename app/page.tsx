import { CoolMode } from "@/components/ui/cool-mode"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LetterPullup from "@/components/ui/letter-pullup"
import { FollowerPointerCard, FollowPointer } from "@/components/ui/following-pointer"
import Image from "next/image"
import WordPullUp from "@/components/ui/word-pull-up"
import { BackgroundLines } from "@/components/ui/background-lines"

export default function Home() {
  return (

    <FollowerPointerCard
      title={
        <TitleComponent
          title={blogContent.author}
          avatar={blogContent.authorAvatar}
        />
      }>

      <div className="flex flex-col items-center justify-center h-screen gap-2 text-black bg-blue-700" >
        <h1 className="text-4xl"><LetterPullup words="Hello Tanvi" delay={0.05} /></h1>
        <WordPullUp words="Happy one month anniversary, my love!❤️" />
        <div className="hover:cursor-none">
          <CoolMode>
            <Button>
              <Link href={"/first"}>Lets GO.</Link>
            </Button>
          </CoolMode>
        </div>
      </div>
    </FollowerPointerCard>


  )
}


const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Tanvi Gupte",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/tg.jpg",
  authorAvatar: "/tg.jpg",
};


const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
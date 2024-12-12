
import { Vortex } from "@/components/ui/vortex";
import { div } from "framer-motion/client";
export default function Home() {

    return (
        <div className="w-full h-screen">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-screen"
            >
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    I LOVE YOU {"<3"}
                </h2>
                <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                    Here’s to us, to love, and to many more anniversaries to come. I promise to cherish you, annoy you a little (but in a cute way), and love you endlessly.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                        Order now
                    </button>
                    <button className="px-4 py-2  text-white ">Watch trailer</button>
                </div>
            </Vortex>
        </div>

    );

}

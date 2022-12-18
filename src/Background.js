import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import tw from "twin.macro"
import Earth from "./Earth"

export default function Background({ showMoreState: [showMore, setShowMore] }) {
  return (
    <SizedCanvas>
      <Suspense fallback={null}>
        <Environment
          files={process.env.PUBLIC_URL + "/envmap.hdr"}
          background={"both"}
        />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Earth showMore={showMore} scale={[1.5, 1.5, 1.5]} />
      </Suspense>
    </SizedCanvas>
  )
}

const SizedCanvas = tw(
  Canvas
)`h-screen! w-screen! fixed! top-0! left-0! z-[-1]!`

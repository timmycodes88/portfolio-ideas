import { useState } from "react"
import Background from "./Background"
import MainApp from "./MainApp"

function App() {
  const [showMore, setShowMore] = useState(false)
  return (
    <>
      <Background showMoreState={[showMore, setShowMore]} />
      <MainApp showMoreState={[showMore, setShowMore]} />
    </>
  )
}

export default App

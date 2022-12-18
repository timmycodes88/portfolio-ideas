import { useState } from "react"
import tw, { styled } from "twin.macro"

export default function MainApp({ showMoreState }) {
  const [showMore, setShowMore] = showMoreState
  return (
    <Body>
      <Prompt>
        <h1>Hello React Three Fiber!</h1>
        <Button showMore={showMore} onClick={() => setShowMore(!showMore)}>
          {!showMore ? "Show More" : "Show Less"}
        </Button>
      </Prompt>
      <Text showMore={showMore}>
        <h1>{text}</h1>
      </Text>
    </Body>
  )
}

const Body = tw.div`min-h-screen`
const Prompt = tw.div`bg-white bg-opacity-90 rounded-lg p-4 max-w-2xl mx-auto my-10 flex items-center justify-between`
const Text = styled.div(({ showMore }) => [
  tw`bg-white bg-opacity-90 shadow-2xl transition-all rounded-lg p-4 max-w-2xl mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between`,
  showMore ? tw`scale-y-100` : tw`scale-y-0`,
])
const Button = styled.button(({ showMore }) => [
  tw`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`,
  showMore && tw`bg-red-500 hover:bg-red-600 `,
])

const text = `React Three Fiber (R3F) is an awesome library for building 3D graphics
with React. It provides a declarative interface for Three.js, a
popular JavaScript library for creating 3D graphics, making it easy to
integrate 3D graphics into a React application. One of the great
things about R3F is that it allows you to use the familiar declarative
syntax of React to describe your 3D scene. This makes it easy to build
complex 3D graphics using reusable components, and it helps to keep
your code organized and maintainable. R3F also provides a wide range
of features that make it easier to work with Three.js in a React
environment. For example, it provides a set of hooks that allow you to
load 3D models, textures, and other assets asynchronously, and it
provides a way to control the rendering loop using React's lifecycle
methods. Overall, R3F is an extremely powerful and flexible library
that makes it easy to build 3D graphics with React. Whether you're
building a simple 3D visualization or a complex interactive
application, R3F provides the tools you need to create stunning 3D
graphics and bring your ideas to life.`

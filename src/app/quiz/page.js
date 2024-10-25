import Link from "next/link"
import DisplayCard from "../components/DisplayCard/DisplayCard"

function quiz() {
  return (
    <div
      className="flex items-center justify-center flex-col m-6 md:h-[80vh]">


      <div
        className="text-center">
        <h1
          className="md:text-5xl text-3xl font-bold m-4 mb-1 text-blue-950">
          Choose a Quiz
        </h1>
        <p
          className="md:text-xl  text-xs font-semibold text-blue-600 mb-6">
          Select the course name and start answering questions.
        </p>
      </div>


      <div
        className="flex md:flex-row flex-col items-center justify-center">

        <DisplayCard title="Educational Leadership" link="/quiz/educational-leadership" />


      </div>
    </div >
  )
}

export default quiz
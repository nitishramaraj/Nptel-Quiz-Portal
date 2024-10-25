import Link from "next/link"

function DisplayWeeks({ title, link }) {
    const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "ALL"];

    return (
        <div className=" flex flex-col items-center justify-center p-10 md:h-[80vh]">
            <div
                className="text-center">
                <h1
                    className="md:text-3xl text-xl font-bold text-center text-indigo-900">{title}</h1>
                <h6
                    className="md:text-lg text-xs mt-4 text-indigo-300">Select a week from below</h6>

                <ul
                    className="sm:flex sm:flex-row sm:flex-wrap md:justify-center md:basis-3/4 grid grid-cols-2 mt-10">
                    {weeks.map((week) => (
                        <li key={week}
                            className="md:text-2xl text-lg bg-indigo-200 p-2 rounded-lg mx-4 my-2 md:w-36 md:h-14 w-24 h-10 text-center font-semibold hover:bg-indigo-500 transition duration-300 ease-in-out flex items-center justify-center  text-indigo-800 hover:text-indigo-100"
                        >
                            <Link href={`/quiz/${link}/week-${week}`}>Week-{week}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DisplayWeeks;
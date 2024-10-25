import React from 'react'
import Link from 'next/link'

function DisplayCard({ title, link }) {
    return (
        <div
            className="p-8 bg-[whitesmoke] rounded-xl m-4 flex flex-col justify-center text-center ">
            <h1
                className="text-xl md:text-3xl font-bold text-indigo-900">
                {title}
            </h1>
            <p
                className="font-semibold md:text-sm text-xs mt-2 text-[#121111ac]">
                Test your knowledge about the {title} Course.
            </p>
            <div
                className="inline-block p-2 rounded-xl text-center text-2xl font-bold cursor-pointer md:mt-6 mt-2">
                <Link
                    className="text-xl text-slate-800 hover:text-indigo-600 bg-indigo-100 p-2 rounded-xl"
                    href={link}>
                    Start Quiz
                </Link>

            </div>
        </div>

    )
}

export default DisplayCard
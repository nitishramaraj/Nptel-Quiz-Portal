import Link from 'next/link'
import Image from 'next/image'

function HeroSection() {
    return (
        <div className='md:flex md:h-[80vh] md:items-center md:justify-center'>
            <div className="flex flex-col items-center justify-center p-12">
                <h1
                    className="md:text-4xl  text-2xl font-bold text-center text-slate-900 m-6 mb-9">
                    Practice Quizzes for NPTEL Exam.
                </h1>

                <p
                    className="md:text-xl text-sm font-semibold text-center text-gray-900 mb-2 ">
                    The following courses are available.
                </p>
                <p
                    className="md:text-xl text-sm font-semibold text-center text-gray-900 mb-8 ">
                    1) Educational Leadership <br />
                </p>
                <div>
                    <Link
                        className='md:text-2xl text-lg bg-blue-950 text-white p-3 rounded-xl mt-2' href='quiz'>Start Quiz</Link>
                </div>
            </div>



            <div className='flex items-center justify-center mb-10'>
                <Image
                    className='rounded-xl hidden md:block mix-blend-multiply mr-10'
                    priority={true} src="/hs_web.png"
                    width={800}
                    height={800}
                    alt="quiz"></Image>
                <Image
                    className='rounded-xl  md:hidden mix-blend-multiply'
                    priority={true}
                    src="/hs_mobile.png"
                    width={350}
                    height={350}
                    alt="quiz"></Image>
            </div>

        </div>
    )
}

export default HeroSection;
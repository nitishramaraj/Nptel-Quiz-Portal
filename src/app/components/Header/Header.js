import Link from 'next/link';

const Header = () => {

    return (
        <nav
            className="bg-[whitesmoke] p-4 shadow-xl shadow-gray-300 rounded-b-xl">
            <div
                className="mx-auto flex flex-col justify-between items-center md:grid md:grid-cols-2 ">
                {/* Logo */}
                <div
                    className="text-blue-950 text-2xl font-bold text-center md:col-end-1 px-4">
                    <Link href="/">NPTEL Quiz Practice</Link>
                </div>

                {/* Menu */}
                <div
                    className='flex items-center justify-center md:col-end-4 px-6 pb-2'>
                    <ul
                        className="flex flex-wrap items-center justify-center space-x-6 text-lg text-black mt-6 md:mt-0">
                        <li
                            className='font-bold hover:text-midnight  text-blue-600'>
                            <Link
                                href="/">
                                Home
                            </Link>
                        </li>

                        <li
                            className='font-bold hover:text-midnight text-blue-600'>
                            <Link
                                href="/quiz">
                                Quizzes
                            </Link>
                        </li>

                        <li
                            className='font-bold hover:text-midnight text-blue-600'>
                            <Link
                                href="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;


import Image from 'next/future/image';
import Link from 'next/link';

export default function Navbar(){
    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/">
                    <a className="flex items-center">
                        <Image
                            src="/images/logo.svg"
                            alt="Image Optimizer"
                            width={35}
                            height={35}
                            className=""
                        />
                        <span className="ml-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Image Optimizer</span>
                    </a>
                </Link>
                <div className="flex md:order-2">
                    <Link href="https://github.com/dekiakbar/image-optimizer/">
                        <button
                            type="button"
                            className="text-white bg-violet-700 hover:bg-violet-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700"
                        >
                            Github
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar(){
    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full top-0 left-0 border-b border-gray-200 z-1100">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/" className="flex items-center">

                    <Image
                        src="/images/logo.svg"
                        alt="Image Optimizer"
                        width={35}
                        height={35}
                        className=""
                    />
                    <span className="ml-3 self-center text-xl font-semibold whitespace-nowrap">Image Optimizer</span>

                </Link>
                <div className="flex md:order-2">
                    <Link href="https://github.com/dekiakbar/image-optimizer/" legacyBehavior>
                        <button
                            type="button"
                            className="text-white bg-violet-700 hover:bg-violet-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                        >
                            Github
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
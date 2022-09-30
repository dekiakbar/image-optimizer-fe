import Image from 'next/future/image';
import Link from 'next/link';
const year = new Date().getFullYear();

export default function Footer(){
    return (
        <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
            <div className="mx-auto container">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/">
                            <a className="flex items-center">
                                <Image
                                    className="mr-3 h-8"
                                    src="/images/logo.svg"
                                    alt="Image Optimizer"
                                    width={35}
                                    height={35}
                                />
                                <span className="ml-3 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Image Optimizer</span>
                            </a>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Built With</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="https://nestjs.com/">
                                        <a className="hover:underline">NestJs</a>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="https://nextjs.org/">
                                        <a className="hover:underline">NextJs</a>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="https://uppy.io/">
                                        <a className="hover:underline">Uppy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://tailwindcss.com/">
                                        <a className="hover:underline">Tailwind CSS</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Documentation</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="https://github.com/dekiakbar/image-optimizer">
                                        <a className="hover:underline ">Github</a>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="https://api.imageoptimizer.nooby.dev/api">
                                        <a className="hover:underline ">API</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © { year }
                        <Link href="/">
                            <a className="hover:underline">Nooby.dev</a>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    )
}
import Image from 'next/image';
import Link from 'next/link';
const year = new Date().getFullYear();

export default function Footer(){
    return (
        <footer className="p-4 bg-gray-50 sm:p-6">
            <div className="mx-auto container">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">

                            <Image
                                className="mr-3 h-8"
                                src="/images/logo.svg"
                                alt="Image Optimizer"
                                width={35}
                                height={35}
                            />
                            <span className="ml-3 self-center text-2xl font-semibold whitespace-nowrap">Image Optimizer</span>

                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Built With</h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <Link href="https://nestjs.com/" className="hover:underline">
                                        NestJs
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="https://nextjs.org/" className="hover:underline">
                                        NextJs
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="https://uppy.io/" className="hover:underline">
                                        Uppy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://tailwindcss.com/" className="hover:underline">
                                        Tailwind CSS
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Documentation</h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <Link
                                        href="https://github.com/dekiakbar/image-optimizer"
                                        className="hover:underline ">
                                        Github
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        href="https://api-imageoptimizer.nooby.dev/api"
                                        className="hover:underline ">
                                        API
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © { year }
                        <Link href="/" className="hover:underline">
                            Nooby.dev
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
}
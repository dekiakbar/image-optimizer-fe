import Image from 'next/future/image';
import optmizeImage from '../public/images/optimize.png';
import apiImage from '../public/images/api.png';

export default function Header(){
    return (
        <section className="pt-20 bg-white">
            <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
                <div className="relative">
                    <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-4xl">Lossless Image Compressor</h2>
                    <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
                        Our image optiomizer is fast, reliable and easy-to-use. Our image compression tool will optimize and compress your images to lesser file size.
                    </p>
                </div>
                <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                    <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                        <Image
                            src={optmizeImage}
                            priority
                            alt="Image Optimizer"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                        <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Optimized Size</p>
                        <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Optimized For Website</h3>
                        <p className="mt-5 text-lg text-gray-700 text md:text-left">Your images will be optimized with our system, which is great for improving your website&rsquo;s performance.</p>
                    </div>
                </div>
                <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                    <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                        <Image
                            src={apiImage}
                            priority
                            alt="Image Optimizer"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                        <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">API Ready</p>
                        <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Integrate To Your Own App</h3>
                        <p className="mt-5 text-lg text-gray-700 text md:text-left">Integrate your system easily with our API, without uploading images manually through our website.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
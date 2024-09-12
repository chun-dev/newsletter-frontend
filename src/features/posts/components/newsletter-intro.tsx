import testImage from '@/assets/test.png' // Adjust the path accordingly
import { Link } from 'react-router-dom'

export const NewsletterIntro = () => {
    return (
        <section className="bg-blog-color">
            <div className="m-auto max-w-screen-2xl px-5 pb-10 lg:px-20">
                <div className="flex flex-col-reverse gap-5 md:flex-row">
                    <div className="flex flex-col gap-5 md:basis-4/5 md:justify-center">
                        <div className="text-blogIntroTitle font-bold leading-none">
                            BIG BLOG GIANT INTRO
                        </div>
                        <div className="text-blogIntroSubtitle leading-none">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse ultricies porta leo. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit.
                            Suspendisse ultricies porta leo.
                        </div>
                        <Link to="./month">
                            <button
                                type="button"
                                className="w-fit rounded-lg border-2 border-black bg-button-color px-20 py-1 text-button font-bold hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                            >
                                Read More
                            </button>
                        </Link>
                    </div>

                    {/* Right Column (Image) */}
                    <div className="flex items-center justify-center">
                        <picture>
                            <img
                                className="block w-[360px] max-w-full rounded-lg border-2 border-black object-cover p-2"
                                src={testImage}
                                alt="Description of image"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}

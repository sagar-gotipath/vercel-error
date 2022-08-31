import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function ProductBottomCard({ title, description, coverImage }) {
    const paraHeight = useRef(null);
    const [bottomMargin, setBottomMargin] = useState(0);

    // destructing image properties
    const {
        url,
        width, height 
    } = coverImage;

    const windowSize = Math.max(1 || window.outerWidth);
    //   calculating and setting product card paragraph height for hover effect
    useEffect(() => {
        if (window.outerWidth >= 1024) {
            if (paraHeight) {
                const paragraphHeight = paraHeight.current.clientHeight;
                setBottomMargin(paragraphHeight);
            }
        }
    }, []);
    return (
        <div className="relative overflow-hidden rounded-md group">
            <section className="relative w-full duration-300 min-w-min lg:blur-none lg:group-hover:blur-sm after:content-[''] after:inset-0 after:absolute after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-black/90 lg:after:bg-gradient-to-t lg:after:from-transparent lg:after:to-transparent">
                {
                    url && <Image
                    src={url}
                    alt="product background"
                    layout="responsive"
                    width={width }
                    height={height }
                ></Image>
                }
                
            </section>
            {/* for large device */}
            <article
                style={{
                    bottom: `-${bottomMargin + 16}px`,
                }}
                className="hidden lg:flex flex-col justify-center bottom-0 py-4  absolute z-10 px-4 overflow-hidden lg:group-hover:!bottom-[0px] duration-300 ease-in"
            >
                <div className="mb-2 text-lg font-semibold text-white capitalize select-none">
                    {title}
                </div>
                <div
                    className="pb-3 text-sm text-white capitalize select-none"
                    ref={paraHeight}
                >
                    {description}
                </div>
            </article>
            {/* for medium and small device */}
            <article className="absolute bottom-0 z-10 flex flex-col justify-center px-4 py-3 overflow-hidden lg:hidden">
                <div className="mb-1 text-base font-semibold text-white capitalize select-none">
                    {title}
                </div>
                <div className="hidden pb-4 text-sm text-white capitalize select-none md:block">
                    {description}
                </div>
            </article>
        </div>
    );
}

// lg:aspect-square

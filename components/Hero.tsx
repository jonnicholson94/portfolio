
import Link from "next/link";

import Divider from "./Divider";

export default function Hero() {
    return (
        <section className="h-auto w-full flex items-start justify-center flex-col">
            <h1 className="h-auto w-full mt-[30px] text-[24px] font-bold">Jon Nicholson</h1>
            <h3 className="text-[#d9d9d9] mb-[20px]">Product manager</h3>
            <div className="h-auto w-full flex items-center justify-start">
                <Link className="mr-[20px]" href="https://www.linkedin.com/in/jonathanenicholson/" target="_blank">
                    <img className="h-[30px] w-[30px] mr-[10px]" src="/linkedin.svg" alt="The LinkedIn icon" />
                </Link>
            </div>
            <Divider />
            <div className="h-auto w-full">
                <p className="text-[14px] mb-[10px]">I&apos;m a Product Manager with nearly 3 years of commercial product experience. I have strong product skills - including working closely with engineers, writing tech specs, conducting QA, running user research, building prototypes in Figma, and more.</p>
                <p className="mb-[10px] text-[14px]">During my time at LOVESPACE, I delivered a number of key projects. This included delivering a complete rebuild of LOVESPACE&apos;s driver app, fron discovery through to full delivery. Most recently, I delivered a v1 of a complete rebuild of LOVESPACE&apos;s internal admin site tool as well.</p>
                <p className="text-[14px]">I also have strong technical experience, having taught myself to code ~4 years ago. Since then, I&apos;ve built a number of side projects, and I&apos;m currently working on a new platform which you can view in my portfolio.</p>
            </div>
            <Divider />
        </section>
    )
}
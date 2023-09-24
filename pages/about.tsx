import Head from "next/head"
import Link from "next/link"

const About = () => {
    return (
        <>
        <Head>
            <title>About me | Jon Nicholson</title>
        </Head>
        <Link className="absolute top-[20px] left-[20px]" href="/">
            <img className="h-[25px] w-[25px]" src="/close.svg" />
        </Link>
        <div className="h-auto xxs:w-[90%] md:w-[60%] xxs:ml-[5%] md:ml-[20%] flex flex-col items-start justify-center mt-[100px] mb-[100px]">
            <h1 className="text-4xl font-bold text-black mb-[30px]">Hey, I’m Jon. 👋</h1>
            <p className="text-lg mt-[15px]">I’m a junior software engineer, with experience in React, TypeScript, Node.js and Go.</p>
            <p className="text-lg mt-[15px]">I wanted to do the same, so set about teaching myself the basics - HTML, CSS and JavaScript. Since then, I’ve written code using React, Next.js, a little bit of Vue, Node.js, and quite a lot of Go (my favourite language).</p>
            <p className="text-lg mt-[15px]">Alongside this, I’ve been teaching myself computer science fundamentals. I’ve been learning Big O notation, basic data structures and algorithms, writing automated tests and scripts, and creating PostgreSQL or NoSQL databases to use in my projects.</p>
            <p className="text-lg mt-[15px]">Now, I want to take this experience, and help a great company continue building out their tech in a software engineer role. </p>
        </div>
        </>
    )

}

export default About
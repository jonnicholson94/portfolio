import Link from "next/link"

const Info = () => {

    return (
        <div className="xxs:h-auto md:h-screen xxs:relative md:fixed top-0 flex flex-col">
            <img src="/me.jpg" className="h-[200px] w-[200px] rounded-rnd mt-[50px] shadow" />
            <h1 className="text-4xl font-bold mt-[30px]">Jon Nicholson</h1>
            <p className="mt-[30px] text-lg text-border">Junior Software Engineer</p>
            <div className="h-auto w-full flex items-center justify-start my-[30px]">
                <Link className="mr-[20px]" href="https://www.linkedin.com/in/jonathanenicholson/" target="_blank">
                    <img className="h-[30px] w-[30px] mr-[10px]" src="/linkedin.svg" alt="The LinkedIn icon" />
                </Link>
                <Link href="https://github.com/jonnicholson94" target="_blank">
                    <img className="h-[30px] w-[30px]" src="/github.svg" alt="The GitHub icon" />
                </Link>
            </div>
        </div>
    )

}

export default Info
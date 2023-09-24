
import Link from "next/link"

type Props = {
    bg: "bg-blue" | "bg-red" | "bg-lilac" | "bg-purple" | "bg-salmon" | "bg-green"
    title: string 
    description: string
    viewLink?: string
    githubLink: string
}

const Card = ({ bg, title, description, viewLink, githubLink }: Props) => {
    
    return (
        <div className="h-[320px] w-[350px] flex flex-col items-start justify-center border border-paleGrey rounded-md mx-[30px] my-[20px] p-[30px] hover:shadow">
            <span className={`h-[30px] w-[30px] bg-gradient-to-r from-blue to-lilac rounded-rnd`}></span>
            <h2 className="text-2xl font-bold my-[20px]">{title}</h2>
            <p className="text-lg">{description}</p>
            <div className="w-full flex-grow flex items-end justify-start my-[20px]">
                { viewLink && <Link className="h-auto flex items-center justify-center font-bold mr-[20px]" href={viewLink} target="_blank">
                    View 
                    <img className="ml-[5px]" src="/arrow.svg" />
                </Link> }
                <Link className="py-[5px] px-[15px] text-sm border border-paleGrey rounded-md" href={githubLink} target="_blank">
                    View GitHub
                </Link>
            </div>
        </div>
    )
}

export default Card
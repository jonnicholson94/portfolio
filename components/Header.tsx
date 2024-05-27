import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {

    const router = useRouter()

    return (
        <nav className="h-[70px] w-full flex items-center justify-center">
            <Link className={`h-[35px] flex items-center justify-center px-[10px] text-[14px] mx-[10px] ${router.pathname === "/" && "border border-[#e9e9e9] rounded-[7px] font-medium"}`} href="/">Work history</Link>
            {/* <Link className={`h-[35px] flex items-center justify-center px-[10px] text-[14px] mx-[10px] ${router.pathname === "/portfolio" && "border border-[#e9e9e9] rounded-[7px] font-medium"}`} href="/portfolio">Portfolio</Link> */}
            <Link className={`h-[35px] flex items-center justify-center px-[10px] text-[14px] mx-[10px] ${router.pathname === "/blog" && "border border-[#e9e9e9] rounded-[7px] font-medium"}`} href="/blog">Blog</Link>
        </nav>
    )
}
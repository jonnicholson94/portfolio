
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

const SideContainer = ({ children }: Props) => {
    return (
        <div className="h-max xxs:w-[98%] md:w-[600px] md:top-0 flex flex-col items-start justify-start xxs:px-[20px] md:px-[50px]">
            { children }
        </div>
    )
}

export default SideContainer
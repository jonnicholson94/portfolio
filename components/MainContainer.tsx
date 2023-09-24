
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

const MainContainer = ({ children }: Props) => {
    return (
        <div className="h-full flex-grow flex items-start justify-end flex-wrap my-[30px]">
            { children }
        </div>
    )
}

export default MainContainer

type Props = {
    heading: string 
    list: string[]
}

export default function ResponsibilityList({ heading, list }: Props) {
    return (
        <div className="h-auto w-full flex items-center justify-center flex-col my-[15px]">
            <h4 className="w-full text-[14px] font-semibold">{heading}</h4>
            <ul className="h-auto w-full px-[15px] list-disc mt-[5px]">
                { list.map((l, index) => {
                    return (
                        <li key={index} className="text-[12px] my-[2px]">{l}</li>
                    )
                })}
            </ul>
        </div>
    )
}
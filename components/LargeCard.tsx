
type Props = {
    heading: string 
    location: string 
    timerange: string 
    children: React.ReactNode
}

export default function LargeCard({ heading, location, timerange, children }: Props) {
    return (
        <div className="h-auto w-full border border-[#e9e9e9] rounded-[8px] shadow shadow-sm p-[20px] my-[15px]">
            <h3 className="text-[18px] font-semibold">{heading}</h3>
            <p className="text-[14px] text-[#c9c9c9] mt-[2px]">{location} - {timerange}</p>
            { children }
        </div>
    )
}

import Link from "next/link";

import { juniorProductManagerResponsibilities, productManagerAchievements, productManagerResponsibilities } from "@/_lib/lists";
import LargeCard from "./LargeCard";
import ResponsibilityList from "./ResponsibilityList";
import Divider from "./Divider";

export default function EducationHistory() {
    return (
        <section>
            <h2 className="text-[20px] font-bold">Education history</h2>

            <LargeCard heading="BSc Psychology" location="University of Manchester" timerange="September 2014 -July 2017">
                <p className="text-[12px] my-[15px]">At University, I studied Psychology, and focused on behavioural psychology. I particularly enjoyed learning about consumers’ behaviour behind a lot of the decisions they make when making purchases, and try to use a lot of that today in my decisions around product building.</p>
            </LargeCard>

        </section>
    )
}
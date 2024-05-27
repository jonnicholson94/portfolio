
import Link from "next/link";

import { juniorProductManagerResponsibilities, productManagerAchievements, productManagerResponsibilities } from "@/_lib/lists";
import LargeCard from "./LargeCard";
import ResponsibilityList from "./ResponsibilityList";
import Divider from "./Divider";

export default function CareerHistory() {
    return (
        <section>
            <h2 className="text-[20px] font-bold">Career history</h2>

            <LargeCard heading="Product Manager" location="LOVESPACE" timerange="April 2022 - April 2024">
                <ResponsibilityList heading="Responsibilities" list={productManagerResponsibilities} />
                <ResponsibilityList heading="Key achievements and actions" list={productManagerAchievements} />
            </LargeCard>

            <LargeCard heading="Junior Product Manager" location="LOVESPACE" timerange="June 2021 - April 2022">
                <ResponsibilityList heading="Responsibilities" list={juniorProductManagerResponsibilities} />
            </LargeCard>

            <LargeCard heading="Program Manager" location="Jaywing" timerange="August 2020 - March 2021">
                <p className="text-[12px] my-[15px]">I worked on various different attribution projects for Jaywing’s clients, providing data attribution modelling for each client’s marketing campaigns. This was then reported on to our clients, driving marketing efficiencies and reducing overall spend.</p>
            </LargeCard>

            <LargeCard heading="Project Coordinator" location="Epiphany Search" timerange="February 2020 - August 2020">
                <p className="text-[12px] my-[15px]">After teaching myself to code, I joined Epiphany as a Project Coordinator, helping them build client websites. In this role, I supported the project team with planning website builds, and had direct client contact working on change requests for existing websites. I worked with a number of different household-name clients.</p>
            </LargeCard>

            <p className="mt-[30px] text-[14px]">More experience available upon request, or viewable on my <Link className="underline" href="https://www.linkedin.com/in/jonathanenicholson/">LinkedIn</Link></p>

            <Divider />

        </section>
    )
}
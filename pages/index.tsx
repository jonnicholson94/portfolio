
import Head from "next/head"

import Card from "@/components/Card"
import Info from "@/components/Info"
import MainContainer from "@/components/MainContainer"
import SideContainer from "@/components/SideContainer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import CareerHistory from "@/components/CareerHistory"
import EducationHistory from "@/components/EducationHistory"

const HomePage = () => {
  return (
    <div className="h-auto w-full flex items-center justify-center flex-col">
      <Head>
        <title>Work history | Jon Nicholson</title>
      </Head>
      <Header />
      <div className="h-auto xs:w-[90%] md:w-[600px] flex items-start justify-centerxx flex-col my-[50px]">
        <Hero />
        <CareerHistory />
        <EducationHistory />
      </div>
    
    </div>
  )
}

export default HomePage


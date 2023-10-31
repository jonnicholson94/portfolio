
import Head from "next/head"

import Card from "@/components/Card"
import Info from "@/components/Info"
import MainContainer from "@/components/MainContainer"
import SideContainer from "@/components/SideContainer"

const HomePage = () => {
  return (
    <>
    <Head>
      <title>Portfolio | Jon Nicholson</title>
    </Head>
    <div className="h-auto w-full flex xxs:flex-col md:flex-row items-center justify-center">
        <SideContainer>
          <Info />
        </SideContainer>
        
        <MainContainer>
          <Card bg="bg-salmon" title="CraftedCopy" description="An AI powered app, built using Next.js 14." viewLink="https://craftedcopy.app" githubLink="" />
          <Card bg="bg-blue" title="Emble" description="The frontend for Emble, built with Next.js and TypeScript." viewLink="https://emble.app" githubLink="https://github.com/jonnicholson94/emble-app" />
          <Card bg="bg-green" title="Emble server" description="Emble's server, written in Go and querying a Postgres instance." githubLink="https://github.com/jonnicholson94/emble-server" />
          <Card bg="bg-lilac" title="Kanby" description="A simple kanban board, built with Next.js and TypeScript." viewLink="https://kanby.vercel.app" githubLink="https://github.com/jonnicholson94/kanby-open" />
          <Card bg="bg-purple" title="Cron email" description="A Node.js app that schedules an cron job." githubLink="https://github.com/jonnicholson94/scheduled-crypto-prices" />
          <Card bg="bg-red" title="seo-scraper" description="A Python script, scraping the LOVESPACE website for SEO." githubLink="https://github.com/jonnicholson94/seo-scraper" />
          <Card bg="bg-salmon" title="blockpool" description="Querying an API for latest crypto prices, using React and Go." viewLink="https://blockpool.vercel.app/" githubLink="https://github.com/jonnicholson94/blockpool_web" />
        </MainContainer>
    </div>
    </>
  )
}

export default HomePage


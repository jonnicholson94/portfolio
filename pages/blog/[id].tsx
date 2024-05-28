
import Head from "next/head"
import type { InferGetStaticPropsType } from "next"

import { NotionRenderer } from "@notion-render/client"
import hljsPlugin from "@notion-render/hljs-plugin"
import Header from "@/components/Header"
import Link from "next/link"
import { Block } from "@notion-render/client/dist/types"
import { generateDate } from "@/_lib/generateDate"

export async function getStaticProps({ params }: { params: { id: string } }) {

    const { id } = params 

    const response = await fetch(`${process.env.BASE_CLIENT_URL}/api/fetchSinglePost?id=${id}`)

    const json: { title: string, created_date: string, blocks: Block[] } = await response.json()

    const renderer = new NotionRenderer()

    renderer.use(hljsPlugin({}))

    const html = await renderer.render(...json.blocks)

    return { props: { title: json.title, created_date: json.created_date, html: html }}

}

export async function getStaticPaths() {
    return {
      paths: [],
      fallback: true,
    };
  }

export default function BlogPost({ title, created_date, html }: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <>
        <Head>
            <title>{title ? title : "Blog"} | Jon Nicholson</title>
        </Head>
        <div className="h-auto w-full flex items-center justify-center flex-col">
            <div className="h-auto xs:w-[90%] md:w-[700px] mt-[50px] mb-[50px] flex flex-col items-start justify-center">
                <Link className="h-auto w-auto flex items-center justify-center" href="/blog">
                    <img className="h-[20px] w-[20px] mr-[7px]" src="/arrow-left.svg" alt="An arrow pointing left, to indicate a user can go backwards" />
                    Go back
                </Link>
                <h1 className="mt-[20px] h-auto w-full text-[48px] font-bold">{title}</h1>
                <p className="text-[#c9c9c9]">{generateDate(created_date)}</p>
            </div>
           <div className="h-auto xs:w-[90%] md:w-[700px] mb-[100px]" dangerouslySetInnerHTML={{ __html: html }}></div> 
        </div>
        </>
    )
}
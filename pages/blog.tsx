
import Head from "next/head";
import { generateDate } from "@/_lib/generateDate";
import Header from "@/components/Header";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";

export const getServerSideProps = async () => {

    const response = await fetch(`${process.env.BASE_CLIENT_URL}/api/fetchPosts`)

    const json = await response.json()

    return { props: { pages: json }}
}

export default function Blog({ pages }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <>
        <Head>
            <title>Blog | Jon Nicholson</title>
        </Head>
        <div className="h-auto w-full flex items-center justify-center flex-col">
            <Header />
            <div className="h-auto xs:w-[95%] md:w-[500px] mt-[50px]">
                { pages.length === 0 && <p className="text-center">No blog posts yet. Check back soon.</p>}
                { pages.map((page: any) => {
                    { /* TODO: Change type of response to ensure it has correct properties. Currently set to any. */ }
                    return (
                        <Link className="h-auto w-full flex items-center justify-center rounded-[6px] mb-[20px] p-[20px] border border-[#e9e9e9]" href={`/blog/${page.id}`} key={page.id}>
                            <div className="h-auto flex-grow flex items-start justify-center flex-col">
                                <h2 className="text-[24px] font-bold">{page.properties["Title"].title[0].plain_text}</h2>
                                <p className="text-[12px] text-[#c9c9c9] mt-[2.5px]">{generateDate(page.created_time)}</p>
                                <p className="mt-[10px]">{page.properties["Description"].rich_text[0].plain_text}</p>
                            </div>

                            <img className="h-[20px] w-[20px]" src="/chevron.svg" alt="A chevron to indicate a blog post can be opened" />

                        </Link>
                    )
                })}
            </div>
        </div>
        </>
    )
}
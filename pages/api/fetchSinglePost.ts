
import type { NextApiRequest, NextApiResponse } from "next"

import { Client } from "@notionhq/client"
import { BlockObjectRequest, PageObjectResponse, TitlePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { id } = req.query 

    if (!id) {
        return res.status(400).json("Please provide a page ID")
    }

    const blocks = await notion.blocks.children.list({ block_id: id as string })

    const pages = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE!,
        filter: {
            property: "Status",
            status: {
                "equals": "Published"
            }
        }
    })

    function isPageObjectResponse(
        page: any
    ): page is PageObjectResponse {
        return 'properties' in page && 'id' in page;
    }

    // Find the specific page by ID
    const singlePage = pages.results.find((p): p is PageObjectResponse => isPageObjectResponse(p) && p.id === id);

    if (!singlePage) {
        return res.status(404).json("Page not found");
    }

    // Type guard to check if the title property exists and is of the correct type
    function isTitleProperty(property: any): property is TitlePropertyItemObjectResponse {
        return property && property.type === 'title';
    }

    const titleProperty = singlePage.properties.Title;

    if (!isTitleProperty(titleProperty)) {
        return res.status(500).json("Invalid title property");
    }

    return res.status(200).json({
        title: titleProperty.title[0].plain_text || "No title",
        created_date: singlePage.created_time,
        blocks: blocks.results as BlockObjectRequest[]
    })

}
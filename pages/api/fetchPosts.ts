
import type { NextApiRequest, NextApiResponse } from "next"

import { Client } from "@notionhq/client"

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const pages = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE!,
        filter: {
            property: "Status",
            status: {
                "equals": "Published"
            }
        }
    })

    return res.status(200).json(pages.results)

}
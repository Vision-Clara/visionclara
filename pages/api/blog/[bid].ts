import { getAllBlogs, getOneBlog } from "@/lib/api/blog";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { bid } = JSON.parse(JSON.stringify(req.query));
      const data = await getOneBlog(bid);

      return res.status(200).json(data);
    } catch (e: any) {
      return res.status(500).json({
        error: e.toString(),
      });
    }
  } else {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

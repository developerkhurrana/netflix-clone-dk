import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const {
        currentUser 
    } = await  serverAuth(req);
    // If user is authenticated send the user data otherwise send a message that the user needs to log in.
    return res.status(200).json(currentUser)
  } catch (error) {
    return res.status(400).end();
  }
}

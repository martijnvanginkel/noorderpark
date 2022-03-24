// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import contentful from 'contentful'



type Data = {
	id: string
	title: string
	content: string
	comments: string[]
}

// new PrismaClient()


// const client = contentful.createClient({
// 	space: 'to0ezlabe26l',
// 	accessToken: 'tCAPQQj2N9EQ5xHZi3Rue3wnp1uob_Zec1xj63AmEEg',
// });


export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { id } = req.query

	res.status(200).json({ id: id.toString(), title: 'Leuk dat jij de anderhalvemeterbank leuk vindt!', content: '', comments: [] })
}

  

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	id: string
	title: string
	content: string
	comments: string[]
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { id } = req.query

	console.log('here')

	res.status(200).json({ id: id.toString(), title: 'this is a title', content: 'this is some content', comments: [] })
}

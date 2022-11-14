const { events } = require('./data.json')
import type { NextApiRequest, NextApiResponse } from 'next'
// eslint-disable-next-line import/no-anonymous-default-export
export default (req:NextApiRequest, res:NextApiResponse) => {
  const evt = events.filter((ev:any) => ev.slug === req.query.slug)

  if (req.method === 'GET') {
    res.status(200).json(evt)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}

import { Client } from 'pg'

const connectionString = process.env.DBCONNECTION

export default async (query, values = []) => {
  const client = new Client({ connectionString })
  client.connect()
  return await client.query(query, values)
    .finally(() => client.end())
}

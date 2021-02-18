
import query from './query'

export async function createUser () {
  return await query('insert into users (deleted) values (null) returning *')
}

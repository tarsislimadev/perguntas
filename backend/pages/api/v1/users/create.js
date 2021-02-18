
import end from '../../../../utils/end'
import { createUser } from '../../../../data/queries'

export default (req, res) => {
  end([], req, res, async () => createUser())
}

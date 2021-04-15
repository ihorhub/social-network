const { passwordHasher } = require('../helpers')

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.findUsers(req.query)

      res.json(users)
    } catch (e) {
      res.status(418).json(e.message)
    }
  },

  getSingleUser: async (req, res) => {
    try {
      const { userId } = req.params

      const user = await userService.findUserById(userId)

      res.json(user)
    } catch (e) {
      res.json(e.message)
    }
  },

  createUser: async (req, res) => {
    try {
      const { password } = req.body

      const hasPassword = await passwordHasher.hash(password)

      await userService.createUser({ ...req.body, password: hasPassword })

      res.status(201).json('USERS IS CREATED')
    } catch (e) {
      res.json(e.message)
    }
  },
}

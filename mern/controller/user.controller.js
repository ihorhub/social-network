module.exports = {
  getAllUsers: (req, res) => {
    res.json('hello fro controller')
  },
  getSingleUser: (req, res) => {
    res.json(req.params)
  },

  createUser: (req, res) => {
    res.json('user is created')
  },
}

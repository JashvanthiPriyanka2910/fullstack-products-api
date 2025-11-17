function handleError(err, req, res, next) {
  console.error(err)
  res.status(500).json({ error: err.message })
}

function notFound(req, res, next) {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
}

module.exports = {
  handleError,
  notFound
}

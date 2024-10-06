const middleware = {}

const requestTime = (req, _ , next) => {
    console.log({ url: req.url , fechaHora: new Date() })
    next()
}
middleware.requestTime = requestTime

module.exports = middleware
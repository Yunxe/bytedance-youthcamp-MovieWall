const CORS = (req, res, next) => {
    res.set({
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
      //'Access-Control-Expose-Headers': 'Authorization',
    })
    if (req.method === 'OPTIONS') {
      // 预请求快速结束
      return res.status(200).end()
    }
    next()
  }
  
module.exports = CORS
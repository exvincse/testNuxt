const middleware = {}

middleware['auth'] = require('..\\client\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

export default middleware

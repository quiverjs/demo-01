import 'quiver-core/traceur'

import path from 'path'
import { startServer } from 'quiver-core/http'

var step = process.argv[2] || '01'

console.log('Running demo', step)

var subdir = path.join(__dirname, step)
var configPath = path.join(subdir, 'config')
var componentPath = path.join(subdir, 'component')

var { config } = require(configPath)
var { main } = require(componentPath)

startServer(main, config)
.then(server => {
  console.log('Demo server running at port 8080...')
})
.catch(err => {
  console.log('error starting server:', err.stack)
})
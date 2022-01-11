const fallback = require('express-history-api-fallback')
const express = require('express')
const { join } = require('path')

const PORT = process.env.PORT || 3000

const app = express()
const root = join(__dirname, 'dist')
app.use(express.static(root))
app.use(fallback('index.html', { root }))
app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`)
})

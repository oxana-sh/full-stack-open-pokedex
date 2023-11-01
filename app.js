const express = require('express')
const app = express()

// Порт задается переменной окружения PORT, если она установлена, или 5000 по умолчанию
const PORT = process.env.PORT || 8080
// Хост задается переменной окружения HOST, если она установлена, или "localhost" по умолчанию
const HOST = process.env.HOST || '127.0.0.1'

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`Server started at http://${HOST}:${PORT}`)
})
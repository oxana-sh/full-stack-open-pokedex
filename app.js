const express = require('express')
const app = express()

// Порт задается переменной окружения PORT, если она установлена, или 5000 по умолчанию
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  res.status(200).send('ok')
})

app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
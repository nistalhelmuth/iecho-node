const express = require('express')
const app = express()
const port = 8000

const revertString = (text) => text.split('').reverse().join('')

app.get('/iecho', (req, res) => {
  const text = req.query.text
  if (text) {
    const textConverted = revertString(text)
    res.json({
      text: textConverted,
      palindrome: text === textConverted
    })
  } else {
    res.status(400)
    res.json({ error: 'no text' })
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = Object.freeze({
  revertString
})

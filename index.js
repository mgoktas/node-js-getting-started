const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, '/'))
  .set('view engine', 'ejs')
  .get('/.well-known/apple-app-site-association', (req, res) => res.render('.well-known/apple-app-site-association'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

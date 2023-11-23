const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5001

express()
app.use('/static', express.static(path.join(__dirname, '/')))
  .use("/.well-known/apple-app-site-association", function (req, res) {
  console.log(__dirname)
  console.log(__filename)
  res.sendFile(path.join(__dirname, "", ".well-known/apple-app-site-association"))
  } )
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

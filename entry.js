const express  = require('express')
const fs       = require('fs')
const path     = require('path')
const bundle   = fs.readFileSync(path.join(__dirname, './dist/server.js'), 'utf8')
const renderer = require('vue-server-renderer').createBundleRenderer(bundle)
const index    = fs.readFileSync(path.join(__dirname, './index.html'), 'utf8')
const app      = express()

app.use('/dist', express.static(path.join(__dirname, './dist')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

app.get('*', (req, res) => {
   renderer.renderToString({}, (err, html) => {
		if (err) {
			console.log(err)
			return res.sendStatus(500)
		}
		res.send(index.replace('<div id=app></div>', html))
	})
})

app.listen(3000, () => console.log("listening on port 3000") )

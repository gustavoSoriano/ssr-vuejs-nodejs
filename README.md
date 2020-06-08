# Server side rendering with Vuejs and Node.js
Implementation of vue-server-renderer with Node.js and vuejs

### Development
```
  npm run dev
```

### Build without  server side rendering
```
  npm run build
```

### Build with node and server side rendering
```
  npm run build-server
```
  
### In production
```
  npm start
```

### vue-server-renderer implementation
```js
app.get('*', (req, res) => {
   renderer.renderToString({}, (err, html) => {
		if (err) {
			return res.sendStatus(500)
		}
		res.send(index.replace('<div id=app></div>', html))
	})
})
```


## Contribution

All contributions are welcome just open a pull request and explain what you did :D

const { exec } = require('child_process')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const host = '0.0.0.0'

app.use(express.json()) // to support JSON-encoded bodies
app.use(cors())
app.post('/api', (req, res) => {
  exec(
    `git add . && git commit -m "fix(dev-portal): changes made by: ${req.body.name}, description: ${req.body.description}" && git push origin fix/dev-portal/content-edit --force`.toLowerCase(),
    (error, stdout, stderr) => {
      if (error) {
        return res.status(406).send(error)
      }
      if (stderr) {
        return res.status(406).send({ message: stderr })
      }

      res.send({ message: stdout })
    }
  )
})

app.get('/api', (_, res) => {
  res.send('API Functional')
})

app.listen(port, host, () => {
  console.log(`Change API listening at http://${host}:${port}`)
})

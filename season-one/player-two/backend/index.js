const express = require('express')
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

const app = express()
const port = 3001

app.use(express.json())

app.get('/blogs', (req, res) => client.search({
    index: 'blogs',
    body: {
      query: {
        match_all: {}
      }
    }
  })
  .then((data) => res.json(data.body.hits.hits.map((doc) => ({ title: doc._source.title, description: doc._source.description }))))
)

app.post('/blogs', (req, res) => {
  client.index({
    index: 'blogs',
    body: {
      title: req.body.title, description: req.body.description
    }
  })
    .then((data) => res.json(data.body))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const express = require('express')
const cors = require('cors')
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/blogs', (req, res) => client.search({
    index: 'blogs',
    body: {
      query: {
        match_all: {}
      }
    }
  })
  .then((data) => res.json(data.body.hits.hits.map((doc) => ({ id: doc._id, title: doc._source.title, description: doc._source.description }))))
);

app.get('/blogs/:id', (req, res) => client.get({
    index: 'blogs',
    id: req.params.id,
  })
  .then((data) => res.json({ title: data.body._source.title, description: data.body._source.description }))
);

app.post('/blogs', (req, res) => {
  client.index({
    index: 'blogs',
    body: {
      title: req.body.title, description: req.body.description
    }
  })
    .then((data) => res.json(data.body))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

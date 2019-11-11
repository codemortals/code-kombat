const express = require('express')
const cors = require('cors')
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })
const faker = require('faker');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/fake', (req, res) => client.index({
  index: 'blogs',
  body: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.words(),
    description: faker.lorem.paragraphs(3),
    image: faker.image.avatar(),
    image2: faker.image.animals(),
  }
})
  .then((data) => res.json(data.body))
);

app.get('/blogs', (req, res) => client.search({
    index: 'blogs',
    body: {
      query: {
        match_all: {}
      }
    }
  })
  .then((data) => res.json(data.body.hits.hits.map((doc) => (
    {
      id: doc._id,
      title: doc._source.title,
      subtitle: doc._source.subtitle,
      description: doc._source.description,
      image: doc._source.image,
      image2: doc._source.image2
    }))))
);

app.get('/blogs/:id', (req, res) => client.get({
    index: 'blogs',
    id: req.params.id,
  })
  .then((data) => res.json({
    title: data.body._source.title,
    subtitle: data.body._source.subtitle,
    description: data.body._source.description,
    image: data.body._source.image,
    image2: data.body._source.image2,
  }))
);

app.post('/blogs', (req, res) => {
  client.index({
    index: 'blogs',
    body: {
      title: req.body.title,
      subtitle: req.body.subtitle,
      description: req.body.description,
      image: req.body.image,
      image2: req.body.image2,
    }
  })
    .then((data) => res.json(data.body))
});

app.patch('/blogs/:id', (req, res) => {
  client.update({
    id: req.params.id,
    // type: '_doc',
    index: 'blogs',
    body: {
      title: req.body.title, description: req.body.description, image: req.body.image
    }
  })
    .then((data) => res.json(data.body))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

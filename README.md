<h2 align="center"> Strapi Backend </h2>

<h3>Description</h3>
<p>Strapi is great fit for this project. It is a simple and easy to use backend for creating and managing content. It is a great choice for a Blog/e-commerce and anything you can imagine that deals with a lot of content. </p>

<p>In this project I mainly use one route that is the <code>/articles</code> route. This route is used to get all the posts.</p>
<p>Strapi has a great support for GraphQL hence, I used Apollo Client to connect to the Strapi backend. </p>

```js
// example rotes
{
      "method": "GET",
      "path": "/articles",
      "handler": "article.find",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/articles/count",
      "handler": "article.count",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/articles/:id",
      "handler": "article.findOne",
      "config": {
        "policies": []
      }
    },
    {
      "method": "POST",
      "path": "/articles",
      "handler": "article.create",
      "config": {
        "policies": []
      }
    },
    {
      "method": "PUT",
      "path": "/articles/:id",
      "handler": "article.update",
      "config": {
        "policies": []
      }
    },
    {
      "method": "DELETE",
      "path": "/articles/:id",
      "handler": "article.delete",
      "config": {
        "policies": []
      }
```

<p> The content on the frontend is rendered using React and the content is fetched from the backend using Apollo Client. </p>

> Note: The data on the back-end is not precistance. It is just a demo, and stored in SQL Lite database. Similarly the imaged are not precistance. They are just stored in the upload folder.

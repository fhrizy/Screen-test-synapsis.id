This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/](http://localhost:3000/api/). This endpoint can be edited in `pages/api/index.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## mongoDB config

if you use mongoDB you can create a file in the application with the name `next.config.js`. You can save it anywhere and with any name.

```bash
module.exports = {
  env: {
    MONGO_URI:
      "mongodb+srv://<username>:<pasasword>@learning.dxyen.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};
```
  
*if you install the entire next.js application package, then the `next.config.js` file should already be available.

as for the file containing the connection between mongoDB and node.js in `utils/dbConnect.js`.

then for the query schema used in this application, you can see it in `models/cruds.js`.

## Data Fetching

there are 2 data fetching used, namely [axios]axios and [fetch]fetch.

example to retrieve the `entire data collection` using [fetch]fetch :
```bash
  const res = await fetch(`http://localhost:3000/api/?page=${page}`);
  const data = await res.json();
  
  return {
    props: {
      allData: data.data,
      page: +page,
    },
  };
```

example to retrieve more specific data such as user id for `edit` the user using [axios]axios :
```bash
  axios.get(`http://localhost:3000/api/${Id}`).then((res) => {/* your response */}
```

example to retrieve more specific data such as user id for `delete` the user using [axios]axios :
```bash
  axios.delete(`http://localhost:3000/api/${_id}`);
```

example to add data using [axios]axios:
```bash
  axios.post("http://localhost:3000/api/", {/* your response */}
```

example to update data using [axios]axios:
```bash
  axios.put(`http://localhost:3000/api/${userId}`, {/* your response */}
```

*this application uses [axios]axios more in doing data fetching.
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# PinPoint

## Optimal Storage and Retrieval for Pincode Serviceability

Hosted on Google Cloud &mdash; [_Website Link_]()

PinPoint is an application developed to solve the problem of pincode serviceability for products on the [ONDC](https://ondc.org/) website.

Using the _seller apps_, merchants are able to define the products & services they can deliver, as well as the pincodes to which they can deliver them.

On the side of _buyer app_, to check if a product can be delivered to their location by any of the merchants, the user enters their pincode.
Considering there are more than _30K_ pincodes and at least _100 million_ merchants (of which about _10%_ may enable pincode based serviceability), we want the verification to be real-time.

Our solution for this problem can be summarized as follows:

- For storing data at-scale, we use a document-based NoSQL Database ([MongoDB](https://www.mongodb.com/), hosted at Google Cloud) as our `primary DB`. This is used to store the majority of data relating to products, merchants, prices, etc.
- For making fast queries, and accessing frequently-used data, we store a mapping of merchant to set of serviceable pincodes in ([Redis](https://redis.io/), hosted at Google Cloud), as our `secondary DB`. This is used to check if a particular merchant services a given pincode.
- We create a simple API using [Express](https://expressjs.com/) to serve the data and interact with our 2 databases using `POST` and `GET` methods.
- When a user opens the ecommerce page for any product, product details are fetched from primary DB and stored in client-side, which includes the list of merchants that deliver that product.
- Once the user enters their pincode to check the serviceability, the list of merchants is traversed, and a query is made to see if the merchant sells the product from secondary DB or cache.
- If there is a match, the merchant is displayed to the user along with the price quote.

## Demo

Video Demo and PPT Link.

## Optimizations

We have used Redis (or any main memory caching mechanism) for making the query fast.

1. First
2. Second
3. Third

## API Reference

[API Documentation](/server/index.html)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`

`REDIS_HOST`

`REDIS_PORT`

`REDIS_USER`

`REDIS_PASSWORD`

## Authors

- [@DJcodess](https://github.com/DJcodess)
- [@Vasu1712](https://github.com/Vasu1712)
- [@abhishekghosh-in](https://github.com/abhishekghosh-in)
- [@abhinavprakash-2000](https://github.com/abhinavprakash-2000)

This project was developed towards our submission in the Build for Bharat [Hackathon](https://hack2skill.com/build-for-bharat-hackathon-ondc-google-cloud)

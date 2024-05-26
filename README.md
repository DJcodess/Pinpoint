# PinPoint

## Optimal Storage and Retrieval for Pincode Serviceability

Deployed on Google Cloud &mdash; [_Website Link_](https://pinpointgcp.df.r.appspot.com)

**PinPoint** is an application developed to solve the problem of pincode serviceability for products on the [ONDC](https://ondc.org/) website.

Using the _seller apps_, merchants are able to define the products & services they can deliver, as well as the pincodes to which they can deliver them.

On the side of _buyer app_, to check if a product can be delivered to their location by any of the merchants, the user enters their pincode.
Considering there are more than _30K_ pincodes and at least _100 million_ merchants (of which about _10%_ may enable pincode based serviceability), we want the verification to be real-time.

## Our Solution

Our solution for this problem can be summarized as follows:

- For storing data at-scale, we use a document-based NoSQL Database ([MongoDB](https://www.mongodb.com/), hosted at Google Cloud) as our `primary DB`. This is used to store the majority of data relating to products, merchants, price quotes, etc.
- For making fast queries, and accessing frequently-used data, we store a mapping of "merchant-ID" to "set of serviceable pincodes" in ([Redis](https://redis.io/), hosted at Google Cloud), as our `secondary DB` or in-memory storage. This is used to check if a particular merchant services the given user pincode.
- We create a simple [API](https://api-dot-pinpointgcp.df.r.appspot.com) using [Express](https://expressjs.com/) to serve the data and interact with our 2 databases using `POST` and `GET` methods.
- When a user opens the e-commerce page for any product, the product details are fetched from primary DB and stored in client-side, which includes the list of merchant-IDs, for each merchant that delivers the product.
- Once the user enters their pincode to check the serviceability in their region, the list of merchant-IDs is traversed, and the in-memory `secondary DB` is queried to see if the merchant delivers to that pincode in constant `O(1)` time, concurrently for each merchant.
- If there is a pincode match, the merchant details are displayed to the user along with the price quoted by them, by making a final query to `primary DB`, where appropriate indexes have been created to make the queries even faster.
- The system is designed to work well with scale, as more merchants are added in the ONDC database.

![Pinpoint Realtime Query Workflow](/server/images/Pinpoint_workflow.png)

## Optimizations

1. We have used Redis (or any main memory caching mechanism) for making the real-time pincode query fast, as Redis set offers `O(1) set lookup`.

2. To fetch product details quickly, we pull the set of merchantIds that deliver the product on page-click, instead of doing it during the pincode query. The `productId` value has been indexed, to further decrease the query time on page component load.

3. For each *real-time pincode query* by user, the membership of the pincode in the Redis set is checked for each merchantId `concurrently`, which significantly reduces latency, and is designed to scale well.

4. `Indexing` is used to further reduce the time for displaying serviceable merchant details. Here, *merchantId* is indexed for the merchant details, whereas a combination of *merchantId-productId* has been indexed, to fetch and display the quoted pricing.

All these optimizations have been made to improve the user experience.

![Pinpoint Stack Architecture](/server/images/Pinpoint_stack_architecture.png)

## Demo

Demo Video on YouTube:

[![Watch the video](https://img.youtube.com/vi/5ZxIyJHNei8/0.jpg)](https://www.youtube.com/watch?v=SRinIlxBpC0&ab_channel=DhruvJain)

## API Reference

[API Documentation](https://api-dot-pinpointgcp.df.r.appspot.com) &mdash; Deployed on Google Cloud

[Raw Link](/server/index.html)

## Steps to run locally

1. Clone the repository:
```
git clone https://github.com/DJcodess/Pinpoint.git
```

2. Install the required dependencies for both `/server` and `/client` individually.
```
cd server
npm install
cd ../client
npm install
```

3. Configure the environment variables. Start the Express server by running `/server/server.js` in Node.

4. Run the React development server in `/client`.
```
npm start
```

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

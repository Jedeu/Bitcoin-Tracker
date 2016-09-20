### Full Stack Coding Challenge

Your mission, should you choose to accept it, is to build a simple but attractive Bitcoin Dashboard that automatically keeps up-to-date with the latest prices. Your dashboard should display the latest price of Bitcoin in Canadian dollars, US dollars and Chilean pesos and include a timestamp indicating when the price was retrieved.

Since the dashboard needs to be viewed at any point of the day, it should be viewable from any device. Though, for this exercise, we will accept that it is responsive enough to work on a modern browser at different window widths.

While it would be feasible to build a fully client-side application to solve this problem, for this challenge we would like you to build a dedicated backend that can scale to a large number of clients while minimizing the traffic to the upstream data source. Our backend preference is [Express](http://expressjs.com/) or [Koa](http://koajs.com/) on [Node.js](http://nodejs.org/).

The client page should get its data exclusively from the backend you create, with a single endpoint that uses the following JSON format to return its data:

```javascript
{
  CAD:  float,
  USD:  float,
  CLP:  float,
  time: date
}
```

The backend should read the latest BTC price from these endpoints ([more info](https://bitcoinaverage.com/api.htm)):

- https://api.bitcoinaverage.com/ticker/global/CAD/last
- https://api.bitcoinaverage.com/ticker/global/USD/last
- https://api.bitcoinaverage.com/ticker/global/CLP/last

Your application should be designed such that there is no more than one call to each BitcoinAverage endpoint every minute, regardless of the number of clients active. At the same time, the front end should be written such that prices are no more than 15 seconds behind the server updates.

Please commit regularly so we can follow along; branching is not be required. Check out, and fill out the first half of, the `QnA.md` and provide a `README.md` file with instructions required to build, run, and test your app.

Hints:
- There isn't a single correct approach, we want to see your process and your results.
- *Before you start*, please read and complete the first half of `QnA.md`. Complete the second half before submitting your project.
- Don't bite off more than you can chew! A very simple app with a solid architecture will impress us more than a pile of complex code.
- We anticipate that this problem should take no more than 6 hours, assuming you know Node and are comfortable with JavaScript. Please don't commit more than ten hours, find balance in all things :)
- The focus of this assignment is on your code, but don't ignore the UI. We will be looking specifically for maintainable coding practices and structure coupled with an attractive presentation. We have attached a simple sample wireframe that you can use as a template.

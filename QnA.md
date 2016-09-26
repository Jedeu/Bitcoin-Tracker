> What do you think are the greatest risk areas in completing this project?

- Data-rendering methodology as the project scales. If you are using a framework like Angular to do a constant watch of elements, the app will become sluggish as the number of elements grows.

- Reliance on a 3rd-Party API. This dashboard's biggest purpose is to provide data that is called from another source. If that API stops working then your whole app breaks.

- You would also have to watch out for making an excessive amount of calls to the API, which can result in having your app or the user's IP banned.

> What changes/additions would you make to the BitcoinAverage API if you were able to influence its design?

- Add pagination to make it easier for users of the API to comb through data

- HTTP caching to reduce the number of calls to the server and improve performance (if it doesn't already)

- Rate limiting  (if it doesn't already)

> List a two or three features that you would consider implementing in the future that would add significant value to this project.

- Give users the ability to click on a particular fiat currency and view a graph to see trends in price fluctuation.

- Give users the ability to customize the dashboard to add or remove fiat currencies

- Add information such as last price, ask price, and provide tool-tips or a legend to explain particular jargon for better experience.

> How long did this assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Angular", "Coding", "Debugging").

- Between 8-9 hours:
  
  - 3 hours learning Node Express, Web Sockets, RethinkDB

  - 4 hours debugging

  - 1-2 hours doing front-end and UI

> What was the hardest part?

- Getting web sockets to work. It was the most crucial part for real-time updating yet the hardest to understand. A lot of context-switching among RethinkDB, sockets, and Express made it pretty difficult.

> If you could go back and give yourself advice at the beginning of the project, what would it be?

- Play around with Node Express more before you start.

> Did you learn anything new?

- Lots! I learned a lot about the important things to consider when scaling projects.

- I learned how to use RethinkDB to insert and update any changes to the DB

- I learned how to set up web sockets and emit real-time data from the server to the client.

- I learned a lot about Express

> Do you feel that this assignment allowed you to showcase your abilities effectively?

- Having done mostly front-end at my work right now, I think I ended up spending too much time trying to work on the back-end since I was rusty. I wish I had more time to spend on the UI and installing proper tools for the front-end (I didn't use any framework or library; just vanilla JS).

> Are there any significant web development-related skills that you possess that weren't demonstrated in this excercise? If so, what are they?

- I love writing Unit Tests and TDD! It's very helpful in planning out your application logic and finding any bugs while you make changes to existing code. I've run into too many times where a colleague would change and ship code that broke other parts, which could have been avoided by writing and running a test suite.

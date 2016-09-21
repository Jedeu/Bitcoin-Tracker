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

-- Add information such as last price, ask price, and provide tool-tips or a legend to explain particular jargon for better experience.

> How long did this assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Angular", "Coding", "Debugging").

-

> What was the hardest part?

-

> If you could go back and give yourself advice at the beginning of the project, what would it be?

-

> Did you learn anything new?

-

> Do you feel that this assignment allowed you to showcase your abilities effectively?

-

> Are there any significant web development-related skills that you possess that weren't demonstrated in this excercise? If so, what are they?

-

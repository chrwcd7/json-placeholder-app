# JsonPlaceholderApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

It demonstrates a simple use of [JsonPlaceholder API](https://jsonplaceholder.typicode.com).

# Run instructions

In order to run it, you need to download the project, then install [Node.js](https://nodejs.org/).

To install the Angular CLI, open a terminal window and run the following command: `npm install -g @angular/cli`

Then cd into the project folder and run `npm install`

Lastly, run `ng serve --open` and your browser will be automatically opened to [localhost](http://localhost:4200/).

# Answers to generic questions 
* We use JWTs a lot throughout our API. For instance, when a  user logs in on our API, a
  JWT is issued and our web-application uses this token for every request for
  authentication. Why is it (or isn't it) safe to use this?
  
  Using a JWT is generally safe, however not invincible to attacks. For example, if a client's computer is compromised, then the JWT token stored in the browser could be stolen. A possible solution to this would be to make the JWT expire after a short time. Another issue could be the JWT interception over the network, but this is easily solved by sending the token only over HTTPS.

* In our web-application, messages sent from one user to      another, can contain HTML,
which poses some security risks. Describe two attack vectors bad actors might try to
abuse? And how would you mitigate these vectors?

  Bad actors might try to abuse `href` or `src` attributes in order to inject scripts into the HTML. To mitigate these vectors the HTML should be purified before being displayed on the page, so that all potentially malicious code is removed.
 

* Explain the difference between mutable and immutable objects.

  Mutable objects are those that can have their state modified after creation. Immutable objects on the other hand cannot be changed after creation.

  * What is an example of an immutable object in JavaScript?
    
    All primitive values in JavaScript are immutable, for example a string or a number.

  * What are the pros and cons of immutability?

    There are several pros and cons of immutability, for example programs that use immutable objects are easier to understand, since there is no added overhead about how the data might change over time.
    A disadvantage would be that immutability might have an impact on performance, because of all the memory allocation that is needed for creating new objects instead of altering the current ones.
  * How can you achieve immutability in your own code?

    One example would be by using array methods like `map` and `filter` that return a new array each time instead of modifying the existing one.

* If you would have to speed up the loading of our current web-application, how would you
do that? (no need to actually do it, just describe the steps you would take)

  In order to speed up the loading of a web application, I would use asynchronous loading of JavaScript and CSS files so that the browser doesn't get stuck loading only one file and I would also enable browser caching, so that the loading for returning users is much faster.

* What part of a new job do you think is more important:
  * Choose your own hardware, but work with a company supplied operating system
image.
  * You're offered a standard piece of mediocre hardware. Free to pick your own
software.

  In my opinion, the second option is preferable, because I believe that developers should be free to pick their own software, provided there are no limitations in the programming tools.

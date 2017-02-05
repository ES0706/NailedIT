# NailedIT
Exercise - Application Developer<br></br>
While reading the exercise, I tried to focus on simplicity. My initial thought was to create toolbar on top of the page, 
to make it convenient for user who needs to view the customer data. While doing so, I came up with the idea to make the toolbar 
position fixed on screen, which would help, if there was a lot of data about the customers. It would be an easy solution, but 
hence there was only a little bit of data, it wasn't necessary. I also included left toolbar, for aditional functions, if there were any needed. I used the left tool bar only for viewing total amount of money.
While coding I used HTML, css, javascript and jQuery. I also included Bootstrap in HTML, if I wanted to make the site better looking but I have only used it for drop downs.
To make the site and li elements interactive I added functions to each one of them and then used the jQuerry functions hide() and show(), to cycle data, so that I didn't have to create links to other pages.
I also included the whole array of JSON data in javascript, since there wasn't that much data and for it to be faster and not cause trouble. After that I converted JSON to javascript array, so that I could use it efficiently with cycles.
In order to list the data of JSON I used HTML element table, which I used in javascript, for specific needs. I used cycle for, in order to get the data out of array.
During the time I did that, I noticed, that balance numbers were written with commas and I needed them with dots, so that I could convert them into float numbers javascript could use. I created a function with parameter, which the user could specify and would point to the exact index of the person of which I would need to convert the balance. Function then replaced commas with dots and returned float value. I used the function in situations, where I needed to work with balance numbers.<br></br>
My aditional ideas<br></br>
When doing the exercise I thought about implementing search bar, that way it would be easier for the person to view specific data he/she needs, if there was a lot of data. I skipped this idea in the end, since it wasn't necesarry. Other ideas included customer analysis, which could be based on social media behavior, interests, user data and metadata. That way he/she could make them offers, which they would be more likely to accept.


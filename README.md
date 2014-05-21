Finance Tracker
===============

The finance tracker is a small web application which tracks different finances (groceries, eating out, housing, etc.) and allows the user to enter information into those trackers, saving the data. The different trackers are also saved. When viewing a tracker, a chart is displayed using the points that were previously saved.
This webapp uses [AngularJS](http://angularjs.org/) as an MVC framework, the [ChartJS](http://chartjs.devexpress.com/) library to render the graphs, and [Mongodb](http://www.mongodb.org/) as a database with [Mongoose](http://mongoosejs.com/) as an object modeling framework for the database.

## To Run:
After downloading the source, install all the dependencies with:

`npm install`

After that runs successfully (you may need to install Mongodb yourself), you can run the application by:

1. first running the database with the command:
`mongod`
2. then running the application with:
`node server.js`

from the root of the directory. To visit the page, go to [http://localhost:8081](http://localhost:8081)

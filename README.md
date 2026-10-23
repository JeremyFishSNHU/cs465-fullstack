# CS 465 Full Stack Development – Travlr Getaways

## Project Overview

Throughout CS 465, I developed a full stack web application for **Travlr Getaways**, a travel website that includes both a customer-facing website and an administrative interface. This project gave me hands-on experience working with the different layers of a full stack application and helped me understand how frontend development, backend development, databases, APIs, and security all work together.

Throughout the course, I worked with technologies including Node.js, Express, JavaScript, Handlebars, Angular, MongoDB, RESTful APIs, JSON, and authentication. I started with a basic customer-facing website and gradually developed it into a complete full stack application with dynamic content, database connectivity, an administrative single-page application, and secure authentication.

## Architecture

### Frontend Development

Throughout the Travlr Getaways project, I used several approaches to frontend development, including Express with HTML/Handlebars, JavaScript, and an Angular single-page application (SPA). Although these technologies all contributed to the user experience, they served different purposes.

The customer-facing portion of Travlr Getaways used a more traditional server-rendered approach. Express worked with Handlebars templates to organize and dynamically generate pages. Instead of maintaining separate HTML pages containing repeated content, layouts and partials could be used for shared elements. Express handled incoming requests, controllers handled application logic, and the appropriate views were rendered for the customer.

JavaScript was used throughout both the frontend and backend. Node.js allowed JavaScript to run on the server, while Express used JavaScript for routes, controllers, middleware, and API functionality. Using JavaScript across multiple parts of the application helped create a more consistent development environment.

The administrative side of Travlr Getaways used an Angular SPA. Unlike the traditional customer-facing site, the SPA could dynamically update portions of the interface without reloading an entirely new page after every interaction. Angular also used reusable components, which helped organize the administrative interface into smaller and more manageable pieces.

Working with both approaches taught me that different frontend architectures can be useful for different purposes. The server-rendered customer site was effective for presenting travel information, while the Angular SPA provided a more interactive experience for administrative functions.

### Why MongoDB Was Used

The backend used MongoDB, which is a NoSQL database. MongoDB was a good fit for this application because it stores information as flexible documents rather than requiring all information to be organized into traditional relational tables.

MongoDB also works well with a JavaScript-based technology stack. Its document structure is similar to the JSON objects used throughout the application, making it easier to move information between MongoDB, the Node.js and Express backend, the REST API, and the Angular frontend.

The flexible document structure was useful for storing travel information such as trip codes, names, resorts, descriptions, dates, and prices. MongoDB also allowed the application to perform the CRUD operations needed to create, retrieve, update, and manage application data.

## Functionality

### JSON and JavaScript

Although JSON and JavaScript have similar syntax, they serve different purposes. JavaScript is a programming language that can contain variables, functions, conditions, loops, objects, and other application logic. JSON, or JavaScript Object Notation, is primarily a data format used to represent and exchange information.

JSON helped connect the frontend and backend of Travlr Getaways. For example, the Angular administrative application could send a request to an API endpoint. The Express and Node.js backend could process that request, interact with MongoDB, and return information in JSON format. Angular could then use that data to update what was displayed to the administrator.

This helped me understand how APIs connect the different layers of a full stack application. The frontend does not need to directly access or understand how MongoDB stores its information. Instead, it communicates with the backend through API endpoints and receives the information it needs in a predictable format.

### Refactoring and Reusable UI Components

Refactoring was an important part of developing Travlr Getaways. As the project became more complex, I reorganized portions of the code to make the application easier to maintain and expand.

One example was converting the original static customer-facing pages into an MVC-style structure using Express and Handlebars. Instead of repeating common HTML across several pages, reusable layouts and partials could be created for shared portions of the interface. This reduced duplicate code and made future changes easier.

Separating routes, controllers, and views also improved the organization of the project. Routes could determine where requests should go, controllers could handle the application logic, and views could focus on displaying information to the user.

The Angular SPA provided another example of reusable development through components. Breaking the administrative interface into components made the code easier to understand because each component could focus on a specific responsibility.

Reusable UI components provide several benefits, including reducing duplicate code, improving consistency, simplifying maintenance, and making applications easier to expand. If a shared component needs to be changed, it can be updated once instead of changing similar code in several locations.

## Testing

Testing a full stack application taught me that it is important to test more than what appears on the screen. Each layer of the application must communicate correctly with the other layers.

An **endpoint** represents a location in the API where a client can request or modify a particular resource. HTTP methods describe what type of action should occur. GET requests are commonly used to retrieve information, POST requests can create information, PUT requests can update existing information, and DELETE requests can remove information.

Testing these methods and endpoints was important because a frontend interface could appear correct while communication with the backend was not working correctly. During development, I needed to verify that requests were reaching the correct endpoints, that the server processed them correctly, and that the expected data and status responses were returned.

Testing became more complicated after security was added. Administrative functionality should not be available to every visitor, so authentication added another layer that needed to be verified. A valid administrator should be able to authenticate and access protected functionality, while invalid credentials and unauthorized requests should be rejected.

The final authentication work helped me better understand the difference between simply creating a functional API and creating one that is appropriate for a real application. A request may use the correct endpoint and HTTP method, but the server must also determine whether the user is authorized to perform the requested action.

This experience showed me why security and testing should be considered throughout full stack development rather than being treated as final additions after an application has already been built.

## Reflection

CS 465 has helped me move closer to my professional goals by giving me practical experience building a complete full stack application rather than focusing on only one area of development. Before this course, I had experience with several programming concepts individually, but this project helped me better understand how the different parts of an application work together.

One of the most important skills I developed was understanding full stack architecture. I gained experience with frontend development, server-side programming, databases, APIs, authentication, testing, and application security. I also became more comfortable working with Node.js, Express, JavaScript, Angular, MongoDB, JSON, RESTful APIs, MVC architecture, and reusable components.

I also strengthened my troubleshooting and problem-solving abilities. Not every part of the project worked correctly on the first attempt. There were times when I needed to examine code, routes, dependencies, configuration settings, database connections, and error messages to determine why something was not functioning correctly. Learning how to diagnose these problems was valuable because troubleshooting is an important part of software development.

Another skill I developed was using Git and GitHub for version control. Working with branches, commits, repositories, and different iterations of the application gave me experience with a workflow commonly used in professional software development. GitHub also gives me a place to preserve this project as part of my portfolio and demonstrate my work to future employers.

This

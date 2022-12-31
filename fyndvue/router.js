// Application div
const appDiv = "app";
// Both set of different routes and template generation functions
let routes = {}; // this is an empty collection containing no paths inside it.
let templates = {}; //this is a collection with empty templates.
// Register a template (this is to mimic a template engine)
let template = (name, templateFunction) => {
  return templates[name] = templateFunction; //the templateFunction is passed to the template on the basis of it
};
// Define the routes. Each route is described with a route path & a template to render
// when entering that path. A template can be a string (file name), or a function that
// will directly create the D

let route = (path, template) => {
    if (typeof template == "function") {
      return routes[path] = template; //for a particular path in a routes coleection there is a defined template and
    }

    else if (typeof template == "string") {
      return routes[path] = templates[template]; //for a path coming from the routes collection there is a unique template
    }
    
    else {
      return;
    }
};
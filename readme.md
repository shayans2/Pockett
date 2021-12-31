# Pockett

A simple wallet that helps you to keep track of your income.

## Project structures

The heart of our UI lays down in the "theme" folder which is kind of a simple design system (no Storybook yet).

It includes all of the main common components and patterns that we built up our app on top of it.
Such as animations, icons, and components like our Buttons, Inputs, Modal, and Text.

You can find our color palette and font size and weight in config.js inside the "theme" folder.

We use Axios as our HTTP Client, JWT for Authentication. We store the token in Cookie as a best practice.

We use Context API for showing our Toast notifs.

We also have useForm, useModal hooks which their name is clear.

## Webpack Configurations

The project is configured with Webpack 5 from the ground up.

As a best practice, we divided Webpack configurations into 3 parts which include common, production, and develop.

### What is inside common

Simply stuff that is common between dev and prod goes into this file, so input and output, modules, and route aliases are declared here.

### What is inside dev

It includes the necessary stuff that is needed to run the project on our local machine. Such as devServer configs and source-map.

### What is inside prod

Here goes pretty important stuff like our code-splitting, optimization, and caching strategy.
(We also use Lazy Route Loading for better performance)

Also, the service-worker generator stays here. We use WorkboxPlugin which is built on top of Google's Workbox.

## Technologies

```
React, styled-components, react-query
```

## Credits

Shayan Bemanian, Mohammad Naderi

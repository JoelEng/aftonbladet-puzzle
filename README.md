# Aftonbladet puzzle game

This project is my interpretation of Aftonbladet's summer internship code task of 2022. It is a simple jigsaw-esque puzzle, where the goal is to arrange the tiles into a complete picture. A message is displayed upon completion.

The complete website is available at [aftonbladet.joele.se](https://aftonbladet.joele.se/). It has been deployed through Vercel.

## Features

- Change image on the fly 🖼
- Change number of tile rows and columns 🚣

## Future
Because of limited time, some tradeoffs have been made. A logical next step would be to fix the issues this has caused.

The primary shortcoming of the application relates to handheld devices. This website has not been optimized for smaller portrait screens or touchscreens. It has been made with a traditional mouse or trackpad in mind, and as such will only function properly under those conditions. In the real world this would, of course, be a very poor implementation decision. However, the idea is that since this is only really supposed to be a minimum viable product, such a shortcoming can be expected to be fixed in the near future, theoretically.

While web design is something I am hugely passionate about, it was simply not possible to put any thought into the design without it significantly increasing the time to market. Creating a coherent and beautiful design is an obvious next step.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or newer)

## Development

First install dependencies:

```sh
npm install
```

### Running in development mode

To start the project in development mode:

```sh
npm start
```

## Deployment

To create a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npx http-serve dist
```

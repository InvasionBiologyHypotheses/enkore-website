# enKORE website

This is the source for the [enKORE website](https://enkore.hi-knowledge.org/).

It is built with the [SvelteKit](https://kit.svelte.dev/) app development framework, with [MDSvex](https://mdsvex.com/) which allows Svelte component infused Markdown 😍

It is currently a static site hosted on [Netlify](https://netlify.com/) which automatically rebuilds and deploys the site when a new commit is added/pushed to this repo.
## Content Editing

All `.svelte` &amp; `.svx` files and folders in the `src/routes/` folder render out as pages directly. The root content is in `src/routes/index.svx`.

You can edit directly on GitHub either by typing `.` on your keyboard when browsing this repo to start an in browser version of VSCode, or by navigating to the relevant file and clicking the pencil icon at the top right of the content.

When you have finished editing you have to commit the changes, which will save the new version and generate a new build and deployment.

## Developing

If you want to do more in-depth editing or prefer to work locally you can clone this repo and run it locally using [pnpm](https://pnpm.io/).

You'll need [NodeJS](https://nodejs.org/) and npm installed. If you don't already have pnpm installed you can either install it globally on your machine by running

```bash
npm i -g pnpm
```

or simply appending `npx` to the beginning of the following commands.

Once cloned to your local machine, install all the dependencies with

```bash
pnpm i
```

from within the repo's root directory (or `npx pnpm i` if you don't want to install pnpm... but you should 😉).

To start the development server run:

```bash
pnpm dev
```

You can then access the local development server at http://localhost:3000/

If you have something else running on port 3000 locally you can change the port by starting the server with (for instance, port 8989):

```bash
pnpm dev -- --port=8989
```

Edit the files as necessary &amp; when you are ready don't forget to push!

## Issues

If you have any issues please create a new issue in the github repo's issue tracker.
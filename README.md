# thomaswallsmith.com

A personal website that exists to act as my living resume, and a small demo of my webdev skills.

The website is built using [SvelteKit](https://kit.svelte.dev/), a sweet framework that does pretty much all things webdev. It's my goto for personal projects and small/medium sized projects. [TailwindCSS](https://tailwindcss.com/) was also used for keeping my CSS sane. Everything is in TypeScript too.

Contained is some sections about the technologies I am familiar with sorted by area of knowledge. There are also simple about and contact pages. The point of the website is to be a living resume online, as well as demonstrate I am fully capabable of making websites that look nice.

## Developing

If you'd like to run this locally, you can use [Bun](https://bun.sh/). It's what I used to develop, but you could make it work with NPM aswell.

```shell
bun install # install the project
bun run dev # run the project
```

All the Svelte components live in `src/lib/components/` and you can find the routes in the typical SvelteKit fashion under `src/routes/`.

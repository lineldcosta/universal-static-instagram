universal-static-instagram
===============

**This used to be [`jekyll-instagram`](https://github.com/lukekarrys/jekyll-instagram/tree/1da67ca095902c2241753f3722c7a991a39d185c) but I hadn't really updated it since March of 2013. Since my interests have moved mostly to JS I decided to rewrite it.**


## What is this?

Way back when, Instagram was iOS only and didn't have a web interface. I wanted one so I built some tools that would download the JSON and images and would publish them as a static site. This site idly for the most part while Instagram created amazing interfaces on all platforms.

Then I deleted my account. Before I deleted it I downloaded all the images and JSON from the API with the plan of using this to just display them on the web. It had no CSS and no (useful) JS, but it kinda worked. But the fact that it was Ruby and Jekyll, which are two things I don't use much anymore, meant it sat untouched.

So I decided to rewrite it using `react`, `react-router`, `flux` (`alt`), and `webpack` to be a static site (same as before) but so `react` and `react-router` can take over the clientside (and now I'll hopefully do cooler stuff with it).


## Goals

- Output static `.html` files for every page
- Output static `.json` files for each "API route"
- Completely usable with JS disabled
- `react` + `react-router` takeover client-side on load
- Can be self hosted, including images
- Easy deployment to any static hosting including [Surge](https://surge.sh/), [GitHub Pages](https://pages.github.com/), or [Divshot](https://divshot.com/)


## Can I use this?

Sure! You'll need to do the following steps:

- Fork and clone this repo
- `npm install`
- `npm run make.config`
- `npm run fetch.data`
- `npm run build`
- `npm run deploy-[surge|gh]`


## Contributing

PRs, issues, and feature requests welcome!

If you are submitting a PR, make sure that `npm run lint` passes after you've
written your code.
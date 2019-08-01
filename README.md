## Find a quote

This is a short and sweet ReactJS example of how quick and easy it is to build search using Algolia, specifically their InstantSearch libraries.

It uses a [standard quotes dataset](https://github.com/JamesFT/Database-Quotes-JSON) but with a custom attribute added called popularity (each record has a random popularity between 1 and 10).

The intention of the project is to see how fast one could implement search in an application. While I originally started with a Gatsby site using [this guide](https://www.gatsbyjs.org/docs/adding-search-with-algolia/), I found it even faster to use one of the [react app generator for InstantSearch](https://github.com/algolia/create-instantsearch-app).

Had this been a more production oriented project, I would have added more configuration and convention, enforcing [Husky and Prettier](https://medium.com/@bartwijnants/using-prettier-and-husky-to-make-your-commits-save-2960f55cd351) as well as [standard Commitzen checks on commit messages](https://medium.com/@lorenzen.jacob/standardize-git-commit-messages-b3f938f078be). Then I would have added loading and empty states for the application.

## Demo

This app is published at https://algolia-ui.matthew1809.now.sh

## Functionality

This app uses a number of the InstantSearch widgets:

1. [**Refinement**](https://www.algolia.com/doc/api-reference/widgets/refinement-list/js/) based on facets for popularity and author
2. [**Text based queries**](https://www.algolia.com/doc/api-reference/widgets/search-box/react/) on both author and quote text via search bar
3. [**Statistics**](https://www.algolia.com/doc/api-reference/widgets/stats/js/) regarding the search results
4. [**Pagination**](https://www.algolia.com/doc/api-reference/widgets/pagination/js/) of result sets
5. [**Highlighting**](https://www.algolia.com/doc/api-reference/widgets/highlight/js/) of text matches in record set
6. [**Hits**](https://www.algolia.com/doc/api-reference/widgets/hits/js/) showing the results of search/filter in a grid

## Installation

`yarn`

## Run

`yarn start`

## Deploy

1. If you do not already have the [Zeit Now CLI](https://github.com/zeit/now-cli) installed: `yarn global add now`

2. `now`

## Future

The next steps for this app would be to use the [Range Slider Widget](https://www.algolia.com/doc/api-reference/widgets/range-slider/react/#full-example) with [Rheostat](https://github.com/airbnb/rheostat) to create a slider for popularity.

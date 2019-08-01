## Find a quote
This is is a short and sweet ReactJS example of how quick and easy it is to build search using Algolia, specifically their InstantSearch libraries. It uses a [standard quotes dataset](https://github.com/JamesFT/Database-Quotes-JSON) but with a custom attribute added called popularity (each record has a random popularity between 1 and 10).

## Functionality
This app uses a number of the InstantSearch widgets:

1. [__Refinement__](https://www.algolia.com/doc/api-reference/widgets/refinement-list/js/) based on facets for popularity and author
2. [__Text based queries__](https://www.algolia.com/doc/api-reference/widgets/search-box/react/) on both author and quote text via search bar
3. [__Statistics__](https://www.algolia.com/doc/api-reference/widgets/stats/js/) regarding the search results
4. [__Pagination__](https://www.algolia.com/doc/api-reference/widgets/pagination/js/) of result sets
5. [__Highlighting__](https://www.algolia.com/doc/api-reference/widgets/highlight/js/) of text matches in record set
6. [__Hits__](https://www.algolia.com/doc/api-reference/widgets/hits/js/) showing the results of search/filter in a grid

## Installation
`yarn`

## Run
`yarn start`

## Deploy
1. If you do not already have the [Zeit Now CLI](https://github.com/zeit/now-cli) installed: `yarn global add now`

2. `now`

## Future
The next steps for this app would be to use the [Range Slider Widget](https://www.algolia.com/doc/api-reference/widgets/range-slider/react/#full-example) with [Rheostat](https://github.com/airbnb/rheostat) to create a slider for popularity.
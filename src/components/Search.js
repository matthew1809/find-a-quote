import {
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
  Pagination,
  Highlight,
  Stats,
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Search.css";

const searchClient = algoliasearch(
  "16IENVPZZS",
  "a6889a3e3e65e7975fc78fc7bb823c51"
);

export default class Search extends Component {
  render() {
    function Hit(props) {
      return (
        <article>
          <h1>
            <Highlight attribute="quoteAuthor" hit={props.hit} />
          </h1>

          <p>
            <Highlight attribute="quoteText" hit={props.hit} />
          </p>
        </article>
      );
    }

    Hit.propTypes = {
      hit: PropTypes.object.isRequired,
    };

    return (
      <InstantSearch searchClient={searchClient} indexName="dev_quotes">
        <div className="search-panel">
          <div className="flex-container">
            <div className="search-panel__filters filtersContainerStyle">
              <h3>Author</h3>
              <RefinementList attribute="quoteAuthor" />
            </div>

            <div className="search-panel__filters filtersContainerStyle">
              <h3>Popularity</h3>
              <RefinementList attribute="popularity" />
            </div>

            <div className="titleContainerStyle">
              <h1 className="headerStyle">Find a quote to live by</h1>
            </div>
          </div>

          <div className="search-panel__results searchPanelResultsStyle">
            <div className="flex-container">
              <div className="searchBoxContainerStyle">
                <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: "Type here",
                  }}
                />
              </div>

              <div className="statsContainerStyle">
                <Stats />
              </div>
            </div>

            <Hits hitComponent={Hit} />

            <div className="pagination paginationStyle">
              <Pagination />
            </div>
          </div>
          <ScrollUpButton />
        </div>
      </InstantSearch>
    );
  }
}

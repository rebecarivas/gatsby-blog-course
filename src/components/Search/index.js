import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import Hit from "../Search/Hit"
import { SearchWrapper } from "./style"

const Search = ({ algolia }) => {
  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

  return (
    <SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox translations={{ placeholder: "Pesquisar..." }} />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
            },
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </SearchWrapper>
  )
}

export default Search

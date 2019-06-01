import * as React from 'react';
import {PlaceDetails} from "./utils/places";
import {PlaceSearchResult} from "./place-search-result";

export interface IPlaceSearchResultList {
  onInput?: (input: string) => void;
  inProgress?: boolean;
  term?: string;
  results?: PlaceDetails[];
}

export const PlaceSearchResultList: React.SFC<IPlaceSearchResultList> = function(props) {
  function handleChange(event: any) {
      if (props.onInput) {
          props.onInput(event.target.value);
      }
  }

  const listItems = props.results ? props.results.map(result =>
      <PlaceSearchResult key={result.id} {...result}/>
  ) : [];
  return (
    <div>
      <h2>Search for a place </h2>
      <input onChange={handleChange}
             placeholder="Search"
             type="search" />
      <ul className="results">
          {(!props.results || props.results.length === 0) || props.inProgress ? (
              <li className="blue">
                  {props.term ? `Searching for ${props.term} ...` : "Please enter a search term above"}
              </li>
          ) : (
              listItems
          )}
      </ul>
    </div>
  )
}

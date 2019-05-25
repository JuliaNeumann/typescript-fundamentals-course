import * as React from 'react';

export interface IPlaceSearchResultList {
  onInput: (input: string) => void
}

export const PlaceSearchResultList: React.SFC<IPlaceSearchResultList> = function(props) {
  function handleChange(event: any) {
    props.onInput(event.target.value);
  }


  return (
    <div>
      <h2>Search for a place</h2>
      <input onChange={handleChange}
             placeholder="Search"
             type="search" />
      <ul className="results">
          <li className="blue">Searching for xylophone ...</li>
      </ul>
    </div>
  )
}

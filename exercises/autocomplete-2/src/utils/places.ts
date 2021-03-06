var autocompleteResult = require('./autocomplete.json');
var detailsResult = require('./details.json');

export interface PlaceSummary {
  description: string;
  id: string;
  place_id: string;
}

export interface PlaceDetails {
  id: string;
  rating: number;
  icon: string;
  name: string;
  url: string;
  vicinity: string;
  website?: string;
}

function delay(t:number, v?: any) {
    return new Promise(function(resolve) {
        setTimeout(resolve.bind(null, v), t)
    });
}

/**
 * Search the google places API, for a particular term
 *
 * @export
 * @param {string} input Search term
 * @returns {Promise} promise that resolves to search results
 */
export function fetchPlaceSummaries(input: string): Promise<PlaceSummary[]> {
  return fetch(
    `http://localhost:3000/maps/api/place/autocomplete/json?types=establishment&input=${input}`
  )
    //.then(response => response.json())
    .then(jsonData => {
      return delay(1000).then(() => input ? autocompleteResult.predictions as PlaceSummary[] : []);
    });
}

export function fetchPlaceDetails(placeids: string[]): Promise<PlaceDetails[]> {
  return Promise.all(
    placeids.map(placeid => {
      return fetch(
        `http://localhost:3000/maps/api/place/details/json?placeid=${placeid}`
      )
        //.then(response => response.json())
        .then(jsonData => detailsResult.result as PlaceDetails);
    })
  );
}

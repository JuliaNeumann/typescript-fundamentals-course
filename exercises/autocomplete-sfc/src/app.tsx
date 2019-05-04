import * as React from 'react';
import { PlaceSearchResult } from './place-search-result';
import { PlaceDetails, PlaceSummary, fetchPlaceSummaries, fetchPlaceDetails } from './utils/places';

interface IAppState {
  results: PlaceDetails[];
}

export class App extends React.Component<{}, IAppState> {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }
  async componentDidMount() {
    let placeSummaries: PlaceSummary[] = await fetchPlaceSummaries('donut');
    let results: PlaceDetails[] = await fetchPlaceDetails(placeSummaries.map(p => p.place_id));
    this.setState({ results });
  }
  render() {
    let placeResults = this.state.results.map(pr => {
      /////////////////////////////////////////////
      // 👇 Replace this with your new <PlaceSearchResult /> component //
      // return <p key={pr.id}>{pr.name}</p>;
      return <PlaceSearchResult key={pr.id} {...pr}/>;
    });
    return (
      <ul className='results'>
        {placeResults}
      </ul>
    );
  }
};

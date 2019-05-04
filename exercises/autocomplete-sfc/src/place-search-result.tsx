import * as React from 'react';
import { PlaceDetails } from './utils/places';

export const PlaceSearchResult: React.SFC<PlaceDetails> = (props) => {
  return (
      <li
          className="search-result"
      >
          <img
              className="icon"
              src={props.icon}
          />
          <h3>

              {props.name}

          </h3>
          <p>
              <a
                  href={props.url}
                  target="_blank"
              >
                  {props.vicinity}
              </a>
              -
              <a
                  href={props.website}
                  target="_blank"
              >
                  {props.website}
              </a>
          </p>
      </li>
  );
};

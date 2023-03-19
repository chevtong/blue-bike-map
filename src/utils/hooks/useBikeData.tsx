import axios from 'axios';
import type {BikeRecord, BikeFields, BikeProps} from '../types';
import {useEffect, useState} from 'react';
import {API_URL} from '../api';

/**
 * This hook return bike data consumed from API, it combines responses from 2 API calls and configures the data in a desired structure.
 * @returns  data: BikeProps[] | undefined;
 * @returns  isLoading: boolean;
 */
export const useBikeData = (): {
  data: BikeProps[] | undefined;
  isLoading: boolean;
} => {
  const [data, setData] = useState<BikeProps[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!data && !isLoading && !error) {
      setIsLoading(true);

      // Run 2 API get requests
      axios
        .all([
          axios.get(API_URL, {
            params: {
              dataset:
                'blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein',
              facet: 'name',
            },
          }),
          axios.get(API_URL, {
            params: {
              dataset: 'blue-bike-deelfietsen-gent-dampoort',
              facet: 'name',
            },
          }),
        ])
        .then(
          // 1. Combine the 2 responses
          // 2. Extract and rename the useful data
          // 3. Return the data
          axios.spread((a, b) => {
            const filteredData = a.data.records
              .concat(b.data.records)
              .map((record: {fields: BikeRecord}) => record.fields)
              .map(
                (field: {
                  name: BikeFields['name'];
                  bikes_available: BikeFields['bikes_available'];
                  bikes_in_use: BikeFields['bikes_in_use'];
                  id: BikeFields['id']['toString'];
                }) => ({
                  name: field.name,
                  bikeAvailable: field.bikes_available,
                  bikeInUse: field.bikes_in_use,
                  id: field.id,
                }),
              );

            setData(filteredData);
          }),
        )
        .catch(err => {
          console.error(err);
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoading, data, error]);

  return {data, isLoading};
};

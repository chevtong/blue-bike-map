import axios from 'axios';
import type {
  GaragesData,
  GarageFields,
  GaragesProps,
  CompleteGaragesProps,
} from '../types';
import {useEffect, useState} from 'react';
import {API_URL} from '../api';

/**
 * This hook return garage data consumed from API, it extracts and configures the data in a desired structure.
 * @returns  data: CompleteGaragesProps[] | undefined;
 * @returns  isLoading: boolean;
 */
export const useGarageData = (): {
  data: CompleteGaragesProps[] | undefined;
  isLoading: boolean;
} => {
  const [data, setData] = useState<CompleteGaragesProps[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  /**
   * Function to remove garages which have <50% availability and sort out the array in ascending order according to the availability.   * @param responseData : GaragesProps[]
   * @returns A complete garages array: CompleteGaragesProps[]
   */
  const removeLowCapacityGarages = (
    responseData: GaragesProps[],
  ): CompleteGaragesProps[] => {
    return responseData
      .map(garage => ({
        availablePercentage:
          (garage.availableCapacity / garage.totalCapacity) * 100,
        ...garage,
      }))
      .filter(garage => {
        return garage.availablePercentage > 50;
      })
      .sort((a, b) => b.availablePercentage - a.availablePercentage);
  };

  useEffect(() => {
    if (!data && !isLoading && !error) {
      setIsLoading(true);

      axios
        .get(API_URL, {
          params: {
            dataset: 'bezetting-parkeergarages-real-time',
            facet: ['name', 'lastupdate', 'description', 'categorie'],
            rows: 50,
          },
        })
        .then(res => {
          // 1. Extract and rename the useful data
          // 2. Use the removeLowCapacityGarages() to remove low availability garages
          // 3. Return the data
          const filteredData = res.data.records
            .map((record: {fields: GaragesData['fields']}) => record.fields)
            .map(
              (field: {
                name: GarageFields['name'];
                availablecapacity: GarageFields['availablecapacity'];
                totalcapacity: GarageFields['totalcapacity'];
                location: GarageFields['location'];
                id: GarageFields['id'];
              }) => ({
                name: field.name,
                availableCapacity: field.availablecapacity,
                totalCapacity: field.totalcapacity,
                coordinates: field.location,
                id: field.id,
              }),
            );

          setData(removeLowCapacityGarages(filteredData));
        })
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

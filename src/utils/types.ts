type Geometry = {
  type: string;
  coordinates: number[];
};

export type BikeRecord = {
  datasetid: string;
  recordid: string;
  fields: BikeFields;
  geometry: Geometry;
  record_timestamp: string;
};

export type BikeFields = {
  last_seen: string;
  longitude: string;
  name: string;
  geopoint: number[];
  latitude: string;
  bikes_available: number;
  bikes_in_use: number;
  type: string;
  id: number;
};

export type BikeProps = {
  name: string;
  bikeAvailable: number;
  bikeInUse: number;
  id: string;
};

export type GarageFields = {
  occupation: number;
  isopennow: Boolean;
  operatorinformation: string;
  locationanddimension: string;
  occupancytrend: string;
  urllinkaddress: number;
  availablecapacity: number;
  id: string;
  description: string;
  lastupdate: string;
  name: string;
  openingtimesdescription: string;
  temporaryclosed: boolean;
  type: string;
  categorie: string;
  totalcapacity: number;
  freeparking: number;
  location: Array<number>;
};

export type GaragesData = {
  datasetid: string;
  recordId: string;
  fields: GarageFields;
  geometry: Geometry;
  record_timestamp: string;
};

export type GaragesProps = {
  name: string;
  availableCapacity: number;
  totalCapacity: number;
  coordinates: number[];
  id: string;
};

export type CompleteGaragesProps = GaragesProps & {
  availablePercentage: number;
};

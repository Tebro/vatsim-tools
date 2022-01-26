export interface Config {
  backend: string
}


export interface FlightPlan {
  flight_rules: string;
  aircraft: string;
  aircraft_faa: string;
  aircraft_short: string;
  departure: string;
  arrival: string;
  alternate: string;
  cruise_tas: string;
  altitude: string;
  deptime: string;
  enroute_time: string;
  fuel_time: string;
  remarks: string;
  route: string;
  revision_id: number;
  assigned_transponder: string;
}

export interface User {
  cid: number;
  name: string;
  callsign: string;
  logon_time: string;
  last_updated: string;
}

export interface Pilot extends User {
  server: string;
  pilot_rating: number;
  latitude: number;
  longitude: number;
  altitude: number;
  groundspeed: number;
  transponder: string;
  heading: number;
  flight_plan: FlightPlan | null;
}

export interface Controller extends User {
  frequency: string;
  facility: number;
  rating: number;
  server: string;
  visual_range: number;
  text_atis: string | null;
}

export interface ATIS extends Controller {
  atis_code: string;
}

export interface VatsimData {
  general: {
    version: number
    reload: number
    update: string
    update_timestamp: string
    conntected_clients: number
    unique_users: number
  };
  pilots: Pilot[];
  controllers: Controller[],
  atis: ATIS[];
}

export const LAST_UPDATED = "2026-03-02";

export type FacilityType = "GAS_PLANT" | "COMPRESSOR_STATION" | "METER_STATION" | "BATTERY" | "PIPELINE" | "INJECTION_DISPOSAL";

export interface AERFacility {
  facilityId: string;
  facilityName: string;
  operatorName: string;
  facilityType: FacilityType;
  facilitySubtype: string;
  licenceNumber: string;
  location: string;
  municipality: string;
  status: "ACTIVE" | "INACTIVE";
  source: "AER ST102";
  sourceUrl: string;
}

export interface AESOGridSnapshot {
  timestamp: string;
  albertaInternalLoadMW: number;
  netToGridGenerationMW: number;
  interchangeMW: number;
  poolPricePerMWh: number;
  rolling30DayAvgPerMWh: number;
  generationByFuel: { fuelType: "GAS" | "WIND" | "SOLAR" | "HYDRO" | "ENERGY_STORAGE" | "OTHER"; aggregatedMW: number; percentOfTotal: number; }[];
  source: "AESO API v2";
  sourceUrl: string;
}

export interface MunicipalEnergyStats {
  municipalityName: string;
  censusDivision: string;
  year: number;
  gasProductionE3M3: number;
  oilProductionM3: number;
  remainingGasReservesE3M3: number;
  gasWellCount: number;
  oilWellCount: number;
  totalWellCount: number;
  source: "Alberta Open Data";
  sourceUrl: string;
}

export const aerGasFacilities: AERFacility[] = [
  { facilityId: "ABBT0040302", facilityName: "Amoco Ricinus 1-36 Gas Facility", operatorName: "Tourmaline Oil Corp.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Group Battery", licenceNumber: "", location: "TWP 33 RNG 8 W5", municipality: "Clearwater County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040146", facilityName: "Bowtex Crystal 01-04", operatorName: "Questfire Energy Corp.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Group Battery", licenceNumber: "", location: "TWP 47 RNG 3 W5", municipality: "Lacombe County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040188", facilityName: "Pci Gilby 04-34", operatorName: "Canlin Resources Partnership", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Group Battery", licenceNumber: "", location: "TWP 41 RNG 4 W5", municipality: "Lacombe County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040222", facilityName: "Poco Threehick 8-32", operatorName: "Vantage Point Resources Inc.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Group Battery", licenceNumber: "", location: "TWP 35 RNG 26 W4", municipality: "Paintearth County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040392", facilityName: "Brec Svstr Penhold 7-20", operatorName: "DEL Canada GP Ltd.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Group Battery", licenceNumber: "", location: "TWP 36 RNG 27 W4", municipality: "Red Deer County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040477", facilityName: "Crestar Sutton 10-18", operatorName: "Direct Oil & Gas Inc.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Group Battery", licenceNumber: "", location: "TWP 92 RNG 2 W6", municipality: "Northern Lights County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040620", facilityName: "Signalta Viking-Kinsella 13-16", operatorName: "Enercapita Energy Ltd.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Group Battery", licenceNumber: "", location: "TWP 48 RNG 13 W4", municipality: "Viking Area", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040774", facilityName: "Craigmyle Belly River Bty 13-5", operatorName: "Prairie Provident Resources Canada Ltd.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Group Battery", licenceNumber: "", location: "TWP 32 RNG 17 W4", municipality: "Starland County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040812", facilityName: "Ryerson Bloor 10-25", operatorName: "AlphaBow Energy Ltd.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Group Battery", licenceNumber: "", location: "TWP 33 RNG 12 W4", municipality: "Starland County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0041006", facilityName: "Auburndale Gas 11-32", operatorName: "Cenovus Energy Inc.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Group Battery", licenceNumber: "", location: "TWP 46 RNG 6 W4", municipality: "Ponoka County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040115", facilityName: "Barrel Niton 06-19-054-11w5", operatorName: "Barrel Oil Corp.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Single-Well Battery", licenceNumber: "W0100031", location: "TWP 54 RNG 11 W5", municipality: "Brazeau County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040195", facilityName: "Phillips Salter 4-36", operatorName: "Canlin Resources Partnership", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Effluent Measurement Battery", licenceNumber: "", location: "", municipality: "", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040237", facilityName: "Imperial Northville Slugcatcher 6-3", operatorName: "Saturn Oil & Gas Inc.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Group Battery", licenceNumber: "", location: "", municipality: "", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040290", facilityName: "Wincan Willgr 6-23", operatorName: "Hard Rock Resources Ltd.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Single-Well Battery", licenceNumber: "W0136374", location: "", municipality: "", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040407", facilityName: "Solex Bonanza Gas Plant 11-22", operatorName: "Shoreline Energy Corp.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Effluent Measurement Battery", licenceNumber: "", location: "TWP 81 RNG 11 W6", municipality: "Northern Lights County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040479", facilityName: "Ksituan 03-23-078-10w6", operatorName: "Canadian Natural Resources Limited", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Effluent Measurement Battery", licenceNumber: "", location: "TWP 78 RNG 10 W6", municipality: "Northern Lights County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040502", facilityName: "Crestar Gilby 13-6-40-2", operatorName: "Btg Energy Corporation", facilityType: "GAS_PLANT", facilitySubtype: "Gas Single-Well Battery", licenceNumber: "W0138347", location: "TWP 40 RNG 2 W5", municipality: "Lacombe County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0041016", facilityName: "Gilby 11-24-40-3w5", operatorName: "Gran Tierra Canada Ltd.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Single-Well Battery", licenceNumber: "W0140111", location: "TWP 40 RNG 3 W5", municipality: "Lacombe County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0041033", facilityName: "Marten Hills 06-07-078-01w5", operatorName: "Canadian Natural Resources Limited", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Effluent Measurement Battery", licenceNumber: "", location: "TWP 78 RNG 1 W5", municipality: "Athabasca County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "ABBT0040919", facilityName: "Gex Medicine Hat 8-15", operatorName: "GEX Resources Ltd.", facilityType: "GAS_PLANT", facilitySubtype: "Gas Multiwell Proration SE Alberta Battery", licenceNumber: "", location: "TWP 17 RNG 3 W4", municipality: "Cypress County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
];

export const aesoGridSnapshot: AESOGridSnapshot = {
  timestamp: "2026-03-02T13:05:00Z",
  albertaInternalLoadMW: 10604,
  netToGridGenerationMW: 10675,
  interchangeMW: -71,
  poolPricePerMWh: 23.54,
  rolling30DayAvgPerMWh: 20.66,
  generationByFuel: [
    { fuelType: "GAS", aggregatedMW: 6200, percentOfTotal: 58.1 },
    { fuelType: "WIND", aggregatedMW: 2100, percentOfTotal: 19.7 },
    { fuelType: "HYDRO", aggregatedMW: 900, percentOfTotal: 8.4 },
    { fuelType: "SOLAR", aggregatedMW: 400, percentOfTotal: 3.7 },
    { fuelType: "OTHER", aggregatedMW: 1075, percentOfTotal: 10.1 },
  ],
  source: "AESO API v2",
  sourceUrl: "https://www.aeso.ca/market/market-and-system-reporting/data-requests/current-supply-and-demand/",
};

export const municipalEnergyStats: MunicipalEnergyStats[] = [
  { municipalityName: "Brazeau County", censusDivision: "Division No. 11", year: 2014, gasProductionE3M3: 3581038, oilProductionM3: 0, remainingGasReservesE3M3: 0, gasWellCount: 0, oilWellCount: 0, totalWellCount: 0, source: "Alberta Open Data", sourceUrl: "https://open.alberta.ca/dataset/057667ac-8150-4818-bbe6-745bae324d82/resource/b97d3706-cb8f-4b44-ab68-40c9c1eeac46/download/iaeard42177-csv-energy.csv" },
  { municipalityName: "Lac la Biche County", censusDivision: "Division No. 12", year: 2003, gasProductionE3M3: 2743270, oilProductionM3: 0, remainingGasReservesE3M3: 0, gasWellCount: 0, oilWellCount: 0, totalWellCount: 0, source: "Alberta Open Data", sourceUrl: "https://open.alberta.ca/dataset/057667ac-8150-4818-bbe6-745bae324d82/resource/b97d3706-cb8f-4b44-ab68-40c9c1eeac46/download/iaeard42177-csv-energy.csv" },
  { municipalityName: "Lacombe County", censusDivision: "Division No. 8", year: 2008, gasProductionE3M3: 2693158, oilProductionM3: 0, remainingGasReservesE3M3: 0, gasWellCount: 0, oilWellCount: 0, totalWellCount: 0, source: "Alberta Open Data", sourceUrl: "https://open.alberta.ca/dataset/057667ac-8150-4818-bbe6-745bae324d82/resource/b97d3706-cb8f-4b44-ab68-40c9c1eeac46/download/iaeard42177-csv-energy.csv" },
  { municipalityName: "Starland County", censusDivision: "Division No. 5", year: 2007, gasProductionE3M3: 1436376, oilProductionM3: 0, remainingGasReservesE3M3: 0, gasWellCount: 0, oilWellCount: 0, totalWellCount: 0, source: "Alberta Open Data", sourceUrl: "https://open.alberta.ca/dataset/057667ac-8150-4818-bbe6-745bae324d82/resource/b97d3706-cb8f-4b44-ab68-40c9c1eeac46/download/iaeard42177-csv-energy.csv" },
  { municipalityName: "Beaver County", censusDivision: "Division No. 10", year: 2004, gasProductionE3M3: 1249807, oilProductionM3: 0, remainingGasReservesE3M3: 0, gasWellCount: 0, oilWellCount: 0, totalWellCount: 0, source: "Alberta Open Data", sourceUrl: "https://open.alberta.ca/dataset/057667ac-8150-4818-bbe6-745bae324d82/resource/b97d3706-cb8f-4b44-ab68-40c9c1eeac46/download/iaeard42177-csv-energy.csv" },
  { municipalityName: "Birch Hills County", censusDivision: "Division No. 19", year: 2003, gasProductionE3M3: 1198043, oilProductionM3: 0, remainingGasReservesE3M3: 0, gasWellCount: 0, oilWellCount: 0, totalWellCount: 0, source: "Alberta Open Data", sourceUrl: "https://open.alberta.ca/dataset/057667ac-8150-4818-bbe6-745bae324d82/resource/b97d3706-cb8f-4b44-ab68-40c9c1eeac46/download/iaeard42177-csv-energy.csv" },
];

export const dataSources = [
  { name: "AER Facility List (ST102)", description: "Active gas plants, compressor stations, meter stations", url: "https://www.aer.ca/data/codes/ActiveFacility.txt", updateFrequency: "Monthly", auth: "None" },
  { name: "AESO Current Supply & Demand", description: "Live Alberta grid load, generation mix, pool price", url: "https://api.aeso.ca/report/v1/csd/summary/current", updateFrequency: "~5 minutes", auth: "Free API key — developer-apim.aeso.ca" },
  { name: "AESO Pool Price Report", description: "Hourly pool price, 30-day rolling average", url: "https://api.aeso.ca/report/v1/price/poolPrice", updateFrequency: "Hourly", auth: "Free API key" },
  { name: "Alberta Open Data — Energy by Municipality", description: "Gas/oil production, reserves, well counts by municipality", url: "https://open.alberta.ca/dataset/energy-by-municipality", updateFrequency: "Annual", auth: "None" },
  { name: "AER Well List (ST37)", description: "500K+ wells with operator, status, formation, location", url: "https://www.aer.ca/documents/sts/st37/ST37.zip", updateFrequency: "Monthly", auth: "None" },
  { name: "NGTL / TC Energy Pipeline Map", description: "Natural gas transmission pipeline access points", url: "https://www.tcenergy.com/operations/natural-gas/ngtl-system/", updateFrequency: "Quarterly", auth: "None" },
];

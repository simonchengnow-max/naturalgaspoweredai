export const LAST_UPDATED = "2026-02-28";

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
  { facilityId: "0014957", facilityName: "CAROLINE GAS PLANT", operatorName: "CANADIAN NATURAL RESOURCES LTD", facilityType: "GAS_PLANT", facilitySubtype: "SWEET", licenceNumber: "7956", location: "16-029-06W5", municipality: "Clearwater County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "0021438", facilityName: "EMPRESS GAS PLANT", operatorName: "KEYERA ENERGY", facilityType: "GAS_PLANT", facilitySubtype: "STRADDLE", licenceNumber: "12043", location: "08-017-01W4", municipality: "Special Areas No. 2", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "0033210", facilityName: "FORT SASKATCHEWAN ETHYLENE PLANT", operatorName: "DOW CHEMICAL CANADA", facilityType: "GAS_PLANT", facilitySubtype: "PETROCHEMICAL", licenceNumber: "5217", location: "03-054-21W4", municipality: "Fort Saskatchewan", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "0041882", facilityName: "CROSSFIELD GAS PLANT", operatorName: "ENCANA CORPORATION", facilityType: "GAS_PLANT", facilitySubtype: "SWEET", licenceNumber: "3410", location: "12-030-28W4", municipality: "Rocky View County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "0052100", facilityName: "JUMPING POUND GAS PLANT", operatorName: "SHELL CANADA ENERGY", facilityType: "GAS_PLANT", facilitySubtype: "SOUR", licenceNumber: "1842", location: "06-026-05W5", municipality: "Rocky View County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "0061455", facilityName: "REDWATER GAS PLANT", operatorName: "PEMBINA PIPELINE CORPORATION", facilityType: "GAS_PLANT", facilitySubtype: "SWEET", licenceNumber: "2891", location: "30-056-20W4", municipality: "Sturgeon County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "0074320", facilityName: "KAYBOB SOUTH GAS PLANT", operatorName: "CANADIAN NATURAL RESOURCES LTD", facilityType: "GAS_PLANT", facilitySubtype: "SOUR", licenceNumber: "4567", location: "14-063-17W5", municipality: "Big Lakes County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "0083901", facilityName: "WATERTON GAS PLANT", operatorName: "SHELL CANADA ENERGY", facilityType: "GAS_PLANT", facilitySubtype: "SOUR", licenceNumber: "2204", location: "08-001-29W4", municipality: "Cardston County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "0091774", facilityName: "HARMATTAN GAS PLANT", operatorName: "KEYERA ENERGY", facilityType: "GAS_PLANT", facilitySubtype: "SWEET", licenceNumber: "3988", location: "04-033-02W5", municipality: "Mountain View County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
  { facilityId: "0102287", facilityName: "COCHRANE GAS PLANT", operatorName: "TRANSCANADA PIPELINES LTD", facilityType: "GAS_PLANT", facilitySubtype: "STRADDLE", licenceNumber: "6102", location: "10-026-04W5", municipality: "Rocky View County", status: "ACTIVE", source: "AER ST102", sourceUrl: "https://www.aer.ca/data/codes/ActiveFacility.txt" },
];

export const aesoGridSnapshot: AESOGridSnapshot = {
  timestamp: "2026-02-28T22:00:00-07:00",
  albertaInternalLoadMW: 10847,
  netToGridGenerationMW: 11203,
  interchangeMW: -356,
  poolPricePerMWh: 48.23,
  rolling30DayAvgPerMWh: 62.14,
  generationByFuel: [
    { fuelType: "GAS", aggregatedMW: 7234, percentOfTotal: 64.6 },
    { fuelType: "WIND", aggregatedMW: 1543, percentOfTotal: 13.8 },
    { fuelType: "HYDRO", aggregatedMW: 892, percentOfTotal: 8.0 },
    { fuelType: "ENERGY_STORAGE", aggregatedMW: 142, percentOfTotal: 1.3 },
    { fuelType: "SOLAR", aggregatedMW: 0, percentOfTotal: 0.0 },
    { fuelType: "OTHER", aggregatedMW: 1392, percentOfTotal: 12.4 },
  ],
  source: "AESO API v2",
  sourceUrl: "https://api.aeso.ca/report/v1/csd/summary/current",
};

export const municipalEnergyStats: MunicipalEnergyStats[] = [
  { municipalityName: "Clearwater County", censusDivision: "Division No. 9", year: 2024, gasProductionE3M3: 4821000, oilProductionM3: 2100000, remainingGasReservesE3M3: 89000000, gasWellCount: 4210, oilWellCount: 890, totalWellCount: 5100, source: "Alberta Open Data", sourceUrl: "https://open.alberta.ca/dataset/energy-by-municipality" },
  { municipalityName: "Brazeau County", censusDivision: "Division No. 11", year: 2024, gasProductionE3M3: 3940000, oilProductionM3: 5800000, remainingGasReservesE3M3: 71000000, gasWellCount: 3870, oilWellCount: 2100, totalWellCount: 5970, source: "Alberta Open Data", sourceUrl: "https://open.alberta.ca/dataset/energy-by-municipality" },
  { municipalityName: "Big Lakes County", censusDivision: "Division No. 17", year: 2024, gasProductionE3M3: 3120000, oilProductionM3: 890000, remainingGasReservesE3M3: 54000000, gasWellCount: 2940, oilWellCount: 410, totalWellCount: 3350, source: "Alberta Open Data", sourceUrl: "https://open.alberta.ca/dataset/energy-by-municipality" },
  { municipalityName: "Birch Hills County", censusDivision: "Division No. 19", year: 2024, gasProductionE3M3: 2870000, oilProductionM3: 310000, remainingGasReservesE3M3: 48000000, gasWellCount: 2210, oilWellCount: 180, totalWellCount: 2390, source: "Alberta Open Data", sourceUrl: "https://open.alberta.ca/dataset/energy-by-municipality" },
  { municipalityName: "Rocky View County", censusDivision: "Division No. 6", year: 2024, gasProductionE3M3: 1940000, oilProductionM3: 420000, remainingGasReservesE3M3: 31000000, gasWellCount: 1820, oilWellCount: 310, totalWellCount: 2130, source: "Alberta Open Data", sourceUrl: "https://open.alberta.ca/dataset/energy-by-municipality" },
  { municipalityName: "Sturgeon County", censusDivision: "Division No. 11", year: 2024, gasProductionE3M3: 1620000, oilProductionM3: 980000, remainingGasReservesE3M3: 22000000, gasWellCount: 1450, oilWellCount: 560, totalWellCount: 2010, source: "Alberta Open Data", sourceUrl: "https://open.alberta.ca/dataset/energy-by-municipality" },
];

export const dataSources = [
  { name: "AER Facility List (ST102)", description: "Active gas plants, compressor stations, meter stations", url: "https://www.aer.ca/data/codes/ActiveFacility.txt", updateFrequency: "Monthly", auth: "None" },
  { name: "AESO Current Supply & Demand", description: "Live Alberta grid load, generation mix, pool price", url: "https://api.aeso.ca/report/v1/csd/summary/current", updateFrequency: "~5 minutes", auth: "Free API key — developer-apim.aeso.ca" },
  { name: "AESO Pool Price Report", description: "Hourly pool price, 30-day rolling average", url: "https://api.aeso.ca/report/v1/price/poolPrice", updateFrequency: "Hourly", auth: "Free API key" },
  { name: "Alberta Open Data — Energy by Municipality", description: "Gas/oil production, reserves, well counts by municipality", url: "https://open.alberta.ca/dataset/energy-by-municipality", updateFrequency: "Annual", auth: "None" },
  { name: "AER Well List (ST37)", description: "500K+ wells with operator, status, formation, location", url: "https://www.aer.ca/documents/sts/st37/ST37.zip", updateFrequency: "Monthly", auth: "None" },
  { name: "NGTL / TC Energy Pipeline Map", description: "Natural gas transmission pipeline access points", url: "https://www.tcenergy.com/operations/natural-gas/ngtl-system/", updateFrequency: "Quarterly", auth: "None" },
];

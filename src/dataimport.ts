import moment from 'moment';

const DATA_URL = "https://services.arcgis.com/njFNhDsUCentVYJW/arcgis/rest/services/MASTER_CaseTracker_1/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=ReportDate%20asc&resultOffset=0&resultRecordCount=2000&cacheHint=true"
export const DATE_FIELD = "ReportDate";

export const STMA = 'STMA';
export const STMA_DELTA = 'STMA_DELTA';
export const STMA_PERC_DELTA = 'STMA_PERC_DELTA';
export const PERC_DELTA = "PercentDelta";

let DERIVED_COLUMNS : {[key: string]: ((row: any, rowPrev?: any) => any)} = {};

const percRound = (num: number) => Math.round(num * 1000) / 1000;

DERIVED_COLUMNS[PERC_DELTA] = (row: any) => {
    const total: number = row["TotalCases"];
    const delta: number = row["CaseDelta"];

    if (!total)
        return '';

    const percDelta = delta / total;
    return percRound(percDelta);
};


DERIVED_COLUMNS[DATE_FIELD] = (row: any) => {
    return moment(new Date(row[DATE_FIELD])).format("MM/DD/YYYY");
}



DERIVED_COLUMNS[STMA_DELTA] = (row: any, rowPrev: any) => {
    if (rowPrev && rowPrev[STMA]) {
        return (row[STMA] - rowPrev[STMA]).toString();
    }
    else {
        return '';
    }
}

DERIVED_COLUMNS[STMA_PERC_DELTA] = (row: any, rowPrev: any) => {
    if (rowPrev && rowPrev[STMA]) {
        return percRound((row[STMA] - rowPrev[STMA]) / row[STMA]);
    }
    else {
        return '';
    }
}


export const COLUMN_FIELDS = [
    DATE_FIELD,
    "TotalCases",
    "CaseDelta",
    "PercentDelta",
    STMA,
    STMA_DELTA,
    STMA_PERC_DELTA,
    "ALLE",
    "ANNE",
    "BALT",
    "BCITY",
    "CALV",
    "CARO",
    "CARR",
    "CECI",
    "CHAR",
    "DORC",
    "FRED",
    "GARR",
    "HARF",
    "HOWA",
    "KENT",
    "MONT",
    "PRIN",
    "QUEE",
    "SOME",
    "TALB",
    "WASH",
    "WICO",
    "WORC",
    "deaths",
    "deathALLE",
    "deathANNE",
    "deathBALT",
    "deathBCITY",
    "deathCALV",
    "deathCARO",
    "deathCARR",
    "deathCECI",
    "deathCHAR",
    "deathDORC",
    "deathFRED",
    "deathGARR",
    "deathHARF",
    "deathHOWA",
    "deathKENT",
    "deathMONT",
    "deathPRIN",
    "deathQUEE",
    "deathSTMA",
    "deathSOME",
    "deathTALB",
    "deathWASH",
    "deathWICO",
    "deathWORC",
];

export default () => {
    return fetch(DATA_URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let records = data['features'].map((r: any) => r['attributes']);
            return records.map((record: any, idx: number) => {
                let toRet: any = {};
                for (let field of COLUMN_FIELDS) {
                    if (DERIVED_COLUMNS[field]) {
                        toRet[field] = DERIVED_COLUMNS[field](record, (idx > 0) ? records[idx-1] : undefined);
                    }
                    else {
                        toRet[field] = record[field];
                    }
                }

                return toRet;
            })
        });
}


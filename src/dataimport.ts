const DATA_URL = "https://services.arcgis.com/njFNhDsUCentVYJW/arcgis/rest/services/MASTER_CaseTracker_1/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=ReportDate%20asc&resultOffset=0&resultRecordCount=2000&cacheHint=true"
export const DATE_FIELD = "ReportDate";

export const DERIVED_COLUMNS : {[key: string]: ((row: any) => any)} = {
    "PercentDelta": (row: any) => {
        const total: number = row["TotalCases"];
        const delta: number = row["CaseDelta"];

        if (!total)
            return '';

        const percDelta = delta / total;
        const formatted = (Math.round(percDelta * 1000) / 10) + '%';
        return formatted;
    }
};

export const COLUMN_FIELDS = [
    "TotalCases",
    "PercentDelta",
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
    "STMA",
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
            let records = data['features'];
            return records.map((recordItem: any) => {
                let record = recordItem['attributes'];
                let toRet: any = {};
                let dt = new Date(record[DATE_FIELD]);
                toRet[DATE_FIELD] = `${dt.getMonth() + 1}/${dt.getDate() + 1}/${dt.getFullYear()}`;
                for (let field of COLUMN_FIELDS) {
                    if (DERIVED_COLUMNS[field]) {
                        toRet[field] = DERIVED_COLUMNS[field](record);
                    }
                    else {
                        toRet[field] = record[field];
                    }
                }
                
                console.log(toRet);
                return toRet;
            })
        });
}


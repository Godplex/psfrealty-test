const XLSX = require("xlsx");
const path = require('path');
const _ = require('lodash');

const getPropertyByCity = (req, res) => {

    let { query } = req.query;

    const excel = XLSX.readFile(path.join(process.cwd(), "assets", "DB.xlsx"));

    let nombreHoja = excel.SheetNames;

    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);

    let parseJsonData = datos.map((e) => ({ ...e, json_data: JSON.parse((e.json_data)) }));

    let listHome = parseJsonData.filter((element) => element.city === query.replaceAll('-', ' ') && element.property_type === "RES")

    res.status(200).json(listHome.splice(0, 15))
}

export default getPropertyByCity;
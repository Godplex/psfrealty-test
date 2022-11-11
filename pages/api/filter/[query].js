const XLSX = require("xlsx");
const path = require('path');
const _ = require('lodash');
import { createRegexp } from "../../../utils/createRegexp";
import { filterStringColumns, filterNumberColumns } from "../../../utils/filterColumns";

const getFilter = async (req, res) => {

  let { query } = req.query;

  const regex = new RegExp(createRegexp(query.replaceAll(' ', '-')));

  const workbook = XLSX.readFile(path.join(process.cwd(), "assets", "DB.xlsx"));

  let worksheet = workbook.Sheets[workbook.SheetNames[0]];

  let isnum = /^\d+$/.test(query);

  let codes = [];
  let cities = [];
  let counties = [];

  if (isnum) {
    codes = filterNumberColumns(worksheet, /^I\d+/, 'code', regex);
  } else {
    cities = filterStringColumns(worksheet, /^G\d+/, 'city', regex);
    counties = filterStringColumns(worksheet, /^AD\d+/, 'county', regex);
  }

  let filter = _.union(cities, codes, counties)

  res.status(200).json(_.unionBy(filter, 'value'))
}

export default getFilter;

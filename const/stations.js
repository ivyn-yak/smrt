const Station = require("./Station.js");
const XLS = require("xlsx");
const path = require('path');

const curr = path.dirname(__filename);
const filePath = path.join(curr, 'stations.xls');
const workbook = XLS.readFile(filePath);

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const data = XLS.utils.sheet_to_json(worksheet);

const getStations = () => {
  const stations = {};
  data.forEach((stnObj) => {
    const station = new Station(
      stnObj["stn_code"].trim(),
      stnObj["mrt_station_english"].trim(),
      stnObj["mrt_station_chinese"].trim(),
      stnObj["mrt_line_english"].trim(),
      stnObj["mrt_line_chinese"].trim()
    );
    const key = station.getLine();

    if (!stations[key]) {
      stations[key] = [station];
    } else {
      stations[key].push(station);
    }
  });

  return stations;
};

const getStnEdges = () => {
  const stations = getStations();
  const stnList = [];

  for (const key in stations) {
    const line = stations[key];
    for (let i = 0; i < line.length - 1; i++) {
      const stn = line[i].name;
      const nextStn = line[i + 1].name;
      stnList.push([stn, nextStn]);
    }
  }
  console.log(stnList.length);

  return stnList;
};

module.exports = getStnEdges;

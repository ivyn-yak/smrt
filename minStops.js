const getStnEdges = require("./stations");

const stnList = getStnEdges();
function minStops(stations, start, end) {
  const adj = {};

  stations.forEach(([s1, s2]) => {
    if (!adj[s1]) adj[s1] = [];
    if (!adj[s2]) adj[s2] = [];
    adj[s1].push(s2);
    adj[s2].push(s1);
  });

  const visited = new Set();
  const queue = [[start, [start]]];
  visited.add(start);

  while (queue.length > 0) {
    const [station, path] = queue.shift();

    for (const nextStation of adj[station]) {
      if (nextStation === end) {
        return path.concat(nextStation);
      }

      if (!visited.has(nextStation)) {
        visited.add(nextStation);
        queue.push([nextStation, path.concat(nextStation)]);
      }
    }
  }

  return null;
}

console.log(minStops(stnList, "Tan Kah Kee", "Bras Basah"));

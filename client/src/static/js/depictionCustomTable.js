/* eslint-disable */
const d3 = require("d3");

//create canvas
const svg = function () {
  let w = 46;
  let h = 556;
  d3.selectAll("#CustomTable")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .append("g");
};

// create gradient
const createGradient = function (color, color1, id) {
  let defs = d3.select("g").append("defs");

  let gradient = defs
    .append("linearGradient")
    .attr("id", id)
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

  gradient
    .append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", color)
    .attr("stop-opacity", 1);

  gradient
    .append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", color1)
    .attr("stop-opacity", 1);
};
// create base
const base = function () {
  d3.selectAll("g")
    .append("rect")
    .attr("width", 44)
    .attr("height", 556)
    .style("fill", "url(#baseGradient)")
    .attr("rx", 7)
    .attr("ry", 7);
  let WeekDays = [
    { name: "Sunday", initial: "S", x: "17.5" },
    { name: "Monday", initial: "M", x: "15.5" },
    { name: "Tuesday", initial: "T", x: "17.5" },
    { name: "Wednesday", initial: "W", x: "15.5" },
    { name: "Thursday", initial: "T", x: "15.5" },
    { name: "Fryday", initial: "F", x: "17.5" },
    { name: "Saturday", initial: "S", x: "17.5" },
  ];
  for (let i = 0; i < WeekDays.length; ++i) {
    let id = i + 1;
    d3.select("#CustomTable:nth-child(" + id + ")")
      .select("g")
      .append("text")
      .text(WeekDays[i].initial)
      .style("fill", "#A0A0A0")
      .attr("x", WeekDays[i].x)
      .attr("y", 20);
    // console.log("#CustomTable:nth-child("+ id + ")")
  }
};
// create custom
const custom = function (number, startTime, endTime, name, gradientId) {
  let depictionStartTime;
  if (startTime[0] > endTime[0]) {
    depictionStartTime = startTime[0];
    startTime[0] = 0;
  } else {
    depictionStartTime = startTime[0];
  }
  let calStartTime = Number(startTime[0]) + Number(startTime[1] / 60);
  let calEndTime = Number(endTime[0]) + Number(endTime[1] / 60);
  let height = (calEndTime - calStartTime) * 22;
  let startHeight = calStartTime * 22 + 28;
  let startTextHeight = startHeight + 13;
  if (height < 22) {
    startTextHeight = startHeight + 8.5;
  }
  // console.log("calStartTime is " + calStartTime);
  // console.log("calEndTime is " + calEndTime);
  d3.select("#CustomTable:nth-child(" + number + ")")
    .select("g")
    .append("rect")
    .attr("width", "38")
    .attr("height", height)
    .attr("x", "3")
    .attr("y", startHeight)
    .style("fill", "url(#customGradient" + gradientId + ")")
    .attr("rx", "3")
    .attr("ry", "3");

  if (name.length > 6) {
    name  = name.substring(0, 5) + "…";
  }
  if (height >= 11) {
    d3.select("#CustomTable:nth-child(" + number + ")")
      .select("g")
      .append("text")
      .text(name.substring(0, 6))
      .attr("x", "5")
      .attr("y", startTextHeight)
      .style("font-size", "10")
      .style("fill", "white")
      .style("letter-spacing", "0.03em");
  }

  if (height > 44) {
    d3.select("#CustomTable:nth-child(" + number + ")")
      .select("g")
      .append("text")
      .text("" + depictionStartTime + ":" + startTime[1] + "~")
      .attr("x", "5")
      .attr("y", startTextHeight + 12)
      .style("font-size", "8")
      .style("fill", "white")
      .style("letter-spacing", "0.03em");

    d3.select("#CustomTable:nth-child(" + number + ")")
      .select("g")
      .append("text")
      .text("" + endTime[0] + ":" + endTime[1] + "")
      .attr("x", "5")
      .attr("y", startTextHeight + 12 + 10)
      .style("font-size", "8")
      .style("fill", "white")
      .style("letter-spacing", "0.03em");
  }
};

export default { svg, base, createGradient, custom };

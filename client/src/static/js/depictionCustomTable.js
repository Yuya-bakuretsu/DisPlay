/* eslint-disable */
const d3 = require("d3");

//create canvas
const svg = function () {
  var w = 46;
  var h = 556;
  d3.selectAll("#CustomTable")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .append("g");
};

// create gradient
const createGradient = function (color, color1, id) {
  var defs = d3.select("g").append("defs");

  var gradient = defs
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

const base = function () {
  d3.selectAll("g")
    .append("rect")
    .attr("width", 44)
    .attr("height", 556)
    .style("fill", "url(#baseGradient)")
    .attr("rx", 7)
    .attr("ry", 7);
  var WeekDays = [
    { name: "Sunday", initial: "S", x: "17.5" },
    { name: "Monday", initial: "M", x: "15.5" },
    { name: "Tuseday", initial: "T", x: "17.5" },
    { name: "Wendnesday", initial: "W", x: "15.5" },
    { name: "Thursday", initial: "T", x: "15.5" },
    { name: "Fryday", initial: "F", x: "17.5" },
    { name: "Saturday", initial: "S", x: "17.5" },
  ];
  for (var i = 0; i < WeekDays.length; ++i) {
    var id = i + 1;
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

const custom = function (id) {
  d3.select("#CustomTable:nth-child(1)")
    .select("g")
    .append("rect")
    .attr("width", "38")
    .attr("height", "154")
    .attr("x", "3")
    .attr("y", "28")
    .style("fill", "url(#customGradient" + id + ")")
    .attr("rx", "3")
    .attr("ry", "3");

  d3.select("#CustomTable:nth-child(1)")
    .select("g")
    .append("text")
    .text("Sleep")
    .attr("x", "7")
    .attr("y", "42")
    .style("font-size", "10")
    .style("font-weight", "300")
    .style("fill", "white")
    .style("letter-spacing", "0.03em");

  d3.select("#CustomTable:nth-child(1)")
    .select("g")
    .append("text")
    .text("23:00~")
    .attr("x", "7")
    .attr("y", "55")
    .style("font-size", "8")
    .style("fill", "white")
    .style("letter-spacing", "0.03em");

    d3.select("#CustomTable:nth-child(1)")
    .select("g")
    .append("text")
    .text("7:00")
    .attr("x", "7")
    .attr("y", "65")
    .style("font-size", "8")
    .style("fill", "white")
    .style("letter-spacing", "0.03em");
};

export default { svg, base, createGradient, custom };

/* eslint-disable */
const d3 = require("d3");

//create canvas
const svg = function () {
  var w = 46;
  var h = 536;
  d3.selectAll("#CustomTable")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .append("g")
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
  d3.selectAll("g").append("rect").attr("width", 44).attr("height", 534).style("fill", "url(#baseGradient)").attr("rx", 7).attr("ry", 7);
};

export default { svg, base, createGradient };

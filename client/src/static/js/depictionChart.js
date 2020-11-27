/* eslint-disable */
const d3 = require("d3");

// create canvas
const svg = function () {
  var w = 307;
  var h = 307;
  d3.select("#chart")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .append("g")
    .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");
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

// create shadow
const createGrooveShadow = function () {
  var defs = d3.select("svg").append("defs");

  var filter = defs
    .append("filter")
    .attr("id", "insetShadow")
    .attr("x", "-50%")
    .attr("y", "-50%")
    .attr("width", "200%")
    .attr("height", "200%");

  filter
    .append("feComponentTransfer")
    .attr("in", "SourceAlpha")
    .append("feFuncA")
    .attr("type", "table")
    .attr("tableValues", "1 0");

  filter.append("feGaussianBlur").attr("stdDeviation", 3);

  filter
    .append("feOffset")
    .attr("dx", "1")
    .attr("dy", "5")
    .attr("result", "offsetblur");

  filter
    .append("feFlood")
    .attr("flood-color", "rgba(40, 40, 60);")
    .attr("flood-opacity", "0.4")
    .attr("result", "color");

  filter.append("feComposite").attr("in2", "offsetblur").attr("operator", "in");

  filter
    .append("feComposite")
    .attr("in2", "SourceAlpha")
    .attr("operator", "in");

  filter.append("feMerge").append("feMergeNode").attr("in", "SourceGraphic");

  filter.select("feMerge").append("feMergeNode");
};

const createDropShadow = function () {
  var defs = d3.select("svg").append("defs");

  var filter = defs.append("filter").attr("id", "dropShadow");

  filter
    .append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 1);
  filter.append("feOffset").attr("dx", 2).attr("dy", 2);
  filter
    .append("feComponentTransfer")
    .append("feFuncA")
    .attr("type", "linear")
    .attr("slope", "0.15");

  var feMerge = filter.append("feMerge");

  feMerge.append("feMergeNode");
  feMerge.append("feMergeNode").attr("in", "SourceGraphic");
};

// create groove
const createGroove = function () {
  var w = 307,
    h = 307;
  var outerRadius = w / 2 - 30;
  var innerRadius = outerRadius - 60;
  var arcBackground = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(0)
    .endAngle(2 * Math.PI);

  var pathBackground = d3
    .select("g")
    .append("path")
    .attr("d", arcBackground)
    .style("fill", "url(#lightGradient)")
    .style("filter", "url(#insetShadow)");
};

// create outer and center
const createClock = function () {
  var circle = d3
    .select("g")
    .append("circle")
    .attr("r", "63.5")
    .style("fill", "url(#lightGradient)");

  var centerCircle = d3
    .select("g")
    .append("circle")
    .attr("r", "7.5")
    .style("fill", "#1f242a");

  var nowTime = new Date();

  var pointer = d3
    .select("g")
    .append("rect")
    .attr("width", 6)
    .attr("height", 45)
    .attr("rx", 2.5)
    .attr("ry", 2.5)
    .style("fill", "#1f242a")
    .attr("x", -3)
    .attr("y", -45)
    .attr("transform", "rotate(" + nowTime.getHours() * 15 + " )");

  var outerEdgeBackground = d3
    .arc()
    .innerRadius(153.5)
    .outerRadius(123.5)
    .startAngle(0)
    .endAngle(2 * Math.PI);

  var outerEdgepath = d3
    .select("g")
    .append("path")
    .attr("d", outerEdgeBackground)
    .style("fill", "url(#lightGradient)");
};

// create task
const createTask = function (startTime, endTime, code, id) {
  var w = 307,
    h = 307;
  var outerRadius = w / 2 - 30;
  var innerRadius = outerRadius - 60;
  var arcForeground = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(((2 * Math.PI) / 24) * startTime)
    .endAngle(((2 * Math.PI) / 24) * endTime);

  var pathForeground = d3
    .select("g")
    .append("path")
    .style("fill", "url(#taskGradient" + code + ")")
    .style("filter", "url(#dropShadow)")
    .attr("d", arcForeground)
    .attr("id", id);
};

export default {
  svg,
  createTask,
  createClock,
  createGroove,
  createDropShadow,
  createGrooveShadow,
  createGradient,
};

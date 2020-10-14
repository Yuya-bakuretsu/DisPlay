<template>
  <div>
    <div id='chart'></div>
  </div>
</template>
<style src="../static/Chart.css"></style>
<script>
/* eslint-disable */
import * as d3 from 'd3';
import depiction from '../static/depiction';

//data
var customs = [
  { name: 'running', startTime: '14:00', endTime: '16:00' },
  { name: 'homework', startTime: '6:45', endTime: '9:00' },
  { name: 'go to shopping', startTime: '21:00', endTime: '21:30' },
  { name: 'lunch', startTime: '12:00', endTime: '13:00' },
  { name: 'dinner', startTime: '19:00', endTime: '20:00' },
  { name: 'sleep', startTime: '23:00', endTime: '5:00' },
];

var Gradients = [
  { name: 'red', color: '#fe08b5', color1: '#ff1410' },
  { name: 'lightBlue', color: '72c3ff', color1: '61cad8' },
  { name: 'pink', color: 'ff729d', color1: 'e86789' },
  { name: 'blue', color: '#65B2FF', color1: '#5F9BE0' },
  { name: 'green', color: '#BEEAA6', color1: '#89D568' },
  { name: 'orange', color: '#FCB47E', color1: '#DE863C' },
  { name: 'purple', color: '8872ff', color1: '7861d8' },
  { name: 'lightPurple', color: '#D48BEF', color1: '#AA37DD' },
  { name: 'emerald', color: '#8BEFEF', color1: '#37DDB0' },
  { name: 'lightRed', color: '#EF8B8B', color1: '#EB5869' },
];


export default {
  name: 'Chart',
  mounted() {
    depiction.svg();

    depiction.createGradient('#fbfbff', '#ebebec', 'lightGradient');
    depiction.createGrooveShadow();
    depiction.createDropShadow();
    depiction.createGroove();


    // create task and set gradient
    for (var i = 0; i < customs.length; ++i) {
      // for test
      console.log('for is ok');

      var number = customs[i].name.charCodeAt(0);
      var code = number
        .toString()
        .split('')
        .pop();

      var start = customs[i].startTime.split(':');

      var end = customs[i].endTime.split(':');

      var startTime = (start[0] + start[1] * 0.166) * 0.1;

      var endTime = (end[0] + end[1] * 0.166) * 0.1;

      if (startTime > endTime) {
        startTime = 0;
        //if test
        console.log('if is ok');
      }

      depiction.createGradient(
        Gradients[code].color,
        Gradients[code].color1,
        'taskGradient' + code + ''
      );

      depiction.createTask(startTime, endTime, code);
    }

    depiction.createClock();
  },
  
};
</script>

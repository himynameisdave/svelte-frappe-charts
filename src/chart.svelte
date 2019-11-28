<script>
  // import { onMount, afterUpdate, onDestroy } from 'svelte';
  import { onMount } from 'svelte';
  import { Chart } from "frappe-charts/dist/frappe-charts.esm";

  /**
   *  Expected frappe-charts data
   */ 
  export let data = {
    labels: [],
    datasets: [
      {
        values: [],
      }
    ],
  };

  let chart = null;

  onMount(() => {
    console.log('hello world!');
    chart = new Chart("#chart", {
      data: data,
      type: 'line',
      height: 300,
      axisOptions: {
        xIsSeries: true,
        xAxisMode: 'tick',
      },
      lineOptions: {
        dotSize: 7,
        spline: true,
      },
      tooltipOptions: {
        formatTooltipY: d => d + 'km',
      },
      valuesOverPoints: 1,
      colors: ['#6a9ae5']
    });
  });

</script>


<div id="chart"></div>

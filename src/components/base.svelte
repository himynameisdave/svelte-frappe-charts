<script>
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";

  /**
   *  PROPS
   */ 
  export let data = {
    labels: [],
    datasets: [
      { values: [] }
    ],
    yMarkers: {},
    yRegions: [],
  };
  export let type = 'line';
  export let height = 300;
  export let axisOptions = {};
  export let barOptions = {};
  export let lineOptions = {};
  export let tooltipOptions = {};
  export let colors = [];
  export let valuesOverPoints = 0;
  export let isNavigable = false;
  export let maxSlices = 3;
  //  Allow the consumer to export the chart
  export function exportChart() {
    if (chart) {
      chart.export();
    }
  }
  
  /**
   *  COMPONENT
   */
  //  The Chart returned from frappe
  let chart = null;
  //  DOM node for frappe to latch onto
  let chartRef;

  onMount(() => {
    chart = new Chart(chartRef, {
      data,
      type,
      height,
      colors,
      axisOptions,
      barOptions,
      lineOptions,
      tooltipOptions,
      valuesOverPoints,
      isNavigable,
      maxSlices,
    });
  });

  //  Update the chart when incoming data changes
  afterUpdate(() => chart.update(data));
  
  //  Mark Chart references for garbage collection when component is unmounted
  onDestroy(() => {
    chart = null;
  });
</script>


<div bind:this={chartRef}></div>

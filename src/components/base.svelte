<script>
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import { Chart } from "frappe-charts/dist/frappe-charts.esm";

  /**
   *  PROPS
   */ 
  //  Expected data
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

  /**
   *  COMPONENT
   */
  let chart = null;

  onMount(() => {
    chart = new Chart("#chart", {
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
    });
  });

  //  Update the chart when incoming data changes
  afterUpdate(() => chart.update(data));
  //  Mark Chart references for garbage collection when component is unmounted
  onDestroy(() => {
    chart = null;
  });

</script>


<div id="chart"></div>

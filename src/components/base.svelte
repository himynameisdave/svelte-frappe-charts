<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Chart } from 'frappe-charts';

  /**
   *  PROPS
   */
  export let data: Data;
  export let title: string = '';
  export let type: ChartType = 'line';
  export let height: number = 300;
  export let animate: boolean = true;
  export let axisOptions: AxisOptions = {};
  export let barOptions: BarOptions = {};
  export let lineOptions: LineOptions = {};
  export let tooltipOptions: TooltipOptions = {};
  export let colors: string[] = [];
  export let valuesOverPoints: boolean = false;
  export let isNavigable: boolean = false;
  export let maxSlices: number = 3;

  /**
   *  COMPONENT
   */
  //  The Chart returned from frappe
  let chart: Chart | null = null;
  //  DOM node for frappe to latch onto
  let chartRef: HTMLElement;

  //  Helper HOF for calling a fn only if chart exists
  function ifChartThen(fn: Function) {
    return function ifChart(...args: any[]) {
      if (chart) {
        return fn(...args);
      }
    }
  }

  /**
   * Methods for updating / exporting the chart
   */
  //  Allow the consumer to add a data point
  export const addDataPoint = ifChartThen((label: string, valueFromEachDataset: number[], index: number) => chart?.addDataPoint(label, valueFromEachDataset, index));

  //  Allow the consumer to remove a data point
  export const removeDataPoint = ifChartThen((index: number) => chart?.removeDataPoint(index));

  //  Allow the consumer to export the chart
  export const exportChart = ifChartThen(() => chart?.export());

  //  Update the chart when incoming data changes
  const updateChart = ifChartThen((newData: Data) => chart?.update(newData));
  $: updateChart(data);

  /**
   *  Handle initializing the chart when this Svelte component mounts
   */
  onMount(() => {
    chart = new Chart(chartRef, {
      data,
      title,
      type,
      height,
      animate,
      colors,
      axisOptions,
      barOptions,
      lineOptions,
      tooltipOptions,
      valuesOverPoints,
      isNavigable,
      maxSlices,
    } as ChartOptions);
  });

  //  Mark Chart references for garbage collection when component is unmounted
  onDestroy(() => {
    chart = null;
  });
</script>


<div
  bind:this={chartRef}
  on:data-select
></div>

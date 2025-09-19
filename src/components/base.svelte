<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Chart } from 'frappe-charts';

  /**
   *  PROPS
   */
  export let data: {
    labels: string[];
    datasets: Array<{ values: number[]; name?: string }>;
    yMarkers?: Record<string, any>;
    yRegions?: Array<any>;
  } = {
    labels: [],
    datasets: [
      { values: [] }
    ],
    yMarkers: {},
    yRegions: [],
  };
  export let title: string = '';
  export let type: 'line' | 'bar' | 'axis-mixed' | 'pie' | 'percentage' | 'heatmap' = 'line';
  export let height: number = 300;
  export let animate: boolean = true;
  export let axisOptions: Record<string, any> = {};
  export let barOptions: Record<string, any> = {};
  export let lineOptions: Record<string, any> = {};
  export let tooltipOptions: Record<string, any> = {};
  export let colors: string[] = [];
  export let valuesOverPoints: number = 0;
  export let isNavigable: boolean = false;
  export let maxSlices: number = 3;
  export let radius: number = 0;
  export let discreteDomains: number = 1;

  // Event handler prop for Svelte 5 compatibility
  export let ondataselect: ((event: CustomEvent) => void) | undefined = undefined;

  /**
   *  COMPONENT
   */
  //  The Chart returned from frappe
  let chart: Chart | null = null;
  //  DOM node for frappe to latch onto
  let chartRef: HTMLDivElement;

  //  Helper HOF for calling a fn only if chart exists
  function ifChartThen<T extends any[], R>(fn: (...args: T) => R) {
    return function ifChart(...args: T): R | undefined {
      if (chart) {
        return fn(...args);
      }
    }
  }

  /**
   * Methods for updating / exporting the chart
   */
  //  Allow the consumer to add a data point
  export const addDataPoint = ifChartThen((label: string, valueFromEachDataset: number[], index?: number) =>
    chart!.addDataPoint(label, valueFromEachDataset, index)
  );

  //  Allow the consumer to remove a data point
  export const removeDataPoint = ifChartThen((index: number) => chart!.removeDataPoint(index));

  //  Allow the consumer to export the chart
  export const exportChart = ifChartThen(() => chart!.export());

  //  Update the chart when incoming data changes
  const updateChart = ifChartThen((newData: typeof data) => chart!.update(newData));
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
      radius,
      discreteDomains,
    });
  });

  //  Mark Chart references for garbage collection when component is unmounted
  onDestroy(() => {
    chart = null;
  });
</script>


<div
  bind:this={chartRef}
  ondataselect={ondataselect}
></div>

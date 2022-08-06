declare module "frappe-charts" {
    class Chart {
        constructor(container: HTMLElement, options: ChartOptions)

        addDataPoint(label: string, valueFromEachDataset: number[], index: number): void
        removeDataPoint(index: number): void
        update(data: Data): void
        export(): void
    }

}

type ChartOptions = {
    data: Data,
    title: string
    type: ChartType
    colors: string[]
    height: number
    animate: boolean
    truncateLegends: boolean
    axisOptions: AxisOptions
    tooltipOptions: TooltipOptions
    barOptions: BarOptions
    lineOptions: LineOptions
    isNavigable: boolean
    valuesOverPoints: boolean
    maxSlices: number
}

type ChartType = "line" | "bar" | "axis-mixed" | "pie" | "percentage" | "heatmap"

type AxisOptions = {
    xAxisMode?: AxisMode
    yAxisMode?: AxisMode
    xIsSeries?: boolean
}

type AxisMode = "span" | "tick"

type TooltipOptions = {
    formatTooltipX?: (d: string) => string,
    formatTooltipY?: (d: number) => string,
}

type BarOptions = {
    spaceRatio?: number
    stacked?: boolean
}

type LineOptions = {
    heatLine?: boolean
    hideLine?: boolean
    dotSize?: number
    hideDots?: boolean
    regionFill?: boolean
    spline?: boolean
}

type Data = {
    labels: string[],
    datasets: Dataset[]

    chartType?: ChartType

    yMarkers?: { label: string, value: number }[],
    yRegions?: { label: string, start: number, end: number }[]
}

type Dataset = {
    name?: string,
    values: number[]
}

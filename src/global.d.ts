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
    title: string = ""
    type: ChartType = "line"
    colors: string[]
    height: number = 240
    animate: boolean = true
    truncateLegends: boolean = false
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
    xAxisMode?: AxisMode = "span"
    yAxisMode?: AxisMode = "span"
    xIsSeries?: boolean = false
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
    heatLine?: boolean = false
    hideLine?: boolean = false
    dotSize?: number = 4
    hideDots?: boolean = false
    regionFill?: number = 0
    spline?: boolean = false
}

type Data = {
    labels: string[],
    datasets: Dataset[]

    chartType: "line" | "bar" | "axis-mixed" | "pie" | "percentage" | "heatmap"

    yMarkers?: { label: string, value: number }[],
    yRegions?: { label: string, start: number, end: number }[]
}

type Dataset = {
    name?: string,
    value: number[]
}

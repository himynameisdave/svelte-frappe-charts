<div align="center" margin="0 auto 20px">
  <h1>svelte-frappe-charts</h1>
  <p style="font-style: italic;">📈 Svelte bindings for <a href="https://frappe.io/charts">frappe-charts.</a></p>
  <div>
    <a href='https://travis-ci.org/himynameisdave/svelte-frappe-charts'>
        <img src="https://api.travis-ci.org/himynameisdave/svelte-frappe-charts.svg?branch=master" alt="Travis Badge" />
    </a>
    <a href="https://bundlephobia.com/result?p=svelte-frappe-charts">
        <img src="https://img.shields.io/bundlephobia/min/svelte-frappe-charts.svg" alt="Bundle size (minified)" />
    </a>
    <a href="https://www.npmjs.com/package/svelte-frappe-charts">
        <img src="https://img.shields.io/npm/dm/svelte-frappe-charts.svg" alt="Downloads">
    </a>
    <a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fhimynameisdave%2Fsvelte-frappe-charts?ref=badge_shield" alt="FOSSA Status">
      <img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fhimynameisdave%2Fsvelte-frappe-charts.svg?type=shield"/>
    </a>
  </div>
</div>

---


Makes it easy to use [frappe-charts](https://frappe.io/charts) in your [Svelte](https://svelte.dev/) project.

### Installation

```
yarn add svelte svelte-frappe-charts

npm i -S svelte svelte-frappe-charts
```

> **Note**: Assumes you are using `>= svelte@3.0.0`.

### Usage

Use the chart in your Svelte project with ease:

```jsx
<script>
  import Chart from 'svelte-frappe-charts';

  let data = {
    labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        values: [10, 12, 3, 9, 8, 15, 9]
      }
    ]
  };
</script>

<Chart data={data} type="line" />
```

The component API directly matches the [the configuration of `frappe-charts`](https://frappe.io/charts/docs/reference/configuration).

### Contributing

[Issues](https://github.com/himynameisdave/svelte-frappe-charts/issues/new) and pull requests are greatly welcome!

---

_✌️Created by [Dave](http://himynameisdave.com). Licenced under MIT._

'use strict'
//
;(function () {
  const ticksFont = {
    color: '#94A3B8',
    font: {
      family: 'Inter',
      size: 12
    },
    lineHeight: 16
  }

  function initChart(idNode, data, type, isStacked = true) {
    Chart.defaults.elements.bar.borderRadius = 4

    return new Chart(document.getElementById(idNode), {
      type: 'bar',
      data: {
        labels: data.map((row) => row.interval),
        datasets: type.map((it, i) => ({
          label: it.label,
          data: data.map((row) => row.count[i]),
          backgroundColor: it.color
        }))
      },
      options: {
        scales: {
          x: {
            stacked: isStacked,
            grid: {
              display: false
            },
            ticks: {
              ...ticksFont,
              maxRotation: 0,
              minRotation: 0
              // callback: function (val) {
              //   const value = this.getLabelForValue(val)
              //   const arr = value.split('-').join('\n\n\n')
              //   return arr
              // }
            }
          },
          y: {
            grid: {
              color: '#DBEAFE'
              // tickWidth: 1
            },
            ticks: {
              ...ticksFont,
              stepSize: 20
            },
            border: {
              display: false
            }
          }
        },
        barThickness: isStacked ? undefined : 14,
        maxBarThickness: isStacked ? undefined : 8,
        barPercentage: isStacked ? 0.5 : 1,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: '#ffffff', //
            titleFont: {
              family: 'Lato',
              size: 14,
              weight: 'bold'
            },
            bodyFont: {
              family: 'Inter',
              size: 12
            },
            padding: 11, //
            cornerRadius: 12,
            borderColor: '#4AA3EF40',
            borderWidth: 1,
            titleColor: '#111111',
            bodyColor: '#000000',
            displayColors: false,
            caretSize: 0
            // external(context) {
            //   const tooltipEl = document.querySelector('.pf-chart-tooltip')
            //   console.log(tooltipEl)
            //   console.log(context)

            //   if (!tooltipEl) {
            //     tooltipEl = document.createElement('div');
            //     document.body.appendChild(tooltipEl);
            // }

            //   const tooltipModel = context.tooltip
            //   if (tooltipModel.opacity === 0) {
            //     tooltipEl.style.opacity = 0
            //     return
            //   }

            //   if (tooltipModel.body)
            // }
          }
        }
      }
    })
  }

  // window.chartDeliveryAll = initChart('deliveryAll')

  window.chart = {
    legendClickHandler(btn, label, chart) {
      const datasets = chart.data.datasets
      const parent = btn.parentElement

      if (btn.classList.contains('actv')) {
        ;[...parent.children].forEach((it) => it.classList.remove('actv'))
        datasets.forEach((dataset) => (dataset.hidden = false))
      } else {
        ;[...parent.children].forEach((it) => it.classList.remove('actv'))
        datasets.forEach(
          (dataset) => (dataset.hidden = dataset.label !== label)
        )
        btn.classList.add('actv')
      }

      chart.update()
    },
    initChart
  }
})()

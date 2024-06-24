'use strict'
//
;(() => {
  const ticksFont = {
    color: '#94A3B8',
    font: {
      family: 'Inter',
      size: 12
    },
    lineHeight: 16
  }

  function initChartBar(idNode, data, type, isStacked = true) {
    Chart.defaults.elements.bar.borderRadius = 4

    return new Chart(idNode, {
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
            }
          },
          y: {
            grid: {
              color: '#DBEAFE'
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
          }
        }
      }
    })
  }

  function initChartDonut(data) {
    createRoundedDoughnut()
    return new Chart(document.getElementById(data.nodeId), {
      type: 'RoundedDoughnut',
      data: {
        datasets: [
          {
            data: data.count,
            backgroundColor: data.color,
            borderWidth: 0
          }
        ]
      },
      options: {
        cutout: 44,
        cutoutPercentage: 70,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    })
  }

  function legendClickHandler(btn, label, chart) {
    const datasets = chart.data.datasets
    const parent = btn.parentElement

    if (btn.classList.contains('actv')) {
      ;[...parent.children].forEach((it) => it.classList.remove('actv'))
      datasets.forEach((dataset) => (dataset.hidden = false))
    } else {
      ;[...parent.children].forEach((it) => it.classList.remove('actv'))
      datasets.forEach((dataset) => (dataset.hidden = dataset.label !== label))
      btn.classList.add('actv')
    }

    chart.update()
  }

  function createRoundedDoughnut() {
    class Custom extends Chart.DoughnutController {
      draw() {
        super.draw(arguments)
        const ctx = this.chart.ctx
        const arcs = this.getMeta().data
        Chart.helpers.each(arcs, function (arc, i) {
          const pArc = arcs[i === 0 ? arcs.length - 1 : i - 1]
          const pColor = pArc.options.backgroundColor

          const vm = arc.options
          const radius = (arc.outerRadius + arc.innerRadius) / 2
          const thickness = (arc.outerRadius - arc.innerRadius) / 2
          const startAngle = Math.PI - arc.startAngle - Math.PI / 2
          const angle = Math.PI - arc.endAngle - Math.PI / 2

          ctx.save()
          ctx.translate(arc.x, arc.y)

          ctx.fillStyle = i === 0 ? vm.backgroundColor : pColor
          ctx.beginPath()
          ctx.arc(
            radius * Math.sin(startAngle),
            radius * Math.cos(startAngle),
            thickness,
            0,
            2 * Math.PI
          )
          ctx.fill()

          ctx.fillStyle = vm.backgroundColor
          ctx.beginPath()
          ctx.arc(
            radius * Math.sin(angle),
            radius * Math.cos(angle),
            thickness,
            0,
            2 * Math.PI
          )
          ctx.fill()

          ctx.restore()
        })
      }
    }

    Custom.id = 'RoundedDoughnut'
    Custom.defaults = Chart.DoughnutController.defaults

    Chart.register(Custom)
  }

  window.chart = {
    initChartBar,
    initChartDonut,
    legendClickHandler
  }
})()

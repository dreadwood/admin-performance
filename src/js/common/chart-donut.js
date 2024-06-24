function initChartDonut(idNode, data, type, isStacked = true) {
  class Custom extends Chart.DoughnutController {
    draw(ease) {
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

  new Chart(document.getElementById('usersChart'), {
    type: 'RoundedDoughnut',
    data: {
      datasets: [
        {
          data: [2000, 3567, 1234],
          backgroundColor: ['#4ADE80', '#3B82F6', '#FF3C5F'],
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

document.addEventListener('DOMContentLoaded', () => {
  initChartDonut()
})

;(() => {
  const data = [
    { interval: '8:00-8:30', count: [140, 76, 18, 38, 18] },
    { interval: '8:30-9:00', count: [50, 78, 18, 38, 18] },
    { interval: '9:00-9:30', count: [50, 78, 18, 38, 18] },
    { interval: '9:30-10:00', count: [50, 78, 18, 38, 18] },
    { interval: '10:00-10:30', count: [50, 78, 18, 38, 18] },
    { interval: '10:30-11:00', count: [50, 78, 18, 38, 18] },
    { interval: '11:00-11:30', count: [50, 78, 18, 38, 18] },
    { interval: '11:30-12:00', count: [50, 78, 18, 38, 18] },
    { interval: '12:00-12:30', count: [50, 78, 18, 38, 18] },
    { interval: '12:30-13:00', count: [50, 78, 18, 38, 18] },
    { interval: '13:00-13:30', count: [8, 102, 38, 4, 78] },
    { interval: '13:30-14:00', count: [50, 78, 18, 38, 18] },
    { interval: '14:00-14:30', count: [50, 78, 18, 38, 18] },
    { interval: '14:30-15:00', count: [50, 78, 18, 38, 18] },
    { interval: '15:00-15:30', count: [50, 78, 18, 38, 18] },
    { interval: '15:30-16:00', count: [50, 78, 18, 38, 18] },
    { interval: '16:00-16:30', count: [50, 78, 18, 38, 18] }
  ]
  const type = [
    { label: '5 stars', color: '#35A642' },
    { label: '4 stars', color: '#8CC63F' },
    { label: '3 stars', color: '#FBD220' },
    { label: '2 stars', color: '#FB983C' },
    { label: '1 stars', color: '#F03840' }
  ]

  document.addEventListener('DOMContentLoaded', () => {
    window.chartTrackingFeedback = window.chart.initChart(
      'trackingFeedback',
      data,
      type,
      false
    )
  })
})()

;(() => {
  const data = [
    { interval: '8:00-8:30', count: [90, 140, 75, 18, 0] },
    { interval: '8:30-9:00', count: [80, 110, 30, 15, 0] },
    { interval: '9:00-9:30', count: [102, 104, 88, 82, 0] },
    { interval: '9:30-10:00', count: [62, 104, 60, 8] },
    { interval: '10:00-10:30', count: [58, 60, 50, 28] },
    { interval: '10:30-11:00', count: [96, 96, 50, 50] },
    { interval: '11:00-11:30', count: [95, 120, 80, 100] },
    { interval: '11:30-12:00', count: [30, 40, 30, 4] },
    { interval: '12:00-12:30', count: [30, 0, 30, 4] },
    { interval: '12:30-13:00', count: [78, 0, 18, 10] },
    { interval: '13:00-13:30', count: [68, 78, 50, 2] },
    { interval: '13:30-14:00', count: [22, 24, 40, 10, 20] },
    { interval: '14:00-14:30', count: [62, 108, 50, 10] },
    { interval: '14:30-15:00', count: [58, 58, 60, 6] },
    { interval: '15:00-15:30', count: [76, 76, 84, 15] },
    { interval: '15:30-16:00', count: [88, 90, 98, 10, 10] },
    { interval: '16:00-16:30', count: [83, 84, 85, 44] },
    { interval: '16:30-17:00', count: [110, 120, 130, 4] },
    { interval: '17:00-17:30', count: [82, 112, 120, 15] },
    { interval: '17:30-18:00', count: [140, 140, 140, 16] },
    { interval: '18:00-18:30', count: [82, 82, 120, 50] },
    { interval: '18:30-19:00', count: [8, 12, 16, 18] },
    { interval: '19:00-19:30', count: [26, 26, 30, 22] }
  ]
  const type = [
    { label: 'Opened', color: '#37CE7D' },
    { label: "Didn't Open", color: '#FF3C5F' },
    { label: 'Confirm Delivery', color: '#FFCF23' },
    { label: 'Left Feedback', color: '#16B1FF' },
    { label: 'Left Negative Feedback', color: '#275DAD' }
  ]

  document.addEventListener('DOMContentLoaded', () => {
    window.chartTrackingAnalytics = window.chart.initChart(
      'trackingAnalytics',
      data,
      type,
      false
    )
  })
})()

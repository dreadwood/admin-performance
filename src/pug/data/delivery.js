;(() => {
  const data = [
    { interval: '8:00-8:30', count: [140, 144, 156] },
    { interval: '8:30-9:00', count: [95, 110, 118] },
    { interval: '9:00-9:30', count: [240, 240, 240] },
    { interval: '9:30-10:00', count: [18, 22, 40] },
    { interval: '10:00-10:30', count: [62, 63, 68] },
    { interval: '10:30-11:00', count: [78, 78, 82] },
    { interval: '11:00-11:30', count: [95, 97, 100] },
    { interval: '11:30-12:00', count: [40, 40, 40] },
    { interval: '12:00-12:30', count: [80, 80, 60] },
    { interval: '12:30-13:00', count: [90, 90, 90] },
    { interval: '13:00-13:30', count: [45, 50, 55] },
    { interval: '13:30-14:00', count: [22, 24, 40] },
    { interval: '14:00-14:30', count: [21, 22, 40] },
    { interval: '14:30-15:00', count: [58, 58, 60] },
    { interval: '15:00-15:30', count: [76, 76, 84] },
    { interval: '15:30-16:00', count: [88, 90, 98] },
    { interval: '16:00-16:30', count: [83, 84, 85] },
    { interval: '16:30-17:00', count: [110, 120, 130] },
    { interval: '17:00-17:30', count: [82, 112, 120] },
    { interval: '17:30-18:00', count: [140, 140, 140] },
    { interval: '18:00-18:30', count: [82, 82, 120] },
    { interval: '18:30-19:00', count: [8, 12, 16] },
    { interval: '19:00-19:30', count: [26, 26, 30] },
    { interval: '19:30-20:00', count: [0, 10, 20] },
    { interval: '20:00-20:30', count: [44, 45, 50] },
    { interval: '20:30-21:00', count: [64, 68, 68] },
    { interval: '21:00-21:30', count: [24, 0, 0] },
    { interval: '21:30-22:00', count: [44, 48, 52] },
    { interval: '22:00-22:30', count: [8, 0, 10] },
    { interval: '22:30-23:00', count: [21, 23, 25] },
    { interval: '23:00-23:30', count: [10, 11, 12] },
    { interval: '23:30-0:00', count: [6, 0, 0] },
    { interval: '0:00-0:30', count: [16, 17, 20] },
    { interval: '0:30-1:00', count: [2, 3, 5] },
    { interval: '1:00-1:30', count: [2, 3, 5] },
    { interval: '1:30-2:00', count: [16, 17, 20] }
  ]
  const type = [
    { label: 'On time', color: '#37CE7D' },
    { label: 'Early', color: '#4AA3EF' },
    { label: 'Late', color: '#FF3C5F' }
  ]

  document.addEventListener('DOMContentLoaded', () => {
    window.chartDeliveryAll = window.chart.initChart('deliveryAll', data, type)
  })
})()

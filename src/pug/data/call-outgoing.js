;(() => {
  const data = [
    { interval: '8:00-8:30', count: [130, 140, 155] },
    { interval: '8:30-9:00', count: [85, 115, 95] },
    { interval: '9:00-9:30', count: [124, 124, 124] },
    { interval: '9:30-10:00', count: [18, 40, 18] },
    { interval: '10:00-10:30', count: [62, 65, 62] },
    { interval: '10:30-11:00', count: [75, 78, 75] },
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
    { interval: '18:00-18:30', count: [82, 0, 120] },
    { interval: '18:30-19:00', count: [8, 12, 0] },
    { interval: '19:00-19:30', count: [14, 18, 0] },
    { interval: '19:30-20:00', count: [30, 36, 0] },
    { interval: '20:00-20:30', count: [0, 18, 0] },
    { interval: '20:30-21:00', count: [42, 50, 0] },
    { interval: '21:00-21:30', count: [64, 0, 0] },
    { interval: '21:30-22:00', count: [24, 0, 0] },
    { interval: '22:00-22:30', count: [44, 52, 0] },
    { interval: '22:30-23:00', count: [21, 23, 0] },
    { interval: '23:00-23:30', count: [10, 11, 0] },
    { interval: '23:30-0:00', count: [6, 0, 0] },
    { interval: '0:00-0:30', count: [16, 17, 0] },
    { interval: '0:30-1:00', count: [2, 3, 0] },
    { interval: '1:00-1:30', count: [2, 3, 0] },
    { interval: '1:30-2:00', count: [16, 17, 0] }
  ]
  const type = [
    { label: 'Successful call', color: '#37CE7D' },
    { label: 'Voicemail', color: '#FFCF23' },
    { label: 'Unreachable', color: '#FF3C5F' }
  ]

  document.addEventListener('DOMContentLoaded', () => {
    window.chartCallIncome = window.chart.initChart('callOutgoing', data, type)
  })
})()

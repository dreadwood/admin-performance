'use strict'
//
function initPfPlayer(player) {
  if (!player instanceof Element) {
    console.error('A suitable HTMLElement for the player is required')
    return
  }

  const timelineEl = player.querySelector('.pf-player__timeline')
  const timeEl = player.querySelector('.pf-player__time')
  const infoEl = player.querySelector('.pf-player__info')

  if (!timelineEl || !timeEl || !infoEl) {
    console.error(
      generateError([
        '.pf-player__timeline',
        '.pf-player__time',
        '.pf-player__info'
      ])
    )
    return
  }

  const dropMenu = player.querySelector('.pf-player__menu-drop')
  const setMenu = player.querySelector('.pf-player__menu-set')
  const speedMenu = player.querySelector('.pf-player__menu-speed')

  if (!dropMenu || !setMenu || !speedMenu) {
    console.error(
      generateError([
        '.pf-player__menu-drop',
        '.pf-player__menu-set',
        '.pf-player__menu-speed'
      ])
    )
    return
  }

  const trackVolume = document.querySelector('.pf-player__line')
  const progressVolume = document.querySelector('.pf-player__line-progress')

  if (!trackVolume || !progressVolume) {
    console.error(
      generateError(['.pf-player__line', '.pf-player__line-progress'])
    )
    return
  }

  const playBtn = player.querySelector('.pf-player__btn-play')
  const volumeBtn = player.querySelector('.pf-player__btn-volume')
  const menuBtn = player.querySelector('.pf-player__btn')
  const speedBtns = player.querySelectorAll('.pf-player__speed-btn')
  const menuSpeedBtn = player.querySelector('.pf-player__set-btn--speed')
  const downloadBtn = player.querySelector('.pf-player__set-btn--download')

  if (
    !playBtn ||
    !volumeBtn ||
    !menuBtn ||
    speedBtns.length === 0 ||
    !menuSpeedBtn ||
    !downloadBtn
  ) {
    console.error(
      generateError([
        '.pf-player__btn-play',
        '.pf-player__btn-volume',
        '.pf-player__btn',
        '.pf-player__speed-btn',
        '.pf-player__set-btn--speed',
        '.pf-player__set-btn--download'
      ])
    )
    return
  }

  if (!player.dataset.audio) {
    console.error('The player does not have a data-audio attribute specified')
    return
  }

  const wavesurfer = WaveSurfer.create({
    container: timelineEl,
    waveColor: player.dataset.colorWave || '#96BFE2',
    progressColor: player.dataset.colorProgress || '#4AA3EF',
    url: player.dataset.audio,
    height: 30,
    cursorWidth: 2
  })

  volumeHandler()

  playBtn.addEventListener('click', () => {
    if (playBtn.classList.contains('playing')) {
      wavesurfer.pause()
      playBtn.classList.remove('playing')
    } else {
      wavesurfer.play()
      playBtn.classList.add('playing')
    }
  })

  volumeBtn.addEventListener('click', () => {
    if (volumeBtn.classList.contains('mute')) {
      wavesurfer.setMuted(false)
      volumeBtn.classList.remove('mute')
    } else {
      wavesurfer.setMuted(true)
      volumeBtn.classList.add('mute')
    }
  })

  menuBtn.addEventListener('click', () => {
    if (dropMenu.classList.contains('show')) {
      closeMenu()
    } else {
      openMenu()
    }
  })

  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a')

    link.href = player.dataset.audio
    link.download = player.dataset.fileName || 'audio_voice.mp3'
    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)
    closeMenu()
  })

  menuSpeedBtn.addEventListener('click', () => {
    openMenuSpeed()
  })

  speedBtns.forEach((el) =>
    el.addEventListener('click', (evt) => {
      closeMenu()

      speedBtns.forEach((btn) => btn.classList.remove('actv'))
      evt.target.classList.add('actv')

      const speed = +evt.target.textContent.replace(/,/g, '.')
      wavesurfer.setPlaybackRate(speed)
    })
  )

  wavesurfer.on('click', () => {
    wavesurfer.play()
    playBtn.classList.add('playing')
  })

  wavesurfer.on('timeupdate', (duration) => {
    timeEl.textContent = getTime(duration)
  })

  wavesurfer.on('ready', (duration) => {
    timeEl.textContent = getTime(duration)
    infoEl.classList.add('hide')
    timelineEl.classList.remove('hide')
  })

  wavesurfer.on('error', errorHandler)
  wavesurfer.on('destroy', errorHandler)

  function openMenu() {
    speedMenu.classList.remove('show')
    setMenu.classList.add('show')
    dropMenu.classList.add('show')
  }
  function closeMenu() {
    speedMenu.classList.remove('show')
    setMenu.classList.add('show')
    dropMenu.classList.remove('show')
  }
  function openMenuSpeed() {
    speedMenu.classList.add('show')
    setMenu.classList.remove('show')
    dropMenu.classList.add('show')
  }

  function getTime(duration) {
    const dur = Math.ceil(duration)
    const sec = dur % 60
    const min = (dur - sec) / 60

    return `${min}:${sec.toString().padStart(2, '0')}`
  }

  function errorHandler() {
    infoEl.textContent = 'Error'

    infoEl.classList.remove('hide')
    timelineEl.classList.add('hide')
  }

  function generateError(selectors) {
    const str = selectors.map((it) => `"${it}"`).join(' or ')
    return `There are not enough elements with selectors ${str} in the player`
  }

  function volumeHandler() {
    let isDragging = false

    trackVolume.addEventListener('click', trackHandler)

    trackVolume.addEventListener('mousedown', () => {
      isDragging = true
    })

    document.addEventListener('mouseup', () => {
      isDragging = false
    })

    trackVolume.addEventListener('mousemove', (evt) => {
      if (!isDragging) return
      trackHandler(evt)
    })

    function trackHandler(evt) {
      const rect = trackVolume.getBoundingClientRect()
      const offsetX = evt.clientX - rect.left
      const trackWidth = rect.width
      let newLeft = offsetX

      if (newLeft < 0) {
        newLeft = 0
      } else if (newLeft > trackWidth) {
        newLeft = sliderWidth
      }

      const ratio = newLeft / trackWidth
      console.log(ratio)

      if (ratio === 0) {
        volumeBtn.classList.add('mute')
      } else {
        volumeBtn.classList.remove('mute')
      }

      progressVolume.style.width = `${ratio * 100}%`
    }
  }

  return wavesurfer
}

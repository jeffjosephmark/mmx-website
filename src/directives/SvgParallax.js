function createOnMouseMove (el) {
  return function onMouseMove (e) {
    let { parallax } = el

    parallax.offsetX = e.clientX / (window.innerWidth / 2 - 180)
    parallax.offsetX = Math.min(parallax.offsetX, 1)
    parallax.offsetY = e.clientY / window.innerHeight

    window.requestAnimationFrame(parallax.onRender)
  }
}

function createOnRender (el) {
  return function onRender () {
    let { parallax } = el
    let imageWidth = el.getAttribute('width')
    let imageHeight = el.getAttribute('height')
    let svgWidth = 355
    let svgHeight = 730
    let x = (svgWidth - imageWidth) * parallax.offsetX // (1 - parallax.offsetX)
    let y = (svgHeight - imageHeight) * parallax.offsetY // (1 - parallax.offsetY)

    el.setAttribute('x', x)
    el.setAttribute('y', y)
  }
}

export default {
  bind (el) {
    el.parallax = {
      offsetX: 1,
      offsetY: 0.5,
      onMouseMove: createOnMouseMove(el),
      onRender: createOnRender(el)
    }
  },
  inserted (el) {
    let { parallax } = el
    let $header = document.querySelector('header')

    if ($header) {
      $header.addEventListener('mousemove', parallax.onMouseMove, { passive: true })
    }

    parallax.onRender()
  },
  unbind (el) {
    let $header = document.querySelector('header')

    if ($header) {
      $header.removeEventListener('mousemove', el.parallax.onMouseMove)
    }
  }
}

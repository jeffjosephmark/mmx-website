function createOnMouseMove (el) {
  return function onMouseMove (e) {
    if (!el.clientRect) {
      return
    }

    let centerX = el.clientRect.x + (el.clientRect.width / 2)
    let centerY = el.clientRect.y + (el.clientRect.height / 2)
    let diffX = Math.max(-200, Math.min(200, e.clientX - centerX))
    let diffY = Math.max(-200, Math.min(200, e.clientY - centerY))
    let x = -(diffX / 10)
    let y = -(diffY / 10)

    el.setAttribute('transform', `translate(${x},${y})`)
  }
}

export default {
  bind (el) {
    // let $header = document.querySelector('header')

    // if ($header) {
    //   $header.addEventListener('mousemove', el._onMouseMove, { passive: true })
    // }

    el._onMouseMove = createOnMouseMove(el)

    document.body.addEventListener('mousemove', el._onMouseMove, { passive: true })
  },
  inserted (el) {
    el.clientRect = el.getBoundingClientRect()
  },
  unbind (el) {
    document.body.removeEventListener('mousemove', el._onMouseMove)
  }
}

const pics: Array<string> = [
  './images/pic1.jpg',
  './images/pic2.jpg',
  './images/pic3.jpg',
]

const img: HTMLImageElement = document.querySelector('img')!
let cnt: number = 0

$('#next-button').on('click', (e) => {
  $('img').animate({ left: 100, opacity: 0 }, 150, () => {
    cnt++

    if (cnt > 2) {
      cnt = 0
    }
    img.src = pics[cnt]
    $('img').css('left', -100)
    $('img').animate({ left: 0, opacity: 1 }, 150)
  })
})

$('#prev-button').on('click', (e) => {
  $('img').animate({ left: -100, opacity: 0 }, 150, () => {
    cnt--

    if (cnt < 0) {
      cnt = 2
    }
    img.src = pics[cnt]
    $('img').css('left', 100)
    $('img').animate({ left: 0, opacity: 1 }, 150)
  })
})

const cssFile = [
  './css/style1/style1.css',
  './css/style8/style8.css',
  './css/style9/style9.css',
  './css/style10/style10.css',
  './css/style2/style2.css',
  './css/style3/style3.css',
  './css/style4/style4.css',
  './css/style5/style5.css',
  './css/style6/style6.css',
  './css/style7/style7.css'
]

const copyright = [
  { href: 'http://www.csszengarden.com/213/', title: 'Under the Sea!', author: 'ERIC STOLTZ', country: 'United States'},
  { href: 'http://www.csszengarden.com/199/', title: 'CSS ZEN ARMY', author: 'CARL DESMOND', country: 'United States'},
  { href: 'http://www.csszengarden.com/194/', title: 'Dark Rose', author: 'ROSE FU', country: 'United States'},
  { href: 'http://www.csszengarden.com/207/', title: 'Kyoto Forest', author: 'JOHN POLITOWSKI', country: 'United States'},
  { href: 'http://www.csszengarden.com/006/', title: 'Wicked Grove', author: 'D. KEITH ROBINSON', country: 'United States'},
  { href: 'http://www.csszengarden.com/007/', title: 'Deep Thoughts', author: 'JASON ESTES', country: 'United States'},
  { href: 'http://www.csszengarden.com/100/', title: '15 Petals', author: 'ERIC MEYER & DAVE SHEA', country: 'United States'},
  { href: 'http://www.csszengarden.com/102/', title: 'Revolution!', author: 'DAVID HELLSING', country: 'Sweden'},
  { href: 'http://www.csszengarden.com/104/', title: 'Invitation', author: 'BRAD DAILY', country: 'United States'},
  { href: 'http://www.csszengarden.com/110/', title: 'Perfume de Gardenias', author: 'ARMANDO SOSA', country: 'Mwxico'},
  
]

let index = 0

$(() => {
  check()
})

$('a[href]').attr('href', '#')

$('#prevCss').click(() => {
  index--
  change()
})

$('#nextCss').click(() => {
  console.log('hey')
  index++
  change()
})

const change = () => {
  $('#cssLink').attr('href', cssFile[index])
  
  const detail = copyright[index]
  let content = '<p>You can visit the origin design '
  content += `<a href="${detail.href}">${detail.title}</a>`
  content += `, by ${detail.author}, ${detail.country}`
  $('.extra3').html(content)

  check()
}

const check = () => {
  if (!index) 
    $('#prevCss').css('visibility', 'hidden')
  else
    $('#prevCss').css('visibility', 'visible')
  
  if (index === cssFile.length - 1) 
    $('#nextCss').css('visibility', 'hidden')
  else
    $('#nextCss').css('visibility', 'visible')
}
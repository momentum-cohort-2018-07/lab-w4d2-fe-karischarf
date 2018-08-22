import request from 'superagent'

request.get('https://api.github.com/users/karischarf')
  .then(response => {
    console.log(response)
    displayInfo(response.body)
  })

function displayInfo (results) {
  let output = ` 
  <header>
  <h1 class="name">${results.name}</h1>
  </header>

  <div class="container zigzag">

  <div class="basics">
  <h2>basics</h2>

  <ul>
  <li class="url"> ${results.url} </li>
  <li class="location"> ${results.location} </li>
  </ul>

  </div>

  <div class="story"> 
  <h2 id="story"> story </h2>
  ${results.bio}</div>

  <img class="photo" src= "${results.avatar_url}">

  </div>
  
`
  document.getElementById('output').innerHTML = output
}

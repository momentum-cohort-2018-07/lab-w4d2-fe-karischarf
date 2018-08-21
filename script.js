import request from 'superagent'

request
  .get('https://api.github.com/users/karischarf')
  .then(function (response) {
    console.log(response)
  })

//   let pageContents = 

// `
//   <div>${pageContents.name}</div>

//  ` 
  

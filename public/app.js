// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.get('/github/user/repos')
  .then(data => console.log(JSON.parse(data.text)))
  .catch(error => console.log(error.message))
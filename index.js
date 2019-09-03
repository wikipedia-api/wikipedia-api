document.getElementById('search').oninput = function(){
  let http = new XMLHttpRequest()
  let url = 'https://nl.wikipedia.org/w/api.php?format=json&action=opensearch&limit=5&search=' + this.value
  http.open('get', url)
  http.send()
  http.onreadystatechange = (e) => {
    console.log(http.responseText)
  }
}

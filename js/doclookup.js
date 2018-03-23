export function docLookup (isName, inputString) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    // if(isName) {
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=`+inputString+`&location=45.52%2C-122.682%2C100&skip=0&limit=10&user_key=`+process.env.exports.apiKey;
    // } else {
      // let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${inputString}&location=45.52%2C-122.682%2C100&skip=0&limit=10&user_key=`+process.env.exports.apiKey;
    // }
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = JSON.parse(response);
    console.log(body);
    $('.show-results').empty();
  });
  return;
}

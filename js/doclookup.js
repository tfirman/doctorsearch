export function docLookup (isName, inputString) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = "";
    if(isName) {
      url = `https://api.betterdoctor.com/2016-03-01/doctors?name=`+inputString+`&location=45.52%2C-122.682%2C100&skip=0&limit=10&user_key=`+process.env.exports.apiKey;
    } else {
      url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${inputString}&location=45.52%2C-122.682%2C100&skip=0&limit=10&user_key=`+process.env.exports.apiKey;
    }
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
    for (let i=0; i <body.data.length; i++){
      $('.show-results').append("<h5>"+body.data[i].profile.first_name+" "+body.data[i].profile.last_name+"</h5>");
      $('.show-results').append(body.data[i].practices[0].visit_address.street+" "+body.data[i].practices[0].visit_address.city+", "+body.data[i].practices[0].visit_address.state+"<br>");
      $('.show-results').append("Phone: "+body.data[i].practices[0].phones[0].number+"<br>");
      $('.show-results').append("Website: "+body.data[i].practices[0].website+"<br>");
      if(body.data[i].practices[0].accepts_new_patients) {
        $('.show-results').append("Is accepting new patients <br><br>");
      } else {
        $('.show-results').append("Is not accepting new patients <br><br>");
      }
    };
  });
  return;
}

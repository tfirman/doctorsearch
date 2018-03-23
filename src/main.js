import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../.env"
import "./styles.css"

$(document).ready(function() {
  $('#search-name').click(function() {
    let name = $('#name').val();
    $('#name').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.52%2C-122.682%2C100&skip=0&limit=10&user_key=`+process.env.apiKey;
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

  });
});

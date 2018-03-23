import { docLookup, listSpecialties } from '../js/docLookup';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../.env"
import "./styles.css"

$(document).ready(function() {
  $('#search-name').click(function() {
    let name = $('#name').val();
    $('#name').val("");
    var e = document.getElementById("portland");
    var isOR = (e.options[e.selectedIndex].value == "OR");
    docLookup (true, name, isOR, 0);
  });
  $('#search-issue').click(function() {
    let issue = $('#issue').val();
    $('#issue').val("");
    var e = document.getElementById("portland");
    var isOR = (e.options[e.selectedIndex].value == "OR");
    docLookup (false, issue, isOR, 0);
  });
  $('#list-specialties').click(function() {
    listSpecialties();
  });
});

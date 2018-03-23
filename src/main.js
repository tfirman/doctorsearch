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
    docLookup (true, name);
  });
  $('#search-issue').click(function() {
    let issue = $('#issue').val();
    $('#issue').val("");
    docLookup (false, issue);
  });
  $('#list-specialties').click(function() {
    listSpecialties();
  });
});

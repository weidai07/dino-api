import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {

  $('#submit-button').click(function() {

    let request = new XMLHttpRequest();
    let url = 'http://dinoipsum.herokuapp.com/api/?format=html&words=10&paragraphs=3';

    request.open('GET', url, true);
    request.onload = function() {
      if (this.status === 200) {
        document.querySelector('#display-api').innerHTML = this.response;
      } else {
        console.log('Where did all the dinosaurs go?');
      }
    };
    request.send();

  });
});

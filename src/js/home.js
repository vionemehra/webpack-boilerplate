import $ from 'jquery';
import _ from 'lodash';



import "../scss/home.scss"; 
import "../assets/home/avatar.png"; 
import '../assets/home/banner.mp4';
// [1, 2, 3].map(n => n + 1);


console.log(_.join(['Hello', 'webpack'], ' '));

$('.avatar').on('click', function() {
  alert('vivek');
})


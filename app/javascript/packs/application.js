// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import "@fortawesome/fontawesome-free/css/all.css";
window.$ = $

require('jquery-ui');

// jquery-ui theme
require.context('file-loader?name=[path][name].[ext]&context=node_modules/jquery-ui-dist!jquery-ui-dist', true,    /jquery-ui\.css/ );
require.context('file-loader?name=[path][name].[ext]&context=node_modules/jquery-ui-dist!jquery-ui-dist', true,    /jquery-ui\.theme\.css/ );


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

window.create = (e, link) => {
  e.preventDefault();
  $.ajax({
    url: link.href,
    method: 'get',
    success: function(response) {
       $('#renderFolder').html(response)
    }
  })
}

window.close_window = (span) => {
  $(span).closest('.window').remove()
  $('#renderFolder')
    .addClass('render_folder')
    .removeClass('render_folder_full')
}

window.bigger_window = (span) => {
  const div = $(span).closest('.window');
  $('#renderFolder')
    .removeClass('render_folder')
    .addClass('render_folder_full');
}

window.open_folder = (folder) => {
  const url = $(folder).attr('class').split(' ')[0];
  $.ajax({
    url: url,
    method: 'get',
    success: function(response) {
      $('#renderFolder').html(response)
    }
  })
}
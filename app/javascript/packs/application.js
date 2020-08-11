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
  const div = $(span).closest('.render_full')
  div
    .addClass('render_window')
    .removeClass('render_full')
  $(span).closest('.window').remove()
}

window.bigger_window = (span) => {
  let div = $(span).closest('.render_window')
  if (div.length) {
    div
      .removeClass('render_window')
      .addClass('render_full');
  } else {
    div =  $(span).closest('.render_full')
    div
      .removeClass('render_full')
      .addClass('render_window');
  }

}

window.open_folder = (folder) => {
  let url = $(folder).attr('class').split(' ')[0];
  if (url === 'trash') { url = 'home/trash' };
  if (url === 'system_disk') { url = 'home/system_disk' };
  $.ajax({
    url: url,
    method: 'get',
    success: function(response) {
      $('#renderFolder').html(response)
    }
  })
}

window.open_terminal = () => {
  $.ajax({
    url: '/home/terminal',
    method: 'get',
    success: function(response) {
      $('#renderTerminal').html(response);
      const string = "Hi!\
      I am Mat and this is my notebook. I'm working as a Full Stack Ruby on Rails Developer and here is my journey.\
      If I struggle with something or learn something new, I write it down here.\
      My Blog is the result of a little bit more research.\
      The good to know stuff is a reminder of stuff that I'm using and I do not remember how.\
      And finally my Coding Challenges. On my journey to learn to code I used a lot of different challenges,\
      and here are some of them. HAVE FUN!"
      const text = string.split(' ')
      var index = 0;
      let interval = setInterval(function(){
          $('.terminal_text').append(text[index++]).append(' ')
          if (index == text.length) {
            clearInterval(interval)
          }
      }, 100)
    }
  })
}

window.show_under_nav = (div) => {
  const className = $(div).attr('class').split('_')[0] + '_under'
  if ($('.' + className).css('display') === 'none') {
    $('.apple_under, .file_under, .edit_under, .view_under, .special_under').hide();
    $('.' + className).toggle();
  } else {
    $('.' + className).toggle();
  }
}
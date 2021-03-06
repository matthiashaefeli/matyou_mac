// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
window.$ = $
require("jquery-ui")
// import "@fortawesome/fontawesome-free/css/all.css";
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesome } from '@fortawesome/vue-fontawesome'

library.add(far, fas, faTwitter)

dom.watch()


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
      if (url.includes('trash')) {
        if (!$('.notes').text().includes('Know')) {
          add_text('Good To Know')
        };
        if (!$('.blogs').text().includes('Blog')) {
          add_text('Blog')
        };
        if (!$('.challenges').text().includes('Challenges')) {
          add_text('Challenges')
        };
        if (!$('.terminal').text().includes('Terminal')) {
          add_text('Terminal')
        };
        if (!$('.system_disk').text().includes('System')) {
          add_text('System Disk')
        };
      }
    }
  })
}

function add_text(text) {
  const td_text = $('<td></td>');
  const td_date = $('<td></td>');
  const td_size = $('<td></td>');
  const tr = $('<tr></tr>');
  td_text.html(text)
  td_date.html(new Date(Date.now()).toLocaleString().split(',')[0].split('/').join('-'))
  td_size.html('1,234 bytes')
  tr.append(td_text).append(td_date).append(td_size)
  $('.trash_table').find('tbody').append(tr)
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
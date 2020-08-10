class HomeController < ApplicationController
  def terminal
    @title = 'Terminal'
    render layout: 'terminal_window'
  end
end

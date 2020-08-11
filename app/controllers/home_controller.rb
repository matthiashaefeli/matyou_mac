class HomeController < ApplicationController
  def terminal
    @title = 'Terminal'
    render layout: 'terminal_window'
  end

  def trash
    @title = 'Trash'
    render layout: 'window'
  end
end

class HomeController < ApplicationController
  def terminal
    @title = 'Terminal'
    render layout: 'window'
  end
end

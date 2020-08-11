class HomeController < ApplicationController
  def terminal
    @title = 'Terminal'
    render layout: 'terminal_window'
  end

  def trash
    @title = 'Trash'
    render layout: 'window'
  end

  def system_disk
    @title = 'System Disk'
    @count = '1,000,000,000'
    @infolder = 100
    @available = 0
    render layout: 'window'
  end

  def shut
    render layout: false
  end
end

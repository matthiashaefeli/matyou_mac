class NotesController < ApplicationController
  def index
    # Todo: maybe order that with create at newest or whatever
    @notes = Note.all
    @title = 'Good To Know'
    @count = @notes.count
    @infolder = @notes.count * 256
    @available = 256
    render layout: 'window'
  end
end

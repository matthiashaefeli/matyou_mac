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

  def new
    @note = Note.new
    @title = 'Good To Know'
    @count = ''
    @infolder = ''
    @available = ''
    render layout: 'window'
  end

  def create
    note = Note.new(note_params)
    note.save
    redirect_to root_path
  end

  def destroy
    Note.find(params[:id]).delete
    redirect_to root_path
  end

  private

  def note_params
    params.require(:note).permit(:title, :note_file)
  end
end

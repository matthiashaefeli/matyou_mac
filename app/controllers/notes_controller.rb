class NotesController < ApplicationController
  before_action :user_logged_in?, except: :index

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
    note.note_file.attach(params[:note][:note_file])
    note.save
    redirect_to root_path
  end

  def destroy
    note = Note.find(params[:id])
    note.note_file.purge
    note.delete
    redirect_to root_path
  end

  private

  def note_params
    params.require(:note).permit(:title)
  end
end

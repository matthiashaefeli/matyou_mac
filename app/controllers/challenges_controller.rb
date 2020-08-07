class ChallengesController < ApplicationController
  include UsersHelper
  before_action :user_logged_in?, except: :index

  def index
    # Todo: maybe order that with create at newest or whatever
    @challenges = Challenge.all
    @title = 'Challenges'
    @count = @challenges.count
    @infolder = @challenges.count * 256
    @available = 256
    render layout: 'window'
  end

  def new
    @challenge = Challenge.new
    @title = 'Challenges'
    @count = ''
    @infolder = ''
    @available = ''
    render layout: 'window'
  end

  def create
    challenge = Challenge.new(challenge_params)
    challenge.save
    redirect_to root_path
  end

  def destroy
    Challenge.find(params[:id]).delete
    redirect_to root_path
  end

  private

  def challenge_params
    params.require(:challenge).permit(:title, :link)
  end
end

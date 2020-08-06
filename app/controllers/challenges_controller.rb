class ChallengesController < ApplicationController
  def index
    # Todo: maybe order that with create at newest or whatever
    @challenges = Challenge.all
    @title = 'Challenges'
    @count = @challenges.count
    @infolder = @challenges.count * 256
    @available = 256
    render layout: 'window'
  end
end

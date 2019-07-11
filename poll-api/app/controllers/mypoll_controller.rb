class MypollController < ApplicationController
  def index
    json_response @current_user.polls
  end
end

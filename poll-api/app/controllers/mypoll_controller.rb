class MypollController < ApplicationController
  def index
    json_response(@current_user.polls.as_json(only: [:id, :name, :user_id]))
  end
end

class PollsController < ApplicationController
  before_action :set_poll, only: [ :show, :update, :destroy]

  # GET /polls
  def index
    @polls = Poll.all
    json_response(@polls.as_json(only: [:id, :name, :user_id]))
  end
  # POST /polls
  def create
    @poll = Poll.new(poll_params)

    if @poll.save
      render json: poll_params
    end
  end

  # GET /polls/:id
  def show

    candidates = @poll.candidates.as_json(only: [:id, :name, :count])
    data = {id:@poll.id,name:@poll.name,user_id:@poll.user_id,candidates:candidates}
    json_response(data)
  end
   # PUT /polls/:id
  def update
    @poll.update(poll_params)
    head :no_content
  end

  # DELETE /polls/:id
  def destroy
    @poll.destroy
    head :no_content
  end

  private

  def poll_params
    # whitelist params
    params.require(:poll).permit(:name, :user_id, candidates_attributes: [:id, :name, :count, :_destroy]).merge(user_id: @current_user.id)
  end


  def set_poll
    @poll = Poll.find(params[:id])
  end
end

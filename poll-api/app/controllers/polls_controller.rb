class PollsController < ApplicationController
  before_action :set_poll, only: [:show, :update, :destroy]

  # GET /polls
  def index
    @polls = Poll.all
    json_response(@polls)
  end

  # POST /polls
  def create
    @poll = Poll.create!(poll_params)
    json_response(@poll)
  end

  # GET /polls/:id
  def show
    data = {id:@poll.id,name:@poll.name,candidates:@poll.candidates}
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
    params.permit(:name,:user_id)
  end
  def set_poll
    @poll = Poll.find(params[:id])
  end
end

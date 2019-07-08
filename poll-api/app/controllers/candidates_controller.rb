class CandidatesController < ApplicationController
  before_action :set_poll
  before_action :set_poll_candidate, only: [:show, :update, :destroy]

  # GET /polls/:poll_id/candidates
  def index
    json_response(@poll.candidates.as_json(
      only: [:id, :name, :count],
    ))
  end

  # GET /polls/:poll_id/candidates/:id
  def show
    #json_response(@candidate)
   # respond_with @poll.as_json
   json_response(@candidate.as_json(
    only: [:id, :name, :count],
  ))
  end

  # POST /polls/:poll_id/candidates
  def create
    @poll.candidates.create!(candidate_params)

  end
  # PUT /polls/:poll_id/candidates/:id
  def update
    @candidate_count = @candidate.count
    @candidate.update(count:@candidate_count +1)
    render json: @candidate.as_json(
      only: [:id, :name, :count])
  end

  # DELETE /polls/:poll_id/candidates/:id
  def destroy
    @candidate.destroy
    head :no_content
  end

  private

  def candidate_params
    params.permit(:name, :count)
  end

  def set_poll
    @poll = Poll.find(params[:poll_id])
  end

  def set_poll_candidate
    @candidate = @poll.candidates.find_by!(id: params[:id]) if @poll
  end

end

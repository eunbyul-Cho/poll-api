class CandidatesController < ApplicationController
  before_action :set_poll_candidate, only: [:show, :update, :destroy]
  before_action :set_poll




  # GET candidates/:id
  def show
   json_response(@candidate.as_json( only: [:id, :name, :count]))
  end

  # POST /polls/:poll_id/candidates
  def create
   Poll.find(params[:poll_id]).candidates.create!(candidate_params)
    render json:params
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
    params.permit(:id, :name, :count)
  end

  def set_poll
    @poll = @candidate.poll if @candidate
  end

  def set_poll_candidate
    @candidate =  Candidate.find_by(id: params[:id])
  end

end

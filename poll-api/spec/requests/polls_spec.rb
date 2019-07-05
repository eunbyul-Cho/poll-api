require 'rails_helper'

RSpec.describe 'Polls API', type: :request do
  # add polls owner
  let(:user) { create(:user) }
  let!(:polls) { create_list(:polls, 10, user_id:1 ) }
  let(:poll_id) { polls.first.id }
  # authorize request
  let(:headers) { valid_headers }

  describe 'GET /polls' do
    # update request with headers
    before { get '/polls', params: {}, headers: headers }

    it 'returns polls' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /polls/:id' do
    before { get "/polls/#{poll_id}", params: {}, headers: headers }

    context 'when the record exists' do
      it 'returns the poll' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(poll_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:poll_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find poll/)
      end
    end
  end

  describe 'POST /polls' do
     let(:valid_attributes) do
      # send json payload
      { title: 'Learn Elm', created_by: user.id.to_s }.to_json
    end

    context 'when request is valid' do
      before { post '/polls', params: valid_attributes, headers: headers }

      it 'creates a poll' do
        expect(json['title']).to eq('Learn Elm')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      let(:invalid_attributes) { { title: nil }.to_json }
      before { post '/polls', params: invalid_attributes, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(json['message'])
          .to match(/Validation failed: Title can't be blank/)
      end
    end
  end

  describe 'PUT /polls/:id' do
    let(:valid_attributes) { { title: 'Shopping' }.to_json }

    context 'when the record exists' do
      before { put "/polls/#{poll_id}", params: valid_attributes, headers: headers }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /polls/:id' do
    before { delete "/polls/#{poll_id}", params: {}, headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end

require 'rails_helper'

RSpec.describe 'Polls API', type: :request do
  # initialize test data
  let!(:polls) { create_list(:poll, 10) }
  let(:poll_id) { polls.first.id }

  # Test suite for GET /polls
  describe 'GET /polls' do
    # make HTTP get request before each example
    before { get '/polls' }

    it 'returns polls' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /polls/:id
  describe 'GET /polls/:id' do
    before { get "/polls/#{poll_id}" }

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
# Test suite for POST /polls
describe 'POST /polls' do
  # valid payload
  let(:valid_attributes) { { name: 'Learn Elm' } }

  context 'when the request is valid' do
    before { post '/polls', params: valid_attributes }

    it 'creates a poll' do
      expect(json['name']).to eq('Learn Elm')
    end

    it 'returns status code 201' do
      expect(response).to have_http_status(201)
    end
  end
  context 'when the request is invalid' do
    before { post '/polls', params: { name: 'Foobar' } }

    it 'returns status code 422' do
      expect(response).to have_http_status(422)
    end


  end
end
# Test suite for PUT /polls/:id
describe 'PUT /polls/:id' do
  let(:valid_attributes) { { name: 'Shopping' } }

  context 'when the record exists' do
    before { put "/polls/#{poll_id}", params: valid_attributes }

    it 'updates the record' do
      expect(response.body).to be_empty
    end

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
# Test suite for DELETE /polls/:id
describe 'DELETE /polls/:id' do
  before { delete "/polls/#{poll_id}" }

  it 'returns status code 204' do
    expect(response).to have_http_status(204)
  end
end
end

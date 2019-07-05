require 'rails_helper'

RSpec.describe Candidate, type: :model do
  it { should belong_to(:poll) }
  # Validation test
  # ensure column name is present before saving
  it { should validate_presence_of(:name) }
end

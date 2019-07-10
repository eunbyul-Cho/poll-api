class Candidate < ApplicationRecord
  belongs_to :poll, inverse_of: :candidates
  validates_presence_of :name

end

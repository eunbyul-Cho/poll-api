class Candidate < ApplicationRecord
  belongs_to :poll
  validates_presence_of :name
  def as_json(options = nil)
    super({ only: [:id, :name, :count] }.merge(options || {}))
  end
end

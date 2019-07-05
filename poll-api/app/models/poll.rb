class Poll < ApplicationRecord
  has_many :candidates, dependent: :destroy
  validates_presence_of :name
  def as_json(options = nil)
    super({ only: [:id, :name] }.merge(options || {}))
  end
end

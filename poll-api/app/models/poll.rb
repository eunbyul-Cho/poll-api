class Poll < ApplicationRecord
  belongs_to :user
  has_many :candidates
  validates_presence_of :name
end

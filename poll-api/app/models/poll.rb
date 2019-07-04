class Poll < ApplicationRecord
  has_many :candidates, dependent: :destroy
  validates_presence_of :name
end

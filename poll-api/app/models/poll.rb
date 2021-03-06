class Poll < ApplicationRecord
  belongs_to :user
  has_many :candidates, dependent: :destroy, inverse_of: :poll
  validates_presence_of :name
  accepts_nested_attributes_for :candidates, reject_if: :all_blank, allow_destroy: true
end

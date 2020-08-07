class Challenge < ApplicationRecord
  validates :title, :link, presence: true
end

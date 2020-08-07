class Blog < ApplicationRecord
  validates :title, :link, presence: true
end

class Note < ApplicationRecord
  has_one_attached :note_file
  validates :title, :note_file, presence: true
end

class Post < ApplicationRecord
  has_many :comments, -> { order created_at: :asc}
  has_one_attached :thumbnail do |attachable|
    attachable.variant :thumb, resize_to_limit: [200, 100]
  end
  has_rich_text :content

  validates :title, presence: true
end

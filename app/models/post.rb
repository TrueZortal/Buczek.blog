# frozen_string_literal: true

class Post < ApplicationRecord
  has_one_attached :thumbnail do |attachable|
    attachable.variant :thumb, resize_to_limit: [400, 298]
    attachable.variant :center, resize_to_limit: [800, 602]
  end
  has_many_attached :uploads
  has_rich_text :content

  validates :title, presence: true
  scope :ordered, -> { order(updated_at: :desc) }
end

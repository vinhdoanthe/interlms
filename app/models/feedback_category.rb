class FeedbackCategory < ApplicationRecord
  validates :category_name, presence: true, length: {minimum: 3, maximum: 500}
end

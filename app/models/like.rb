class Like < ApplicationRecord
    validates :event_id, :user_id, presence: true
end
class Ticket < ApplicationRecord
    validates :quantity, :event_id, :user_id, presence: true

end

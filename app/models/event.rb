class Event < ApplicationRecord
    validates :title, :description, :date, :start_time, :end_time, presence: true

    has_one_attached :photo
end
class Event < ApplicationRecord
    validates :title, :description, :date, :start_time, :end_time, presence: true

    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User

    has_many :likes,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Like

    has_many :likers,
        through: :likes,
        source: :user

    has_one_attached :photo
end
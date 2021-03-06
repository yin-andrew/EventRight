class User < ApplicationRecord
    validates :email, :fname, :lname, :username, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true 

    attr_reader :password
    
    after_initialize :ensure_session_token

    has_many :created_events,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :Event


    has_many :likes,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Like
    
    has_many :liked_events,
        through: :likes,
        source: :event


    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        if @user && @user.is_password?(password)
            return @user
        else
            return nil 
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token! 
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

end

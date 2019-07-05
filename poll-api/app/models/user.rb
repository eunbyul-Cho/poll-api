class User < ApplicationRecord
   has_secure_password

   has_many :polls
   validates_presence_of :name, :email, :password_digest
end

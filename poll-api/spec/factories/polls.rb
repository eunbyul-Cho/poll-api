FactoryBot.define do
  factory :poll do
    name { Faker::Lorem.word }
    user_id 1
  end
end

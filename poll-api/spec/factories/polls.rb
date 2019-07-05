FactoryBot.define do
  factory :poll do
    name { Faker::Lorem.word }
    user_id { Faker::Number.number(3) }
  end
end

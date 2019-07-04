FactoryBot.define do
  factory :candidate do
    name { Faker::StarWars.character }
    count  { Faker::Number.number(10) }
    poll_id nil
  end
end

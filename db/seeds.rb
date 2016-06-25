# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

20.times do
  date = Faker::Date.between(3.months.ago, 2.years.from_now)
  Goal.create(
    name: Faker::Hipster.sentence,
    year: date.year,
    month: date.strftime('%B'),
    complete: [true, false].sample
  )
end

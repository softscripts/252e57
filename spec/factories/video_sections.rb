# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :video_section do
    section_type "MyString"
    section "MyString"
    title "MyString"
    body "MyText"
  end
end

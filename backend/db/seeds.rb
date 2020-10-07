# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create(team: "New York Giants", sport: "Football", moment: "OBJ's one handed catch versus Dallas")
Comment.create(post_id: 1, body: "I was at that game!")

# create_table "comments", force: :cascade do |t|
#   t.text "body"
#   t.integer "post_id"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
#   t.index ["post_id"], name: "index_comments_on_post_id"
# end
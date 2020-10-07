class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :team
      t.string :sport
      t.text :moment

      t.timestamps
    end
  end
end

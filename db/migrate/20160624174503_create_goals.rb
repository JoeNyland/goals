class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.string :name
      t.string :month
      t.string :year
      t.boolean :complete

      t.timestamps null: false
    end
  end
end

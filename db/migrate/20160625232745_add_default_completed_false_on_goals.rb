class AddDefaultCompletedFalseOnGoals < ActiveRecord::Migration
  def change
    change_column :goals, :complete, :boolean, default: false
  end
end

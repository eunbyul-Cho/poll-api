class AddColumnToPollTable < ActiveRecord::Migration[5.0]
  def change
    add_reference :polls, :user, index: true
    add_foreign_key :polls, :users
  end
end

class DropCommentsDeviceTables < ActiveRecord::Migration[7.0]
  def change
    drop_table :comments
    drop_table :users
  end
end

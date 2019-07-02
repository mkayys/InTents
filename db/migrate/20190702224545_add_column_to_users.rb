class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :zip_code, :integer, null: false
  end
end

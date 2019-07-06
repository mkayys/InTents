class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :name, null: false
      t.string :nearby, null: false
      t.integer :host_id, null: false
      t.text :about, null: false
      t.float :price, null: false
      t.integer :max_guests, null: false
      t.string :check_in
      t.string :check_out
      t.string :cancellation
      t.string :on_arrival
      t.integer :min_nights
      t.float :latitude, null: false
      t.float :longitude, null: false

      t.boolean :parking, default: false
      t.boolean :ada_access, default: false
      t.boolean :toilets, default: false
      t.boolean :pull_through, default: false
      t.boolean :campfire, default: false
      t.boolean :pets, default: false
      t.boolean :hookups, default: false
      t.boolean :potable_water, default: false
      t.boolean :showers, default: false
      t.boolean :picnic_table, default: false
      t.boolean :bins, default: false

      t.timestamps
    end
    add_index :spots, :host_id
  end
end

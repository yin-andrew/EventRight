class CreateEvent < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :date, null: false
      t.string :start_time, null: false
      t.string :end_time, null: false
      t.integer :creator_id, null: false

      t.timestamps 
    end

    add_index :events, :title
    add_index :events, :creator_id
  end
end

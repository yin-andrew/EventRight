class ChangeTickets < ActiveRecord::Migration[5.2]
  def change
    remove_column :tickets, :price
    add_column :tickets, :quantity, :integer
  end
end

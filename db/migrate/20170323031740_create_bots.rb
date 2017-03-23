class CreateBots < ActiveRecord::Migration[5.0]
  def change
    create_table :bots do |t|
      t.string :username, null: false, unique: true

      t.timestamps
    end
  end
end

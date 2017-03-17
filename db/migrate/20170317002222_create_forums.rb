class CreateForums < ActiveRecord::Migration[5.0]
  def change
    create_table :forums do |t|
      t.string :name, null: false, unique: true
      t.string :kind, null: false
      t.text :topic
      t.text :greeting

      t.timestamps
    end
  end
end

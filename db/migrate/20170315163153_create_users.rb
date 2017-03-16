class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.text :username, null: false, unique: true
      t.text :password_digest, null: false
      t.text :session_token, null: false, unique: true

      t.timestamps
    end
  end
end

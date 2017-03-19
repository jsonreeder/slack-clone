class CreateMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :memberships do |t|
      t.integer :forum_id, null: false, index: true
      t.references :membershipable, polymorphic: true, index: true

      t.timestamps
    end

    add_index :memberships, [ :forum_id, :membershipable_id, :membershipable_type ], unique: true, name: :index_membershps_on_member
  end
end

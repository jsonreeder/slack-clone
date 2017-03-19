# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170317162917) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "forums", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "kind",       null: false
    t.text     "topic"
    t.text     "greeting"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "memberships", force: :cascade do |t|
    t.integer  "forum_id",            null: false
    t.string   "membershipable_type"
    t.integer  "membershipable_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.index ["forum_id", "membershipable_id", "membershipable_type"], name: "index_membershps_on_member", unique: true, using: :btree
    t.index ["forum_id"], name: "index_memberships_on_forum_id", using: :btree
    t.index ["membershipable_type", "membershipable_id"], name: "index_memberships_on_membershipable_type_and_membershipable_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.text     "username",        null: false
    t.text     "password_digest", null: false
    t.text     "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end

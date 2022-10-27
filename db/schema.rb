# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_26_175610) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "applied_jobs", force: :cascade do |t|
    t.boolean "applied"
    t.bigint "candidate_id", null: false
    t.bigint "job_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["candidate_id"], name: "index_applied_jobs_on_candidate_id"
    t.index ["job_id"], name: "index_applied_jobs_on_job_id"
  end

  create_table "applied_jobs_candidates", id: false, force: :cascade do |t|
    t.integer "applied_job_id"
    t.integer "candidate_id"
  end

  create_table "candidates", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "interviews", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.integer "phone"
    t.string "date"
    t.string "format"
    t.bigint "candidate_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["candidate_id"], name: "index_interviews_on_candidate_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "name"
    t.string "qualifications"
    t.string "responsibilities"
    t.string "type_of_hire"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "profile_photos", force: :cascade do |t|
    t.integer "candidate_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "applied_jobs", "candidates"
  add_foreign_key "applied_jobs", "jobs"
  add_foreign_key "interviews", "candidates"
end

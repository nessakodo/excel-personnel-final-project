class CreateInterviews < ActiveRecord::Migration[6.1]
  def change
    create_table :interviews do |t|
      t.string :name
      t.string :email
      t.integer :phone
      t.string :date
      t.string :format
      t.belongs_to :candidate, null: false, foreign_key: true
      t.timestamps
    end
  end
end

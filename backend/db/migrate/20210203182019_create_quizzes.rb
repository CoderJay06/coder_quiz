class CreateQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :quizzes do |t|
      t.string :title
      t.string :difficultyLevel
      t.integer :questionAmount
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end

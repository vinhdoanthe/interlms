class CreateFeedbackCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :feedback_categories do |t|
      t.text :category_name

      t.timestamps
    end
  end
end

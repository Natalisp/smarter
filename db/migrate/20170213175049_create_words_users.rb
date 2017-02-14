class CreateWordsUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users_words do |t|
      t.references :user, foreign_key: true
      t.references :word, foreign_key: true
    end
  end
end

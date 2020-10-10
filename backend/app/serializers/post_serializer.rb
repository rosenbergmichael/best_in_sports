class PostSerializer < ActiveModel::Serializer
  attributes :id, :team, :sport, :moment
  has_many :ratings
end

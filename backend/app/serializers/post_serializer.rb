class PostSerializer < ActiveModel::Serializer
  attributes :id, :team, :sport, :moment, :ratings
end

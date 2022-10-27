class CandidateSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest

  has_many :jobs
  has_many :applied_jobs
  has_many :interviews
end

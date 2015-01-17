class User < ActiveRecord::Base
	include ChangeLogExt

	validates :type, presence: true
	validates :email, presence: true
	validates :password, presence: true
	attr_accessible :type, :email, :password
	scope :brokers, -> {where(avaliable_admins: true)}
	scope :general, -> {where(avaliable_general: true)}
	before_save :reformat_additions
	def additions_human
		self.additions.split(",").map{|item| I18n.t("users.additions.#{item}") }.join(", ")
	end

	def title
		self.residence
	end

	private
	def reformat_additions
		self.additions = self.additions.reject(&:empty?).join(",")
	end
end

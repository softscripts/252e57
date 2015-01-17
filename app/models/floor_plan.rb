class FloorPlan < ActiveRecord::Base
	include ChangeLogExt

	has_attached_file :plan
	# Validate content type
	validates_attachment_content_type :plan, :content_type => "application/pdf"
	# Validate filename
	validates_attachment_file_name :plan, :matches => [/pdf\Z/]
	has_attached_file :pplan
	# Validate content type
	validates_attachment_content_type :pplan, :content_type => "application/pdf"
	# Validate filename
	validates_attachment_file_name :pplan, :matches => [/pdf\Z/]
	
	validates :residence, presence: true
	validates :price, presence: true
	validates :bedrooms, presence: true
	validates :bathrooms, presence: true
	validates :balcony, presence: true
	validates :indoor_sq_ft, presence: true
	validates :indoor_sq_m, presence: true
	validates :pilot, presence: true
	validates :common_charges, presence: true
	validates :monthly_total, presence: true
	validates :plan, presence: true
	validates :sequence, presence: true

	attr_accessible :residence, :price, :bedrooms, :bathrooms, :additions, :balcony, :indoor_sq_ft, :indoor_sq_m, :outdoor_sq_ft, :outdoor_sq_m, :common_charges, :monthly_total, :pilot, :avaliable_general, :avaliable_admins, :plan, :pplan, :sequence
	scope :brokers, -> {where(avaliable_admins: true).order('sequence ASC')}
	scope :general, -> {where(avaliable_general: true).order('sequence ASC')}
	before_save :reformat_additions
	def additions_human
		self.additions.split(",").map{|item| I18n.t("floor_plans.additions.#{item}") }.join(", ")
	end

	def title
		self.residence
	end

	private
	def reformat_additions
		self.additions = self.additions.reject(&:empty?).join(",")
	end
end

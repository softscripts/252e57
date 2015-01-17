class Article < ActiveRecord::Base
	include ChangeLogExt

	has_attached_file :article
	validates :title, presence: true
	validates :published_date, presence: true
	validates :description, presence: true
	validates :article, presence: true
	validates :sequence, presence: true
	# Validate content type
	validates_attachment_content_type :article, :content_type => "application/pdf"
	# Validate filename
	validates_attachment_file_name :article, :matches => [/pdf\Z/]

	scope :content, -> {where(update_section: false, detail_section: false).order('sequence ASC')}
	scope :updates, -> {where(update_section: true).order('sequence ASC')}
	scope :details, -> {where(detail_section: true).order('sequence ASC')}

	attr_accessible :title, :description, :article, :published_date, :sequence
end

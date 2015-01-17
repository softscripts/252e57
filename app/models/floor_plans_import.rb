class FloorPlansImport < ActiveRecord::Base
	include ChangeLogExt

	has_attached_file :floor_plan_import_csv
	# Validate content type
	validates_attachment_content_type :floor_plan_import_csv, :content_type => "application/pdf"
	# Validate filename
	validates_attachment_file_name :floor_plan_import_csv, :matches => [/pdf\Z/]
	validates :floor_plan_import_csv, presence: true


end

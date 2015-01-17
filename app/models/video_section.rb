class VideoSection < ActiveRecord::Base
	include ChangeLogExt

	attr_accessible :section_type, :title, :section, :body
end

class Contact < ActiveRecord::Base
	include ChangeLogExt
	attr_accessible :name, :broker, :phone, :email, :country, :size, :comment
end

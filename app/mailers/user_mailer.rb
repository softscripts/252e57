class UserMailer < ActionMailer::Base
	default from: "INFO@252E57.COM"

	def welcome_email(user)
		@user = user
		mail(to: @user.email, subject: "Thank you for your interest in 252", bcc: "info@252e57.com")
	end

	def welcome_admin_email(user)
		@user = user
		@broker = "No"
		if(@user.broker)
			@broker = "Yes"
		else
			@broker = "No"		
		end
		mail(to: "info@252e57.com", subject: "New Inquiry from 252", body: "Submission Details\n\nName: " + @user.name + "\nE-mail: " + @user.email + "\nPhone: " + @user.phone + "\nCountry: " + @user.country + "\nResidence Size: " + @user.size + "\nBroker: " + @broker + "\n\nComments:\n" + @user.comment)
	end

end

class Admin::AdminController < ApplicationController
	layout "admin"

	#dashboard

	def index
		@nav = :dashboard
		@changes = ChangeLog.all.limit(30)
		@video_sections = VideoSection.all
	end

	def content
		@nav = :content

		# get the articles
		@articles = Article.content

		@video_sections = VideoSection.all


		@private_videos = PrivateVideo.content

		@galleries = []
		if current_user.kind_of?(Broker)
			@galleries = Gallery.brokers
		else
			@galleries = Gallery.content
		end

		@upt_galleries = Gallery.updates
		@upt_pres = Article.updates
		@upt_video = PrivateVideo.updates

		@details_galleries = Gallery.details
		@details_pres = Article.details
	end

	def availability
		@nav = :availability

		#get appropreate floor_plans
		@floor_plans = []
		if current_user.kind_of?(Broker)
			@floor_plans = FloorPlan.brokers
		else
			@floor_plans = FloorPlan.all
		end
	end

	def public_users
		@nav = :public_users

		#get appropreate users
		@public_users = []
			if current_user.kind_of?(Broker)
					@public_users = []
			else
					@public_users = PublicUser.all
			end
	end

	def floor_plans_import
		@nav = :floor_plans_import
	end

	def users
		@nav = :users

		#get appropreate users
		@users = []
		if current_user.kind_of?(Broker)
			@users = User.brokers
		else
			@users = User.all
		end
	end

	def private_sites
		@nav = :private_sites
		if current_user.kind_of?(Broker)
			@sites = PrivateSite.by_user(current_user)
		else
			@sites = PrivateSite.all
		end
	end

	def export_public_users
		@users = PublicUser.all
		respond_to do |format|
			if params[:all]
				format.csv { send_data @users.to_csv }
			else
				format.csv { send_data @users.to_csv({:start_at => Time.now, :end_at => 7.days.ago}) }
			end

		end
	end

end

COOPCondos::Application.routes.draw do

  devise_for :users
	namespace :admin do

		resources :articles
		resources :video_section
		resources :private_videos
		resources :private_sites, except: :index do
			member do
				get :send_email
			end
		end
		resources :galleries do
			collection do
				post :set_public
				post :set_neighborhood
			end
			member do
				post :sort
				post :add_image
			end
		end
		resources :floor_plans do
			member do
				get :download
			end
		end

	end

	delete  "/admin/galleries/remove_image/:gallery_image_id" => 'admin/galleries#remove_image', as: :remove_image_admin_gallery

	authenticated :user do
		get "admin/content", to: "admin/admin#content", as: :admin_content
		get "admin/availability", to: "admin/admin#availability", as: :admin_availability
		get "admin/private_sites", to: "admin/admin#private_sites", as: :admin_private_sites_dashboard
		get "admin", to: "admin/admin#index", as: :admin_dashboard
		get "admin/public_users", to: "admin/admin#public_users", as: :admin_public_users
		get "admin/user_export", to: "admin/admin#export_public_users", as: :user_export
		get "admin/floor_plans_import", to: "admin/admin#floor_plans_import", as: :admin_floor_plans_import
		post "admin/floor_plans_import", to: "admin/admin#floor_plans_import"
	end

	#root to: "public#index"
	root to: redirect("http://www.252e57st.com", status: 302)
	get 'home', to: redirect("http://www.252e57st.com", status: 302)
	get 'gallery', to: redirect("http://www.252e57st.com/gallery", status: 302)
	get 'availability', to: redirect("http://www.252e57st.com/availability", status: 302)
	get 'design-team', to: redirect("http://www.252e57st.com/design-team", status: 302)
	get 'design-team/design-architect', to: redirect("http://www.252e57st.com/design-team", status: 302)
	get 'design-team/interior-architect', to: redirect("http://www.252e57st.com/design-team", status: 302)
	get 'design-team/architect-of-record', to: redirect("http://www.252e57st.com/design-team", status: 302)
	get 'design-team/sustainable-engineer', to: redirect("http://www.252e57st.com/design-team", status: 302)
	get 'developers', to: redirect("http://www.252e57st.com/developers", status: 302)
	get 'developers/world-wide-group', to: redirect("http://www.252e57st.com/developers", status: 302)
	get 'developers/rose-associates', to: redirect("http://www.252e57st.com/developers", status: 302)
	get 'amenities', to: redirect("http://www.252e57st.com/amenities", status: 302)
	get 'neighborhood', to: redirect("http://www.252e57st.com/neighborhood", status: 302)
	get 'press', to: redirect("http://www.252e57st.com/press", status: 302)
	get 'contact', to: redirect("http://www.252e57st.com/contact", status: 302)
	get 'legal', to: redirect("http://www.252e57st.com/legal", status: 302)


	get "private/floor_plans/:id", to: "admin/floor_plans#download" , as: :private_floor_download
	post "public_user", to: "public#create", as: :public_users
	get "floor_plans", to: "public#floor_plans", as: :floor_plans_export
	get "private/:uniq_id", to: "private#show", as: :private_site
	get "gallery", 	to: "public#index"
	get "home", 	to: "public#index"
	get "design-team", 	to: "public#index"
	get "developers", 	to: "public#index"
	get "availability", 	to: "public#index"
	get "developers", 	to: "public#index"
	get "press", 	to: "public#index"
	get "neighborhood", 	to: "public#index"
	get "amenities", 	to: "public#index"
	get "contact", 	to: "public#index"
	get "thank-you", to: "public#index"
	get "legal", 	to: "public#index"
	get "design-team/:id", to:"public#index"
	get "developers/:id", to:"public#index"




end

class Admin::FloorPlansImportController < ApplicationController
	layout "admin"
	before_filter :set_nav
	before_action :set_floor_plans_import, only: [:show, :edit, :update]



def create

    name = params[:upload][:file].original_filename
    directory = "public/thumbnails"
    path = File.join(directory, name)
    File.open(path, "wb") { |f| f.write(params[:upload][:file].read) }
    flash[:notice] = "File uploaded"
		
    redirect_to "/upload/new"
  end




	def edit
	end

	# PATCH/PUT /video_sections/1
	# PATCH/PUT /video_sections/1.json
	def update
		respond_to do |format|
			if @floor_plans_import.update(floor_plans_import_params)
				format.html { redirect_to admin_content_path, notice: 'VideoSection was successfully updated.' }
			else
				format.html { render action: 'edit' }
			end
		end
	end


	private

	def set_nav
		@nav = :contents
	end

	# Use callbacks to share common setup or constraints between actions.
	def set_video_section
		@floor_plans_import = FloorPlansImport.find(params[:id])
	end

	# Never trust parameters from the scary internet, only allow the white list through.
	def floor_plans_import_params
		params.require(:floor_plans_import).permit(:csv_file)
	end
end

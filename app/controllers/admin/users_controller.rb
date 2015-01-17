class Admin::UsersController < ApplicationController
  layout "admin"
  before_action :set_user, only: [:edit, :update, :destroy, :download]
  before_filter :set_nav
  # GET /users
  # GET /users.json


  def index
    if current_user.nil?
      @users = User.general
    elsif current_user.kind_of?(Broker)
      @users = User.brokers
    else
      @users = User.all
    end
    respond_to do |format|
      format.pdf do
        render :pdf => "availability",
        :orientation => 'Landscape',
        :disposition  => 'attachment'
      end
    end
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to admin_users_path, notice: 'User was successfully created.' }
      else
        format.html { render action: 'new' }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to admin_users_path, notice: 'User was successfully updated.' }
      else
        format.html { render action: 'edit' }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to admin_users_path }
    end
  end

  def download_index_pdf
    @users = User.all

  end

  def download
    response.headers['Content-Type'] = @user.plan_content_type
    response.headers['Content-Disposition'] = 'attachment; filename=' + @user.plan_file_name
    send_file @user.plan.path
  end
  private
    def set_nav
      @nav = :users
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_floor_plan
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :broker, :phone, :email, :country, :size, :comment => [])
    end
end

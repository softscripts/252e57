class Admin::ContactController < ApplicationController
  layout "admin"
  before_action :set_contact, only: [:show]
  before_filter :set_nav
  # GET /contact
  # GET /contact.json


  def index
    @contact = Contact.all
  end

  # GET /contact/1
  # GET /contact/1.json
  def show
  end

  private
    def set_nav
      @nav = :contact
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_contact
      @contact = Contact.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def contact_params
      params.require(:contact).permit(:name, :broker, :phone, :email, :country, :size, :comment => [])
    end
end

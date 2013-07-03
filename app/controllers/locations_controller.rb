class LocationsController < ApplicationController
  def index
    @location = Location.new
  end

  def create
    @location = Location.new(params[:location])
    @location.save

    respond_to do |format|
      if @location.save
        format.html { redirect_to @location, notice: 'Location was successfully created.' }
        format.js #create.js.erb
      end
    end
  end

end

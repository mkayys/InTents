class Api::SpotsController < ApplicationController

    def index
        # @spots = Spot.in_bounds(params[:bounds])
        @spots = Spot.all
        render 'api/spots/index'
    end

    def show
        @spot = Spot.find(params[:id])
        render 'api/spots/show'
    end

    private
    def spot_params
        params.require(:spot).permit(:name, :nearby, :host_id, :about, :price, :max_guests, 
                                    :latitude, :longitude, photos: [])
    end

end

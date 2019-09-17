class Api::SpotsController < ApplicationController

    def index
        # debugger
        @spots = params[:bounds] ? Spot.in_bounds(params[:bounds]) : Spot.all
        if @spots
            render 'api/spots/index'
        else
            render json: ["No spots found"], status: 422
        end

        # @spots = Spot.all
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

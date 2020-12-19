class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        @review.guest_id = current_user.id

        if @review.save
            render 'api/reviews/show'
            # render 'api/spots/show'
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index
        @reviews = Review.where(spot_id: params[:spot_id])
        # refactor review to fetch reviews that are only for that spot
        # debugger
        if @reviews.empty?
            render json: { reviews: {} }
        else
            render :index
        end
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def update
        @review = Review.find(params[:id])
        if @review.update_attributes(review_params)
            render 'api/reviews/show'
            # i will need to render the reviews associated to a spot
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render json: @review
    end

    private

    def review_params
        params.require(:review).permit(:guest_id, :spot_id, :body)
    end
end

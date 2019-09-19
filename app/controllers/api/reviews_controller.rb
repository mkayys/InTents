class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        @review.guest_id = current_user.id

        if @review.save
            render 'api/reviews/show'
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def update
        @review = Review.find(params[:id])
        if @review.update_attributes(review_params)
            
        else
            render json: ["you fool"], status: 418
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

class Api::LikesController < ApplicationController
    def index 
        @likes = Like.all
        render :index
    end

    def create
        @like = Like.new(like_params)
        if @like.save!
            render :show
        else
            render json: ['something went wrong! please try again'], status: 422
        end
    end

    def destroy 
        @like = Like.find_by(id: params[:id])
        if @like.destroy 
        else
            render json: ['something went wrong! please try again'], status: 422
        end
    end

    private
    def like_params
        params.require(:like).permit(:id, :user_id, :event_id)
    end

end
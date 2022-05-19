class Api::EventsController < ApplicationController


    def index
        @events = Event.all
        render :index
    end

    def create
        @event = Event.new(event_params)
        if @event.save
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @event = Event.find_by(id: params[:id])
        if @event && @event.creator_id === current_user.id && @event.update(event_params)
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @event = Event.find_by(id: params[:id])
        if @event && @event.destroy
            #what to do if successfully destroyed?
        else
            render json: ['event not found']
        end
        #redirect to user show page with notice of successful deletion
    end

    private 
    def event_params
        params.require(:event).permit(:title, :description, :date, :start_time, :end_time, :creator_id, :price, :address)
    end
end
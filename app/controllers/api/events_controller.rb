class Api::EventsController < ApplicationController


    def index
        @events = Event.all
        render :index
    end

    def show
        @event = Event.find_by(id: params[:id])
        if @event
            render :show
        else
            render json: ['Event does not exist'], status: 404
        end
    end

    def create
        @event = Event.new(event_params)
        if @event.save!
            render :show
        else
            render json: ['Missing fields!'], status: 422
        end
    end

    def update
        @event = Event.find(params[:event][:id])
        if @event && @event.creator_id == current_user.id && @event.update(event_params)
            render :show
        else
            render json: ['failed to update'], status: 422
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
        params.require(:event).permit(:id,:title, :description, :date, :start_time, :end_time, :creator_id, :price, :address, :photo)
    end
end
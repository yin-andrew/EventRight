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
        if @event.save
            render :show
        else
            render json: ['please fill in all fields!'], status: 422
        end
    end

    def update
        @event = Event.find(params[:event][:id])
        debugger
        if @event && @event.creator_id == current_user.id && @event.update(event_params)
            render :show
        else
            render json: ['please fill in all fields and re-upload the photo'], status: 422
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


    def search 
        query = params[:query]
        @events = Event.where('title ILIKE ? OR description ILIKE ?', "%#{query}%", "%#{query}%")
        if @events.length > 0
            render :index
        else
            render json: ["Sorry, no results found for #{query}"], status:404
        end
    end

    private 
    def event_params
        params.require(:event).permit(:title, :description, :date, :start_time, :end_time, :creator_id, :price, :address, :photo)
    end
end
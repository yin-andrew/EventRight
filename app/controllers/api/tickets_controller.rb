class Api::TicketsController < ApplicationController 

    def index
        @tickets = Ticket.all
        render :index
    end

    def show 
        @ticket = Ticket.find_by(id: params[:id])
        if @ticket
            render :show
        else
            render json: ['ticket not found'], status: 404
        end
    end

    def create 
        @ticket = Ticket.new(ticket_params)
        if @ticket.save 
            render :show
        else
            render json: ['unable to purchase ticket please try again'], status: 422
        end
    end

    def destroy
        @ticket = Ticket.find_by(id: params[:id])
        if @ticket && @ticket.destroy
            render :show
        else
            render json: ['failed to delete: no refunds bud'], status: 422
        end
    end



    private
    def ticket_params 
        params.require(:ticket).permit(:quantity, :event_id, :user_id)
    end

end
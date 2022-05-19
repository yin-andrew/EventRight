class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token 

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            render json: @user 
        else
            render json: ['Invalid Credentials'], status: 422
        end
    end

    def destroy
        if current_user
            logout!
            render plain: 'logged out'
        else
            render json: ['failed to logout'], status: 404
        end
    end

end

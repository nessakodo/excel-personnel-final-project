class InterviewsController < ApplicationController


    def index 
        render json: Interview.all, status: :ok
    end

    def show
        interview = Interview.find_by(id: params[:id])
        render json: interview, status: :accepted
    end

    def create 
        interview = Interview.create!(interview_params)
        render json: interview.candidate, status: :created
    end


    def destroy 
        interview = Interview.find(params[:id])
        interview.destroy
        head :no_content
    end



    private 

    def interview_params
        params.permit(:name, :email, :phone, :date, :format, :candidate_id)
    end

end

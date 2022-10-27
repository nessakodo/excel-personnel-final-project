class ProfilePhotosController < ApplicationController
    
    def index
        render json: ProfilePhoto.all
    end
    
    def show
       photo = ProfilePhoto.find_by(id: params[:id])
       render json: photo, status: :ok 
    end
    
    def create
        @profile_photo = ProfilePhoto.new(photo_params)
        if @profile_photo.save
            render json: @profile_photo, status: :created
        else
            render json: @profile_photo.errors, status: :unprocessable_entity
        end
    end
    
    def current_candidate_photos
        photos = ProfilePhoto.where(candidate_id: params[:id])
        if photos.exists?
            render json: photos.last, status: :ok
        else
            render json: {image_url: "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png?ssl=1"}
        end
    end
    
    private
    
    def photo_params
        params.permit(:image, :candidate_id)
    end
    end
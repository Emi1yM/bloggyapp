class Api::V1::PostsController < Api::V1::BaseController
    def index
      respond_with Post.all
    end
  
    def create
      respond_with :api, :v1, Post.create(post_params)
    end
  
    def destroy
      respond_with Post.destroy(params[:id])
    end
  
    def update
      post = Post.find(params["id"])
      post.update_attributes(post_params)
      respond_with post, json: post
    end
  
    private
  
    def post_params
      params.require(:post).permit(:title, :content, :date, :user_id)
    end
  end

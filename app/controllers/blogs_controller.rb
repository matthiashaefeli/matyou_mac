class BlogsController < ApplicationController
  def index
    # Todo: maybe order that with create at newest or whatever
    @blogs = Blog.all
    @title = 'Blogs'
    @count = @blogs.count
    @infolder = @blogs.count * 256
    @available = 256
    render layout: 'window'
  end

  def new
    @blog = Blog.new
    @title = 'Blog'
    @count = ''
    @infolder = ''
    @available = ''
    render layout: 'window'
  end

  def create
    blog = Blog.new(blog_params)
    blog.save
    redirect_to root_path
  end

  def destroy
    Blog.find(params[:id]).delete
    redirect_to root_path
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :link)
  end
end

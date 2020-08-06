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
end

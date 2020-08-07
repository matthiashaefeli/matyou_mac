module UsersHelper
  def user_logged_in?
    redirect_to root_path unless current_user
  end
end

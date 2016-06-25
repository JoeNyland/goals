class GoalsController < ApplicationController
  def index
    render json: Goal.all
  end
  def update
    goal = Goal.find params[:id]
    goal.update goal_params
    render json: goal
  end
  private
  def goal_params
    params.permit(:id,:complete)
  end
end

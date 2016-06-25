class GoalsController < ApplicationController
  def index
    render json: Goal.all
  end
  def update
    goal = Goal.find params[:id]
    goal.update goal_params
    render json: goal
  end
  def create
    goal = Goal.new(
      name: params[:name],
      year: params[:year],
      month: params[:month]
    )
    goal.save!
    render json: goal
  end
  private
  def goal_params
    params.permit(:id,:complete,:name,:year,:month)
  end
end

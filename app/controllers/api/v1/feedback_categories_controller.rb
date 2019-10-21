class Api::V1::FeedbackCategoriesController < ApplicationController
  def index
    feedback_categories = FeedbackCategory.all.order(created_at: :desc)
    render json: feedback_categories
  end

  def create
  end

  def show
    if feedback_category
      render json: feedback_category
    else
      render json: feedback_category.errors
    end
  end

  def destroy
  end

  private
  def feedback_category
    @feedback_category ||= FeedbackCategory.find(params[:id])
  end
end

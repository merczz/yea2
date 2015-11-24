require 'test_helper'

class PartiesControllerTest < ActionController::TestCase
  test "should get name" do
    get :name
    assert_response :success
  end

  test "should get betfaircode" do
    get :betfaircode
    assert_response :success
  end

  test "should get odds" do
    get :odds
    assert_response :success
  end

end

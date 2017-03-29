Feature: Create a new post
  Regression tests of login in Backoffice and creating a new post

  Scenario: Login as admin in BO and create a new Post
    Given I Open a browser "Chrome"
    When I navigate to BO login page
    And I enter username: "admin" and password: "password"
    And I click on login button
    And I click on Add a Post
    And I create a Post with title: "This is the title of the post" and a body: "This is the body of the post" and publish
    Then I verify that the post's title is: "This is the title of the post"
    And I close the browser
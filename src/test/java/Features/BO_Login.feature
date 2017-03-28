Feature: Login in BO
  Regression tests of login in Backoffice

  Scenario: Login with valid username and password in BO as admin
    Given I Open a browser "Chrome"
    And I navigate to BO login page
    And I enter username: "admin" and password: "password"
    And I click on login button
    And I should see my username "admin"
    Then I close the browser

  Scenario: Unable to login without username and password in BO
    Given I Open a browser "Chrome"
    And I navigate to BO login page
    And I enter username: "" and password: "password"
    And I click on login button
    And I should see login error message
    Then I close the browser

  Scenario: Unable to login with valid username: "admin", but without password in BO
    Given I Open a browser "Chrome"
    And I navigate to BO login page
    And I enter username: "admin" and password: ""
    And I click on login button
    And I should see login error message
    Then I close the browser
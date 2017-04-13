$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BO_Create_New_Post.feature");
formatter.feature({
  "line": 1,
  "name": "Create a new post",
  "description": "Regression tests of login in Backoffice and creating a new post",
  "id": "create-a-new-post",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login as admin in BO and create a new Post. (Test Variant: Desktop, Browser Chrome)",
  "description": "",
  "id": "create-a-new-post;login-as-admin-in-bo-and-create-a-new-post.-(test-variant:-desktop,-browser-chrome)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I Open a browser \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to BO login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter username: \"admin\" and password: \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Add a Post",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I create a Post with title: \"This is the title of the post\" and a body: \"This is the body of the post\" and publish",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that the post\u0027s title is: \"This is the title of the post\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 5079155470,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:11"
});
formatter.result({
  "duration": 1418235664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 19
    },
    {
      "val": "password",
      "offset": 41
    }
  ],
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "duration": 2141167288,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 47895,
  "status": "passed"
});
formatter.match({
  "location": "BO_Create_New_Post.java:10"
});
formatter.result({
  "duration": 4084614959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is the title of the post",
      "offset": 29
    },
    {
      "val": "This is the body of the post",
      "offset": 73
    }
  ],
  "location": "BO_Create_New_Post.java:11"
});
formatter.result({
  "duration": 9420233581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is the title of the post",
      "offset": 36
    }
  ],
  "location": "BO_Create_New_Post.java:14"
});
formatter.result({
  "duration": 2451258876,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:23"
});
formatter.result({
  "duration": 36364476,
  "status": "passed"
});
formatter.uri("BO_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login in BO",
  "description": "Regression tests of login in Backoffice",
  "id": "login-in-bo",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login with valid username and password in BO as admin. (Test Variant: Desktop, Browser Chrome)",
  "description": "",
  "id": "login-in-bo;login-with-valid-username-and-password-in-bo-as-admin.-(test-variant:-desktop,-browser-chrome)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I Open a browser \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to BO login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter username: \"admin\" and password: \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see my username \"admin\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 3545950085,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:11"
});
formatter.result({
  "duration": 1213168687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 19
    },
    {
      "val": "password",
      "offset": 41
    }
  ],
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "duration": 2256581180,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 34781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 26
    }
  ],
  "location": "BO_Login_Steps.java:18"
});
formatter.result({
  "duration": 993772476,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:23"
});
formatter.result({
  "duration": 242078039,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Unable to login without username and password in BO. (Test Variant: Desktop, Browser Chrome)",
  "description": "",
  "id": "login-in-bo;unable-to-login-without-username-and-password-in-bo.-(test-variant:-desktop,-browser-chrome)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I Open a browser \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I navigate to BO login page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter username: \"\" and password: \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see login error message",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 3636750945,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:11"
});
formatter.result({
  "duration": 1205735800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "password",
      "offset": 36
    }
  ],
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "duration": 881330370,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 31930,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:24"
});
formatter.result({
  "duration": 149276411,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:23"
});
formatter.result({
  "duration": 2130378310,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Unable to login with valid username: \"admin\", but without password in BO. (Test Variant: Desktop, Browser Chrome)",
  "description": "",
  "id": "login-in-bo;unable-to-login-with-valid-username:-\"admin\",-but-without-password-in-bo.-(test-variant:-desktop,-browser-chrome)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I Open a browser \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I navigate to BO login page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter username: \"admin\" and password: \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see login error message",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 3505947850,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:11"
});
formatter.result({
  "duration": 1299605947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 19
    },
    {
      "val": "",
      "offset": 41
    }
  ],
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "duration": 858378278,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 39343,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:24"
});
formatter.result({
  "duration": 186475633,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:23"
});
formatter.result({
  "duration": 303509412,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Unable to login without username, but with valid admin\u0027s password in BO. (Test Variant: Desktop, Browser Chrome)",
  "description": "",
  "id": "login-in-bo;unable-to-login-without-username,-but-with-valid-admin\u0027s-password-in-bo.-(test-variant:-desktop,-browser-chrome)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I Open a browser \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I navigate to BO login page",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter username: \"\" and password: \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see login error message",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 3666920968,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:11"
});
formatter.result({
  "duration": 1164071485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "password",
      "offset": 36
    }
  ],
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "duration": 867236620,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 30790,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:24"
});
formatter.result({
  "duration": 150542785,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:23"
});
formatter.result({
  "duration": 2150453266,
  "status": "passed"
});
});
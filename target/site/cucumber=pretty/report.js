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
  "name": "Login as admin in BO and create a new Post",
  "description": "",
  "id": "create-a-new-post;login-as-admin-in-bo-and-create-a-new-post",
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
  "location": "BO_Login_Steps.java:21"
});
formatter.result({
  "duration": 5135396586,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:11"
});
formatter.result({
  "duration": 1282996157,
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
  "duration": 2104040693,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 44474,
  "status": "passed"
});
formatter.match({
  "location": "BO_Create_New_Post.java:10"
});
formatter.result({
  "duration": 3814472073,
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
  "duration": 6226461699,
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
  "duration": 2347045586,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 28462231,
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
  "name": "Login with valid username and password in BO as admin",
  "description": "",
  "id": "login-in-bo;login-with-valid-username-and-password-in-bo-as-admin",
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
  "location": "BO_Login_Steps.java:21"
});
formatter.result({
  "duration": 3650836197,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:11"
});
formatter.result({
  "duration": 1201392607,
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
  "duration": 2243615555,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 37632,
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
  "duration": 898524546,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 272056120,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Unable to login without username and password in BO",
  "description": "",
  "id": "login-in-bo;unable-to-login-without-username-and-password-in-bo",
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
  "location": "BO_Login_Steps.java:21"
});
formatter.result({
  "duration": 3617953933,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:11"
});
formatter.result({
  "duration": 1167874022,
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
  "duration": 836430835,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 31359,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:23"
});
formatter.result({
  "duration": 155859196,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 233985220,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Unable to login with valid username: \"admin\", but without password in BO",
  "description": "",
  "id": "login-in-bo;unable-to-login-with-valid-username:-\"admin\",-but-without-password-in-bo",
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
  "location": "BO_Login_Steps.java:21"
});
formatter.result({
  "duration": 3644140576,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:11"
});
formatter.result({
  "duration": 1191765123,
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
  "duration": 847163327,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 31360,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:23"
});
formatter.result({
  "duration": 160113876,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 2126778889,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Unable to login without username, but with valid admin\u0027s password in BO",
  "description": "",
  "id": "login-in-bo;unable-to-login-without-username,-but-with-valid-admin\u0027s-password-in-bo",
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
  "location": "BO_Login_Steps.java:21"
});
formatter.result({
  "duration": 3483350467,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:11"
});
formatter.result({
  "duration": 1222907198,
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
  "duration": 921144146,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 35352,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:23"
});
formatter.result({
  "duration": 191266215,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 249353274,
  "status": "passed"
});
});
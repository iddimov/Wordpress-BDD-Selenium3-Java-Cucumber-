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
  "keyword": "And "
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
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:27"
});
formatter.result({
  "duration": 5892005358,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "duration": 10429136802,
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
  "location": "BO_Login_Steps.java:16"
});
formatter.result({
  "duration": 11159818729,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:20"
});
formatter.result({
  "duration": 119167,
  "status": "passed"
});
formatter.match({
  "location": "BO_Create_A_Post.java:11"
});
formatter.result({
  "duration": 7666724445,
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
  "location": "BO_Create_A_Post.java:14"
});
formatter.result({
  "duration": 6015907978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is the title of the post",
      "offset": 36
    }
  ],
  "location": "BO_Create_A_Post.java:17"
});
formatter.result({
  "duration": 2830544685,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:30"
});
formatter.result({
  "duration": 50138639,
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
  "keyword": "And "
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
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:27"
});
formatter.result({
  "duration": 2730025652,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "duration": 1229882823,
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
  "location": "BO_Login_Steps.java:16"
});
formatter.result({
  "duration": 2528744689,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:20"
});
formatter.result({
  "duration": 72983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 26
    }
  ],
  "location": "BO_Login_Steps.java:23"
});
formatter.result({
  "duration": 984705534,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:30"
});
formatter.result({
  "duration": 2142644955,
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
  "keyword": "And "
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
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:27"
});
formatter.result({
  "duration": 2561808766,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "duration": 1277496141,
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
  "location": "BO_Login_Steps.java:16"
});
formatter.result({
  "duration": 870591737,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:20"
});
formatter.result({
  "duration": 65571,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:33"
});
formatter.result({
  "duration": 164881343,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:30"
});
formatter.result({
  "duration": 2152083688,
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
  "keyword": "And "
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
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:27"
});
formatter.result({
  "duration": 2219932639,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "duration": 1162439839,
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
  "location": "BO_Login_Steps.java:16"
});
formatter.result({
  "duration": 1060652729,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:20"
});
formatter.result({
  "duration": 63860,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:33"
});
formatter.result({
  "duration": 206075593,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:30"
});
formatter.result({
  "duration": 2274427441,
  "status": "passed"
});
});
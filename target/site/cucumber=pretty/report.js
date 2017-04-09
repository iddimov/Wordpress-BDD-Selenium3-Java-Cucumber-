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
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "duration": 6329909405,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 1382632782,
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
  "duration": 3315141179,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:19"
});
formatter.result({
  "duration": 46185,
  "status": "passed"
});
formatter.match({
  "location": "BO_Create_New_Post.java:11"
});
formatter.result({
  "duration": 4607512802,
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
  "location": "BO_Create_New_Post.java:12"
});
formatter.result({
  "duration": 6260458664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is the title of the post",
      "offset": 36
    }
  ],
  "location": "BO_Create_New_Post.java:15"
});
formatter.result({
  "duration": 2343654727,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:28"
});
formatter.result({
  "duration": 70729083,
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
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "duration": 3734762089,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 1100000399,
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
  "duration": 2222766934,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:19"
});
formatter.result({
  "duration": 48466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 26
    }
  ],
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 864264728,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:28"
});
formatter.result({
  "duration": 225229540,
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
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "duration": 3438658641,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 1141735274,
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
  "duration": 819042634,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:19"
});
formatter.result({
  "duration": 31930,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:29"
});
formatter.result({
  "duration": 149070065,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:28"
});
formatter.result({
  "duration": 288241811,
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
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "duration": 3461220082,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 1124280932,
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
  "duration": 836901232,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:19"
});
formatter.result({
  "duration": 28509,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:29"
});
formatter.result({
  "duration": 148447999,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:28"
});
formatter.result({
  "duration": 277548091,
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
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "duration": 3415751101,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 1160267254,
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
  "duration": 899689423,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:19"
});
formatter.result({
  "duration": 27939,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:29"
});
formatter.result({
  "duration": 189106374,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:28"
});
formatter.result({
  "duration": 305724091,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Login with valid username and password in BO as admin",
  "description": "",
  "id": "login-in-bo;login-with-valid-username-and-password-in-bo-as-admin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I Open a browser \"Firefox\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I navigate to BO login page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I enter username: \"admin\" and password: \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should see my username \"admin\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "duration": 4752998717,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 1604832957,
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
  "duration": 344862937,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:19"
});
formatter.result({
  "duration": 26799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 26
    }
  ],
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 1718149333,
  "error_message": "org.openqa.selenium.InvalidArgumentException: Missing or invalid type argument for pointer action\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027JD-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\JD\\AppData\\Local\\Temp\\rust_mozprofile.x1Cr33yU4Zik, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, page load\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d52.0.2, platformVersion\u003d10.0, moz:processID\u003d2516, browserName\u003dfirefox, platformName\u003dwindows_nt}]\nSession ID: 18a99653-2654-4d17-b5a4-1a0288dc4481\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:99)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:43)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:604)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:670)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:634)\r\n\tat Pages.DashboardPage.AccountName(DashboardPage.java:19)\r\n\tat Steps.BO_Login_Steps.lambda$new$2(BO_Login_Steps.java:23)\r\n\tat ✽.Then I should see my username \"admin\"(BO_Login.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BO_Login_Steps.java:28"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 45,
  "name": "Unable to login without username and password in BO",
  "description": "",
  "id": "login-in-bo;unable-to-login-without-username-and-password-in-bo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I Open a browser \"Firefox\"",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I navigate to BO login page",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I enter username: \"\" and password: \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I should see login error message",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "duration": 4800763813,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 1701051925,
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
  "duration": 235099921,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:19"
});
formatter.result({
  "duration": 29649,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:29"
});
formatter.result({
  "duration": 808313562,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:28"
});
formatter.result({
  "duration": 6319301,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Unable to login with valid username: \"admin\", but without password in BO",
  "description": "",
  "id": "login-in-bo;unable-to-login-with-valid-username:-\"admin\",-but-without-password-in-bo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "I Open a browser \"Firefox\"",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I navigate to BO login page",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I enter username: \"admin\" and password: \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should see login error message",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "duration": 4696138116,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 1734405727,
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
  "duration": 390751001,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:19"
});
formatter.result({
  "duration": 57018,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:29"
});
formatter.result({
  "duration": 785526330,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:28"
});
formatter.result({
  "duration": 5244513,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Unable to login without username, but with valid admin\u0027s password in BO",
  "description": "",
  "id": "login-in-bo;unable-to-login-without-username,-but-with-valid-admin\u0027s-password-in-bo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "I Open a browser \"Firefox\"",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "I navigate to BO login page",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I enter username: \"\" and password: \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I should see login error message",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 18
    }
  ],
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "duration": 4838785107,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:15"
});
formatter.result({
  "duration": 1621869357,
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
  "duration": 276947121,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:19"
});
formatter.result({
  "duration": 29649,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:29"
});
formatter.result({
  "duration": 688112836,
  "status": "passed"
});
formatter.match({
  "location": "BO_Login_Steps.java:28"
});
formatter.result({
  "duration": 6122589,
  "status": "passed"
});
});
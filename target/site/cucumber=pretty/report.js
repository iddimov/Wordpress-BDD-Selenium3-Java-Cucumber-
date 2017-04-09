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
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 15469312642,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom unknown error: page could not be found: chrome-extension://aapnijgdinlhnhlmodcfapnahmbfebeb/_generated_background_page.html\n  (Session info: chrome\u003d57.0.2987.133)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.13 seconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027JD-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\JD\\AppData\\Local\\Temp\\scoped_dir6736_28883}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d57.0.2987.133, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: aae0ad5294a2e9e6519bc8aede3f5cb9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:661)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:895)\r\n\tat Base.IDriver.SetUp(IDriver.java:18)\r\n\tat Steps.BO_Login_Steps.lambda$new$3(BO_Login_Steps.java:23)\r\n\tat ✽.Given I Open a browser \"Chrome\"(BO_Create_New_Post.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "status": "skipped"
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
  "location": "BO_Login_Steps.java:13"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:16"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Create_New_Post.java:11"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "status": "skipped"
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
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 12848653207,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom unknown error: page could not be found: chrome-extension://aapnijgdinlhnhlmodcfapnahmbfebeb/_generated_background_page.html\n  (Session info: chrome\u003d57.0.2987.133)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.11 seconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027JD-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\JD\\AppData\\Local\\Temp\\scoped_dir6248_9201}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d57.0.2987.133, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 187d72eac6cd92c1bc3fe4a114b48e30\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:661)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:895)\r\n\tat Base.IDriver.SetUp(IDriver.java:18)\r\n\tat Steps.BO_Login_Steps.lambda$new$3(BO_Login_Steps.java:23)\r\n\tat ✽.Given I Open a browser \"Chrome\"(BO_Login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "status": "skipped"
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
  "location": "BO_Login_Steps.java:13"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:16"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 26
    }
  ],
  "location": "BO_Login_Steps.java:19"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "status": "skipped"
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
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 12359366029,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom unknown error: page could not be found: chrome-extension://aapnijgdinlhnhlmodcfapnahmbfebeb/_generated_background_page.html\n  (Session info: chrome\u003d57.0.2987.133)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.11 seconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027JD-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\JD\\AppData\\Local\\Temp\\scoped_dir7060_20250}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d57.0.2987.133, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: fd6684006eea59f0efa04146ae68d8fd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:661)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:895)\r\n\tat Base.IDriver.SetUp(IDriver.java:18)\r\n\tat Steps.BO_Login_Steps.lambda$new$3(BO_Login_Steps.java:23)\r\n\tat ✽.Given I Open a browser \"Chrome\"(BO_Login.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "status": "skipped"
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
  "location": "BO_Login_Steps.java:13"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:16"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:26"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "status": "skipped"
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
  "location": "BO_Login_Steps.java:22"
});
formatter.result({
  "duration": 12372282879,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom unknown error: page could not be found: chrome-extension://aapnijgdinlhnhlmodcfapnahmbfebeb/_generated_background_page.html\n  (Session info: chrome\u003d57.0.2987.133)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.08 seconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027JD-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\JD\\AppData\\Local\\Temp\\scoped_dir7432_1910}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d57.0.2987.133, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: e68636faac2d06782cc66a4194872a84\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:661)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:895)\r\n\tat Base.IDriver.SetUp(IDriver.java:18)\r\n\tat Steps.BO_Login_Steps.lambda$new$3(BO_Login_Steps.java:23)\r\n\tat ✽.Given I Open a browser \"Chrome\"(BO_Login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "status": "skipped"
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
  "location": "BO_Login_Steps.java:13"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:16"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:26"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "status": "skipped"
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
  "name": "I enter username: \"\" and password: \"pass\"",
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
  "duration": 9790415622,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom chrome not reachable\n  (Session info: chrome\u003d57.0.2987.133)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6.90 seconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027JD-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\JD\\AppData\\Local\\Temp\\scoped_dir7868_12361}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d57.0.2987.133, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 00a149336fa47e6900358e874decb27a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:661)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:895)\r\n\tat Base.IDriver.SetUp(IDriver.java:18)\r\n\tat Steps.BO_Login_Steps.lambda$new$3(BO_Login_Steps.java:23)\r\n\tat ✽.Given I Open a browser \"Chrome\"(BO_Login.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BO_Login_Steps.java:12"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "pass",
      "offset": 36
    }
  ],
  "location": "BO_Login_Steps.java:13"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:16"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:26"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BO_Login_Steps.java:25"
});
formatter.result({
  "status": "skipped"
});
});
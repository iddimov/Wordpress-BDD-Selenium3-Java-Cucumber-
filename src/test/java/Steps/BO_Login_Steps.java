package Steps;

import Base.IDriver;
import Pages.DashboardPage;
import Pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java8.En;
import org.testng.Assert;

public class BO_Login_Steps extends Base.BaseUtil implements En {
    public BO_Login_Steps() {
        When("^I navigate to BO login page$", () -> {
            System.out.println("Go To URL...");
            LoginPage.GoToURL();
        });
        And("^I enter username: \"([^\"]*)\" and password: \"([^\"]*)\"$", (String userName, String password) -> {
            System.out.println("With username: " + userName + " and password: " + password);
            LoginPage.LoginAs(userName).WithPassword(password).Login();
        });
        And("^I click on login button$", () -> {
            System.out.println("Click on the button");
        });
        Then("^I should see my username \"([^\"]*)\"$", (String userName) -> {
            System.out.println("My login name is: " + userName);
            Assert.assertEquals(DashboardPage.AccountName(),userName);
        });
        Given("^I Open a browser \"([^\"]*)\"$", (String browserName) -> {
            IDriver.Initialize();
        });
        And("^I close the browser$", () -> {
            IDriver.Teardown();
        });
        Then("^I should see login error message$", () -> {
            Assert.assertTrue(LoginPage.ErrorMsg());
        });
    }
}

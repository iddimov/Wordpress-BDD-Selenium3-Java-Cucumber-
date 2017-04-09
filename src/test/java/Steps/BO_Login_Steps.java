package Steps;

import Base.BaseUtil;
import Base.IDriver;
import Pages.DashboardPage;
import Pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java8.En;
import org.testng.Assert;

import static Base.BaseUtil.*;

public class BO_Login_Steps extends Base.BaseUtil implements En {
    public BO_Login_Steps() {
        When("^I navigate to BO login page$", LoginPage::GoToURL);
        And("^I enter username: \"([^\"]*)\" and password: \"([^\"]*)\"$", (String userName, String password) -> {
            LoginPage.LoginAs(userName).WithPassword(password).Login();
        });
        And("^I click on login button$", () -> {

        });
        Then("^I should see my username \"([^\"]*)\"$", (String userName) -> {
            Assert.assertEquals(DashboardPage.AccountName(),userName);
        });
        Given("^I Open a browser \"([^\"]*)\"$", (String browserName) -> {
            IDriver.SetUp(browserName);
        });
        And("^I close the browser$", IDriver::TearDown);
        Then("^I should see login error message$", () -> {
            Assert.assertTrue(LoginPage.ErrorMsg());
        });
    }
}

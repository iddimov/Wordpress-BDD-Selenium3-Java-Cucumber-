package Steps;

import Base.IDriver;
import Pages.BO_DashboardPage;
import Pages.BO_LoginPage;
import cucumber.api.java8.En;
import org.testng.Assert;

public class BO_Login_Steps implements En {
    public BO_Login_Steps() {
        When("^I navigate to BO login page$", BO_LoginPage::GoToURL);
        And("^I enter username: \"([^\"]*)\" and password: \"([^\"]*)\"$", (String userName, String password) -> {
            BO_LoginPage.LoginAs(userName).WithPassword(password).Login();
        });
        And("^I click on login button$", () -> {

        });
        Then("^I should see my username \"([^\"]*)\"$", (String userName) -> {
            Assert.assertEquals(BO_DashboardPage.AccountName(),userName);
        });
        Given("^I Open a browser \"([^\"]*)\"$", IDriver::SetUp);
        And("^I close the browser$", IDriver::TearDown);
        Then("^I should see login error message$", () -> {
            Assert.assertTrue(BO_LoginPage.ErrorMsg());
        });
    }
}

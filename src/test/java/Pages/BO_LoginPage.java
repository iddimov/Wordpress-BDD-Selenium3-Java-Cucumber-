package Pages;

import Base.BaseHTML_IDs;
import Base.IDriver;
import Commands.LoginCommand;
import org.openqa.selenium.By;

public class BO_LoginPage {
    public static void GoToURL() {
        IDriver.getDriver().navigate().to(IDriver.Base_BO_URL());
        IDriver.WaitForElementWithID(BaseHTML_IDs.bo_LoginPage_user_login,10);
    }

    public static LoginCommand LoginAs(String userName) {
        return new LoginCommand(userName);
    }

    public static boolean ErrorMsg() {
        IDriver.WaitForElementWithID(BaseHTML_IDs.bo_LoginPage_login_error,10);
        if(IDriver.getDriver().findElement(By.id(BaseHTML_IDs.bo_LoginPage_login_error)).isDisplayed()){return true;}
        return false;
    }
}

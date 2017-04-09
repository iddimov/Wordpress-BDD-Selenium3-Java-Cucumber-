package Pages;

import Base.IDriver;
import Commands.LoginCommand;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BO_LoginPage {
    public static void GoToURL() {
        IDriver.driver.navigate().to(IDriver.Base_BO_URL() + "wp-login.php");

        WebDriverWait wait = new WebDriverWait(IDriver.driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("user_login")));
    }

    public static LoginCommand LoginAs(String userName) {
        return new LoginCommand(userName);
    }

    public static boolean ErrorMsg() {
        WebDriverWait wait = new WebDriverWait(IDriver.driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("login_error")));

        if(IDriver.driver.findElement(By.id("login_error")).isDisplayed()){
            return true;
        }
        return false;
    }
}

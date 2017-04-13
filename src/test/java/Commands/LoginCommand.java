package Commands;

import Base.IDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

public class LoginCommand {
    private String userName;
    private String password;

    public LoginCommand(String userName) {
        this.userName = userName;
    }

    public LoginCommand WithPassword(String password) {
        this.password = password;
        return this;
    }

    public void Login() {
        WebElement loginInput = IDriver.getDriver().findElement(By.id("user_login"));
        loginInput.sendKeys(userName);

        WebElement passwordInput = IDriver.getDriver().findElement(By.id("user_pass"));
        passwordInput.sendKeys(password);

        WebElement loginButton = IDriver.getDriver().findElement(By.id("wp-submit"));
        loginButton.click();

        IDriver.getDriver().manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS);
    }
}

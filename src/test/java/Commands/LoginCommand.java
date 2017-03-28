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
        WebElement loginInput = IDriver.driver.findElement(By.id("user_login"));
        loginInput.sendKeys(userName);

        WebElement passwordInput = IDriver.driver.findElement(By.id("user_pass"));
        passwordInput.sendKeys(password);

        WebElement loginButton = IDriver.driver.findElement(By.id("wp-submit"));
        loginButton.click();

        IDriver.driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }
}

package Pages;

import Base.IDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DashboardPage {

    public static String AccountName(){
        WebDriverWait wait = new WebDriverWait(IDriver.driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("wp-admin-bar-my-account")));

        Actions actions = new Actions(IDriver.driver);
        WebElement barMyAccount = IDriver.driver.findElement(By.id("wp-admin-bar-my-account"));
        actions.moveToElement(barMyAccount);
        actions.build().perform();

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("display-name")));
        String displayName = IDriver.driver.findElement(By.className("display-name")).getText();

        return displayName;
    }
}

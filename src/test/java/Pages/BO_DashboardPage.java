package Pages;

import Base.BaseHTML_Classes;
import Base.BaseHTML_IDs;
import Base.IDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class BO_DashboardPage {

    public static String AccountName(){
        IDriver.WaitForElementWithID(BaseHTML_IDs.bo_LoginPage_wp_admin_bar_my_account,5);
        Actions actions = new Actions(IDriver.getDriver());

        WebElement barMyAccount = IDriver.getDriver().findElement(By.id(BaseHTML_IDs.bo_LoginPage_wp_admin_bar_my_account));
        actions.moveToElement(barMyAccount);
        actions.build().perform();

        IDriver.WaitForElementWithClass(BaseHTML_Classes.bo_Dashboard_display_name,5);
        return IDriver.getDriver().findElement(By.className(BaseHTML_Classes.bo_Dashboard_display_name)).getText();
    }
}

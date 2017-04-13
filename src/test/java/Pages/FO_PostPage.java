package Pages;

import Base.IDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class FO_PostPage {

    public static String Title(){

        WebElement title = IDriver.getDriver().findElement(By.className("entry-title"));
        if(title != null){
            return title.getText();
        }
        return "";
    }
}

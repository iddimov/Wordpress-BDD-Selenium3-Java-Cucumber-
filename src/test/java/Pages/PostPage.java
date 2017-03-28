package Pages;

import Base.IDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class PostPage {

    public static String Title(){

        WebElement title = IDriver.driver.findElement(By.className("entry-title"));
        if(title != null){
            return title.getText();
        }
        return "";
    }
}

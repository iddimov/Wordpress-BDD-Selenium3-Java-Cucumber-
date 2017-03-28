package Commands;

import Base.IDriver;
import org.openqa.selenium.By;

import java.util.concurrent.TimeUnit;

public class CreatePostCommand {
    private String title;
    private String body;

    public CreatePostCommand(String title){

        this.title = title;
    }

    public CreatePostCommand WithBody(String body) {
        this.body = body;
        return  this;
    }

    public void Publish() {
        IDriver.driver.findElement(By.id("title")).sendKeys(title);

        IDriver.driver.switchTo().frame("content_ifr");
        IDriver.driver.switchTo().activeElement().sendKeys(body);
        IDriver.driver.switchTo().defaultContent();

        IDriver.driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

        IDriver.driver.findElement(By.id("publish")).click();
    }
}

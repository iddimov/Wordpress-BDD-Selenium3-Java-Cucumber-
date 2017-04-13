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
        IDriver.getDriver().findElement(By.id("title")).sendKeys(title);

        IDriver.getDriver().switchTo().frame("content_ifr");
        IDriver.getDriver().switchTo().activeElement().sendKeys(body);
        IDriver.getDriver().switchTo().defaultContent();

        IDriver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

        IDriver.getDriver().findElement(By.id("publish")).click();
    }
}

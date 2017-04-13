package Pages;


import Base.IDriver;
import Commands.CreatePostCommand;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class BO_NewPostPage {

    public static void GoTo() {
        WebElement menuPosts = IDriver.getDriver().findElement(By.id("menu-posts"));
        menuPosts.click();

        WebElement addNew = IDriver.getDriver().findElement(By.linkText("Add New"));
        addNew.click();
    }

    public static CreatePostCommand CreatePost(String title) {
        return new CreatePostCommand(title);
    }

    public static void GoToNewPost() {

        WebElement message = IDriver.getDriver().findElement(By.id("sample-permalink"));
        WebElement newPostLink = message.findElements(By.tagName("a")).get(0);
        newPostLink.click();
    }

    public static void SwitchToNewWindow(){
        //String winHandleBefore = IDriver.Instance.getWindowHandle();

        for(String winHandle : IDriver.getDriver().getWindowHandles()){
            IDriver.getDriver().switchTo().window(winHandle);
        }
        //IDriver.Instance.switchTo().window(winHandleBefore);
    }
}

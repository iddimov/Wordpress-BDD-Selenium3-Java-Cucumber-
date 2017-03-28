package Tests;

import Base.BaseUtil;
import Pages.LoginPage;
import Pages.NewPostPage;
import Pages.PostPage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class BO_Create_A_Post extends BaseUtil {

    @Test
    public void BO_Admin_Can_Create_A_Basic_Post(){
        LoginPage.GoToURL();
        LoginPage.LoginAs("admin").WithPassword("password").Login();

        NewPostPage.GoTo();

        NewPostPage.CreatePost("This is test post title").WithBody("This is the post message body").Publish();

        NewPostPage.GoToNewPost();
        NewPostPage.SwitchToNewWindow();

        Assert.assertEquals(PostPage.Title(), "This is test post title", "Title are not match");
    }
}

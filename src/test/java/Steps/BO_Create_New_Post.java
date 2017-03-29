package Steps;

import Pages.NewPostPage;
import Pages.PostPage;
import cucumber.api.PendingException;
import cucumber.api.java8.En;
import org.testng.Assert;

public class BO_Create_New_Post implements En {
    public BO_Create_New_Post() {
        And("^I click on Add a Post$", NewPostPage::GoTo);
        And("^I create a Post with title: \"([^\"]*)\" and a body: \"([^\"]*)\" and publish$", (String postTitle, String postBody) -> {
            NewPostPage.CreatePost(postTitle).WithBody(postBody).Publish();
        });
        Then("^I verify that the post's title is: \"([^\"]*)\"$", (String postTitle) -> {
            NewPostPage.GoToNewPost();
            NewPostPage.SwitchToNewWindow();

            Assert.assertEquals(PostPage.Title(), postTitle);
        });
    }
}

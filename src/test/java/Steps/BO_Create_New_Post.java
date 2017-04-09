package Steps;

import Pages.BO_NewPostPage;
import Pages.FO_PostPage;
import cucumber.api.java8.En;
import org.testng.Assert;

public class BO_Create_New_Post implements En {
    public BO_Create_New_Post() {
        And("^I click on Add a Post$", BO_NewPostPage::GoTo);
        And("^I create a Post with title: \"([^\"]*)\" and a body: \"([^\"]*)\" and publish$", (String postTitle, String postBody) -> {
            BO_NewPostPage.CreatePost(postTitle).WithBody(postBody).Publish();
        });
        Then("^I verify that the post's title is: \"([^\"]*)\"$", (String postTitle) -> {
            BO_NewPostPage.GoToNewPost();
            BO_NewPostPage.SwitchToNewWindow();

            Assert.assertEquals(FO_PostPage.Title(), postTitle);
        });
    }
}

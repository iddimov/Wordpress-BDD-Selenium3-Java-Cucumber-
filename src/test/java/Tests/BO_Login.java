package Tests;

import Base.BaseUtil;
import Pages.DashboardPage;
import Pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class BO_Login extends BaseUtil{



    @Test
    public void BO_Can_LoginAsAdmin(){
        LoginPage.GoToURL();
        LoginPage.LoginAs("admin").WithPassword("password").Login();

        Assert.assertEquals(DashboardPage.AccountName(),"admin");
    }
    @Test
    public void BO_CanNot_LoginAsAdminWithoutPassword(){
        LoginPage.GoToURL();
        LoginPage.LoginAs("admin").WithPassword("").Login();

        Assert.assertTrue(LoginPage.ErrorMsg());
    }
    @Test
    public void BO_CanNot_LoginAsAdminWithoutUsername(){
        LoginPage.GoToURL();
        LoginPage.LoginAs("").WithPassword("password").Login();

        Assert.assertTrue(LoginPage.ErrorMsg());
    }
    @Test
    public void BO_CanNot_LoginAsAdminWithWrongPass(){
        LoginPage.GoToURL();
        LoginPage.LoginAs("admin").WithPassword("pass").Login();

        Assert.assertTrue(LoginPage.ErrorMsg());
    }
    @Test
    public void BO_CanNot_LoginAsAdminWithSpacesBeforePass(){
        LoginPage.GoToURL();
        LoginPage.LoginAs("admin").WithPassword("  pass").Login();

        Assert.assertTrue(LoginPage.ErrorMsg());
    }
}

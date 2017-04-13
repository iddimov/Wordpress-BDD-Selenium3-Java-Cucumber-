package Base;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

import static Base.BaseUtil.*;


public class IDriver {
    private static WebDriver driver;

    public static WebDriver getDriver() {
        return driver;
    }

    public static void setDriver(WebDriver driver) {
        IDriver.driver = driver;
    }

    public static void SetUp(String browserName){
        if(browserName.equalsIgnoreCase("Chrome")){
            System.setProperty(driverName_Chrome,driverPath_Chrome);
            setDriver(new ChromeDriver());
        }
        else if(browserName.equalsIgnoreCase("Firefox")){
            System.setProperty(driverName_Firefox,driverPath_Firefox);
            setDriver(new FirefoxDriver());
        }
        else if(browserName.equalsIgnoreCase("Edge")){
            System.setProperty(driverName_Edge,driverPath_Edge);
            setDriver(new EdgeDriver());
        }
        getDriver().manage().window().maximize();
        getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    public static String Base_BO_URL(){
        return "http://wordpress.localhost/wp-login.php";
    }
    public static String Base_FO_URL(){return "http://wordpress.localhost/";}

    public static void TearDown(){
        try{
            if(getDriver() != null){
                getDriver().close();
            }
        }catch(Exception e){
            System.out.println("Error " + e);
        }
    }

    public static void WaitForElementWithID(String ElementId, int Seconds) {
        WebDriverWait wait = new WebDriverWait(IDriver.getDriver(), Seconds);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(ElementId)));
    }

    public static void WaitForElementWithClass(String ElementClass, int Seconds) {
        WebDriverWait wait = new WebDriverWait(IDriver.getDriver(), Seconds);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.className(ElementClass)));
    }
}

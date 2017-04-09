package Base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.concurrent.TimeUnit;

import static Base.BaseUtil.*;


public class IDriver {
    public static WebDriver driver;

    public static void SetUp(String browserName){
        if(browserName.equalsIgnoreCase("Chrome")){
            System.setProperty(driverName_Chrome,driverPath_Chrome);
            driver = new ChromeDriver();
        }
        else if(browserName.equalsIgnoreCase("Firefox")){
            System.setProperty(driverName_Firefox,driverPath_Firefox);
            driver = new FirefoxDriver();
        }
        else if(browserName.equalsIgnoreCase("Edge")){
            System.setProperty(driverName_Edge,driverPath_Edge);
            driver = new EdgeDriver();
        }
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    public static String Base_BO_URL(){
        return "http://wordpress.localhost/";
    }

    public static void TearDown(){
        if(driver != null){
            driver.close();
        }
    }
}

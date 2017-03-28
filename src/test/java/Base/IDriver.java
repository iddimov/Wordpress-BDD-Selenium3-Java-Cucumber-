package Base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;

import java.util.concurrent.TimeUnit;

public class IDriver {

    public static WebDriver driver;

    public static void Initialize(){
        System.setProperty(BaseUtil.driverName,BaseUtil.driverPath);
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    public static String Base_BO_URL(){
        return "http://wordpress.localhost/";
    }

    public static void Teardown(){
        if(driver != null){
            driver.close();
        }
    }
}
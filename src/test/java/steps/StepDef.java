package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.omg.CORBA.TIMEOUT;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.sql.SQLOutput;


public class StepDef {
    WebDriver driver;

    @Given("^I am a Google chrome user$")
    public void step1() {
        System.out.println("i am in given");
        System.setProperty("webdriver.chrome.driver", "D:\\Data\\Multiplebrowsers\\src\\test\\java\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    @When("^I access booking\\.com$")
    public void step2() {
        System.out.print("i am in when");
        driver.get("https://www.google.co.uk/");
    }

    @Then("^I see booking\\.com Home page$")
    public void step3() {
        System.out.print("i am then");
        Assert.assertEquals(true, driver.getTitle().contains("Google"));
        driver.quit();

    }

    @When("^I access \"([^\"]*)\" Website$")
    public void i_access_Website(String arg1) {
        driver.get(arg1);
    }

    @Then("^I can see \"([^\"]*)\" homePage$")
    public void i_can_see_homePage(String arg1) {
        Assert.assertEquals(true,driver.getTitle().contains(arg1));

         driver.quit();
    }


    @When("^title of the login page is free crm$")
    public void title_of_the_login_page_is_free_crm() {
        driver.get("https://www.freecrm.com/index.html");
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("#1 Free CRM software in the cloud for sales and service",title);
    }

    @Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_and(String username, String password) {
        driver.findElement(By.name("username")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);
    }

    @Then("^user click on login button$")
    public void user_click_on_login_button() {
        WebElement loginBtn=driver.findElement(By.xpath("//input[@type='submit']"));
        JavascriptExecutor js= (JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();",loginBtn);
    }

    @Then("^user is on home page$")
    public void user_is_on_home_page() {
        String title = driver.getTitle();
        System.out.println("homepage is "+title);
        Assert.assertEquals("#1 Free CRM software in the cloud for sales and service",title);
    }


}





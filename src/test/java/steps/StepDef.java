package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


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

}





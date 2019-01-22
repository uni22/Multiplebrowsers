package utility;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

    @RunWith(Cucumber.class)
    @CucumberOptions(
            features ="D:\\Data\\Multiplebrowsers\\src\\test\\features",

            //tags = {"@regression"},
            glue={"steps"},
            //format = {"json:target/cucumber.json" +
            //        ""}
            // plugin = { "pretty", "html:target/cucumber-reports" }
             plugin = { "pretty", "json:target/cucumber.json" }
    )
    public class TestRunner {


    }

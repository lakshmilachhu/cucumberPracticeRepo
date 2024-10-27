package com.tyss.vtiger.stepDefinations;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.time.Duration;
import java.util.List;
import java.util.Map;

public class CreateContactStepDefs {
    WebDriver driver;
    @Given("Open {string} browser")
    public void OpenBrowser(String browserName)
    {
        driver = switch (browserName.toLowerCase()) {
            case "chrome" -> new ChromeDriver();
            case "firefox" -> new FirefoxDriver();
            default -> throw new IllegalStateException("Unexpected value: " + browserName.toLowerCase());
        };
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

    }

    @Given("Maximize the browser")
    public void maximize_the_browser() {
        driver.manage().window().maximize();
    }

    @Then("Navigate {string} application")
    public void navigate_the_application(String applicationName) {
        driver.get(applicationName);
    }

    @Then("close browser")
    public void closeBrowser() {
        driver.quit();
    }

    @And("wait for {int} seconds")
    public void waitForSeconds(int sec) throws InterruptedException {
        Thread.sleep(1000L*sec);
    }

    @Then("send below Details")
    public void passBelowDetails(DataTable details) {

        List<Map<String, String>> map = details.asMaps();
        System.out.println(map.get(1).get("fn"));
        System.out.println(map.get(0).get("ln"));
        System.out.println(map.get(1).get("msg"));
    }
}

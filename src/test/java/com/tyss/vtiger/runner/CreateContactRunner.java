package com.tyss.vtiger.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features = {"classpath:featurefiles/CreateContact.feature"},
        glue = {"classpath:com.tyss.vtiger.stepDefinations"},
        plugin = {"pretty",
                  "html:test-output/report/cucumber-report/html",
                  "json:test-output/report/cucumber-report/cucumber.json",
                  "junit:test-output/report/cucumber-report/cucumber.xml",
                  "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
        tags = {"@CC"}
)
public class CreateContactRunner extends AbstractTestNGCucumberTests {

}

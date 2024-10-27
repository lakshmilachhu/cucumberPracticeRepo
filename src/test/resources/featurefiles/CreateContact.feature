@CC
Feature: Creating a customer contact details
#  Background: Pre-actions

  @CC01
  Scenario Outline: Actions
    Given Open "chrome" browser
    And Maximize the browser
    Then Navigate "<url>" application
#    And Check whether application is successfully launched
#    Given Login with credentials "<UserName>" and "<Password>"
#    When Check whether you are in HomePage
#    And Click on Contact
#    And Check you are in ContactPage
    Then close browser


    Examples:
      | UserName | Password | url |
      | admin    | admin    |http://localhost:8888|

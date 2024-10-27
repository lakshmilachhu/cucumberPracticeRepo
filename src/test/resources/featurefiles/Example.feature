@CC
Feature: Creating a customer contact details
#  Background: Pre-actions

  @CC01
  Scenario Outline: Actions
    Given Open "chrome" browser
    And Maximize the browser
    Then Navigate "<url>" application
    And wait for 2 seconds
    Then send below Details
      |fn     |ln       |msg         |
      | mohan | lakshmi |Good Morning|
      | xyz  |pqr      |Good Evening|
    Then close browser
#    And Check whether application is successfully launched
#    Given Login with credentials "<UserName>" and "<Password>"
#    When Check whether you are in HomePage
#    And Click on Contact
#    And Check you are in ContactPage


    Examples:
      | UserName | Password | url |
      | admin    | admin    |http://localhost:8888|

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefiles/CreateContact.feature");
formatter.feature({
  "name": "Creating a customer contact details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CC"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Actions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CC01"
    }
  ]
});
formatter.step({
  "name": "Open \"chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "name": "Maximize the browser",
  "keyword": "And "
});
formatter.step({
  "name": "Navigate \"\u003curl\u003e\" application",
  "keyword": "Then "
});
formatter.step({
  "name": "wait for 2 seconds",
  "keyword": "And "
});
formatter.step({
  "name": "send below Details",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "fn",
        "ln",
        "msg"
      ]
    },
    {
      "cells": [
        "mohan",
        "lakshmi",
        "Good Morning"
      ]
    },
    {
      "cells": [
        "xyz",
        "pqr",
        "Good Evening"
      ]
    }
  ]
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "url"
      ]
    },
    {
      "cells": [
        "admin",
        "admin",
        "http://localhost:8888"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Actions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CC"
    },
    {
      "name": "@CC01"
    }
  ]
});
formatter.step({
  "name": "Open \"chrome\" browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateContactStepDefs.OpenBrowser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Maximize the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CreateContactStepDefs.maximize_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate \"http://localhost:8888\" application",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateContactStepDefs.navigate_the_application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for 2 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "CreateContactStepDefs.waitForSeconds(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send below Details",
  "rows": [
    {
      "cells": [
        "fn",
        "ln",
        "msg"
      ]
    },
    {
      "cells": [
        "mohan",
        "lakshmi",
        "Good Morning"
      ]
    },
    {
      "cells": [
        "xyz",
        "pqr",
        "Good Evening"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateContactStepDefs.passBelowDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateContactStepDefs.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
});
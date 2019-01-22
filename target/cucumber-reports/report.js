$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Examples.feature");
formatter.feature({
  "line": 1,
  "name": "Multi Bank",
  "description": "",
  "id": "multi-bank",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am a Google chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access \"\u003cBankWebsite\u003e\" Website",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I can see \"\u003cBankName\u003e\" homePage",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "multi-bank;open-multi-windows;",
  "rows": [
    {
      "cells": [
        "BankWebsite",
        "BankName"
      ],
      "line": 8,
      "id": "multi-bank;open-multi-windows;;1"
    },
    {
      "cells": [
        "https://www.hsbc.com/",
        "HSBC"
      ],
      "line": 9,
      "id": "multi-bank;open-multi-windows;;2"
    },
    {
      "cells": [
        "https://www.barclays.co.uk/",
        "Barclays"
      ],
      "line": 10,
      "id": "multi-bank;open-multi-windows;;3"
    },
    {
      "cells": [
        "https://www.lloydsbank.com/",
        "Lloyds"
      ],
      "line": 11,
      "id": "multi-bank;open-multi-windows;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am a Google chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access \"https://www.hsbc.com/\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I can see \"HSBC\" homePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.step1()"
});
formatter.result({
  "duration": 4990571748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.hsbc.com/",
      "offset": 10
    }
  ],
  "location": "StepDef.i_access_Website(String)"
});
formatter.result({
  "duration": 4986931766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HSBC",
      "offset": 11
    }
  ],
  "location": "StepDef.i_can_see_homePage(String)"
});
formatter.result({
  "duration": 920352097,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am a Google chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access \"https://www.barclays.co.uk/\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I can see \"Barclays\" homePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.step1()"
});
formatter.result({
  "duration": 2764110266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.barclays.co.uk/",
      "offset": 10
    }
  ],
  "location": "StepDef.i_access_Website(String)"
});
formatter.result({
  "duration": 3923159439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Barclays",
      "offset": 11
    }
  ],
  "location": "StepDef.i_can_see_homePage(String)"
});
formatter.result({
  "duration": 927304177,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am a Google chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access \"https://www.lloydsbank.com/\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I can see \"Lloyds\" homePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.step1()"
});
formatter.result({
  "duration": 2635669775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.lloydsbank.com/",
      "offset": 10
    }
  ],
  "location": "StepDef.i_access_Website(String)"
});
formatter.result({
  "duration": 4230328399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lloyds",
      "offset": 11
    }
  ],
  "location": "StepDef.i_can_see_homePage(String)"
});
formatter.result({
  "duration": 875256122,
  "status": "passed"
});
formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "first single browser and multiple browser",
  "description": "",
  "id": "first-single-browser-and-multiple-browser",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "open the url for chrome users",
  "description": "",
  "id": "first-single-browser-and-multiple-browser;open-the-url-for-chrome-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am a Google chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access booking.com",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I see booking.com Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.step1()"
});
formatter.result({
  "duration": 2525356150,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.step2()"
});
formatter.result({
  "duration": 1793293322,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.step3()"
});
formatter.result({
  "duration": 1078546469,
  "status": "passed"
});
});
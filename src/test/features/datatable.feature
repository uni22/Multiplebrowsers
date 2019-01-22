Feature: doing the data driven using the regular expressions
  # WITH EXAMPLES keyword
  Scenario Outline: data using regular expression

    Given I am a Google chrome user
    When title of the login page is free crm
    Then user enters "<username>" and "<password>"
    Then user click on login button
    Then user is on home page

    Examples:
         | username | password |
         | naveenk  | test@123 |
         | tom      | test456  |



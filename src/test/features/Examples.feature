Feature: Multi Bank
  Scenario Outline:  Open Multi Windows
    Given I am a Google chrome user
    When I access "<BankWebsite>" Website
    Then I can see "<BankName>" homePage

    Examples:
      |BankWebsite|BankName|
      |https://www.hsbc.com/|HSBC|
      |https://www.barclays.co.uk/|Barclays|
      |https://www.lloydsbank.com/|Lloyds  |
Feature: Booking Flight Functionality
  Everybody wants to book flight successfully

  Scenario Outline: Successful flight booking with valid entries
    Given I have "<destination>" and "<amount>" of passengers
    Given I also have departure "<date>"
    When I input the data into the form
    Then I receive booking flight "<result>"

    Examples:
      | destination         | amount      |       date              |    result       |
      | Paris               | 2           |       22.08.2022        |       ok        |
      | anywhere else       | 2           |       22.08.2022        |       no        |
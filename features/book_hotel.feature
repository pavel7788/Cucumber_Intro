Feature: Booking Hotel Functionality
  Everybody wants to book hotels successfully

  Scenario Outline: Successful hotel booking with valid entries
    Given I have "<hotel name>" and "<amount>" of persons
    Given I have "<checkin>" and "<checkout>" dates
    When I input the data
    Then I receive booking hotel "<result>"

    Examples:
      | hotel name          | amount      |       checkin           |    checkout       | result  |
      | Diva                | 2           |       22.08.2022        |   30.08.2022      | ok      |
      | anything else       | 2           |       22.08.2022        |   30.08.2022      | no      |
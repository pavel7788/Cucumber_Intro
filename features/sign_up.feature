Feature: SignUp Functionality
  Everybody wants to sign up successfully

  Scenario Outline: Successful sign up with valid entries
    Given I want to register with "<username>" and "<password>"
    When I try these credentials
    Then I receive sign in "<result>"

    Examples:
      | username                | password           |       result    |
      | username                | password           |       ok        |
      | anything else           | password           |       no        |
      | username                | anything else      |       no        |
      | anything else           | anything else      |       no        |
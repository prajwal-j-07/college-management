# Contributing Guidelines

Thank you for your interest in contributing to our project! This document outlines some guidelines for contributing to our monorepo, which includes the server, client, and design components of our MERN stack project.

## Types of Contributions

We welcome the following types of contributions:

- Bug fixes
- Enhancements
- New features
- Documentation improvements

## Basic Rules and Regulations

- All contributions must follow our [Code of Conduct]()
- Contributors must create pull requests and not commit directly to the repository.
- Pull requests must include a clear description of the changes made.
- Pull requests must include passing tests where applicable.
- Pull requests must follow our commit message conventions. [Commit Message Conventions]()

### We use the following conventions for commit messages:

- feat: for new features
- enhancement: for enhancements to existing features
- bug-fix: for bug fixes
- refactor: for code refactoring
- docs: for documentation updates
- style: for formatting and styling changes
- test: for adding or updating tests
- chore: for routine maintenance tasks, such as updating dependencies

For example: `feat: Added new authentication method`

### Submitting a Pull Request

To submit a pull request:

- Fork the repository and create a new branch for your changes.
- Make your changes and commit them with clear commit messages following our conventions.
- Push your changes to your forked repository.
- Create a pull request with a clear description of the changes made and any relevant information.
- Wait for a review from our team. We may ask for additional changes or information before merging your pull request.

#### Advice on pull requests

Pull requests are the easiest way to contribute changes to git repos at Github. They are the preferred contribution method, as they offer a nice way for commenting and amending the proposed changes.

- You need a local "fork" of the Github repo.

- Use a "feature branch" for your changes. That separates the changes in the pull request from your other changes and makes it easy to edit/amend commits in the pull request. Workflow using "feature_x" as the example:

  - Update your local git fork to the tip (of the master, usually)
  - Create the feature branch with git checkout -b feature_x
  - Edit changes and commit them locally
  - Push them to your Github fork by git push -u origin feature_x. That creates the "feature_x" branch at your Github fork and sets it as the remote of this branch
  - When you now visit Github, you should see a proposal to create a pull request

- If you later need to add new commits to the pull request, you can simply commit the changes to the local branch and then use git push to automatically update the pull request.
- If you need to change something in the existing pull request (e.g. to add a missing signed-off-by line to the commit message), you can use git push -f to overwrite the original commits. That is easy and safe when using a feature branch. Example workflow:
  - Checkout the feature branch by git checkout feature_x
  - Edit changes and commit them locally. If you are just updating the commit message in the last commit, you can use git commit --amend to do that
  - If you added several new commits or made other changes that require cleaning up, you can use git rebase -i HEAD~X (X = number of commits to edit) to possibly squash some commits
  - Push the changed commits to Github with git push -f to overwrite the original commits in the "feature_x" branch with the new ones. The pull request gets automatically updated

> ‼ If you have commit access ‼
>
> - Do NOT use git push --force.
> - Do NOT commit to other maintainer's packages without their consent.
> - Use Pull Requests if you are unsure and to suggest changes to other maintainers.

Thank you for contributing to our project! We appreciate your help in making it better.

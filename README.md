# Tabula Rasa Brainstorming
## Introduction
Tabula Rasa is a solution architecture framework that simplifies development for individuals by providing them the best aspects of agile coding without the need for over-complexities regarding collaboration, archane software design reflexology or coupling with specific types of project and technologies.

It is a cloud based solution providing device and technology agnostic usage and implementation and dictates a single strongly defined set of methodologies along with the implementation of each as components of the tools available

## Applications
It is a set of single-page applications consisting of the following:

  - Project Management
  - Feature Management
  - Testing Tools
  - Release Tools
  - Inter-relationships between each application for the purposes of integration and ease of use

# User Types
In order to provide these features various types of actors will interact with any given project, bearing in mind that not each application need be used nor must different people be responsible for different aspects of the system. User types per fuction comprise of
  - Project Managers/Creators
  - Feautre Coders/Developers
  - Product Testers and Documentation Writers
  - Proudct Release Engineers
  
## Project Managers/Creators
* Responsbile for initial project creation and given Tabula Rasa's emphasis on ease of use and accessibility, project creators not only maintain projects, they will often be an individual innovator who developed the core concept to begin with
* This is the only user role that is necessary to use the system, however, if the same individual requires the feature, testing and release roles they will also need to be configured and added for those purposes

## Feature Coders/Developers
* In the case of software development this would usually include the project creator for a Tabula Rasa project at least and potentially more coders if they are utilised in developing the solution
* Their role is to develop and govern ownership over features slanted for release in any given project

## Product Testers
* Testers are best left internal within the development team or the solo engineer for the purposes of testing and documenting features and/or sub-features of any given project
* Beta testing prior to shipping is a separate requirement and handled in the release and management processes

## Release Engineers
* Again, common for the solo engineer to be responsible. The release application is strongly automated but still governed and customised by the release engineers and/or the project managers

# Rules Framework
## Projects
* Projects must have an owner to exist
* Projects will always contain one default final release
* Projects must be named and described but their names and descriptions can change any time prior to final shipping
* Each project can have a maximum of ten milestones inclusive of the final release
* A release must have all features satisifed before they are able to be shipped including development, documentation, testing and certification
* No due date applies to releases, however, a shipped date will be included once the release is shipped which can be undone if a release requires recall

## Features
* Features do not need to belong to a release to exist but most belong to a project again with an owner and maximum of 140 character description and maximum 30 character name
* Features support up to five subfeatures with a maximum of 70 characters for descriptions and 15 characters for names
* Features must be marked as for release before they are actionable and statefulness can apply
* In the case of features without subfeatures, all that is required to complete the feature is for it to be developed and documented at which point it moves in to testing
* Testing rules apply to this transaction but once complete the feature will be completed in the attached project
* With sub-features, the same applies but dependicies must be met before moving on to the next sub-feature and all must be developed, documented and tested with ordering in mind before the overall feature is completed
* Dependencies are added, if necessary, to features and/or sub-features and this will also prevent development of the feature, if flagged, before the dependencies are fully resolved
* Each feature can have a maximum of 5 sub-features

## Testing
* Testing is required for all features and sub-features
* Documentation must be delivered to testers and testers must generate user friendly documentation of any tested feature
* Features that fail are pushed back to their designer along with notes to be resolved
* Features must be tested to even begin their dependencies

# Functions
* User registration and login
* OAuth authentication for Google, Facebook and Github
* Project listing/creation
* Project creation wizard
    * A name of up to 50 characters is required at this step for good governance
    * A description of up to 200 characters is required here for proper functionality and good governance
* Releases
    * By default, each project generates a release with the same name and description as the overall project (which can be modified at any time) which includes all mapped features for the project
    * Up to nine milestone releases can be developed and shipped before the final release is shipped. Here, names and descriptions are optional
    * Releases are then handled automatically through the release process. Managers can choose only to release documentation and the finished product using a universal project release tool per milestone. Managers can also choose to share either privately or publically with other users the complete roadmap generated by Tabula Rasa

* When users open site they are authenticated by cookie, authenticated by login or are allowed to create a new account. Login and account creation can be handled by OAuth using Facebook, Google and Github
* Once validated, users are redirected to their default view, usually project
* On the project screen the manager is able to either open an existing project or create a new one. At first log in they will only have create new available
* If they create new, they are prompted for name and description with constraints and the project is created
* By default the project contains only one release list with an "Add Feature" button as the only item on the list. If "Add Feature" is selected a quick wizard with name and optional description pops up
* From here the admin can either open the feature and expand on it in the features app or have the developer do so and move on
* Managers can create up to nine additional milestones. Milestones don't need names but they do create new lists across the top (similar to Trello)
* Depdencies are crucial once milestones are added as releases cannot be shipped until completed, tested and documented meaning that the completion of the prior milestone was also a depdency along with feature dependencies along the way through each milestone to release
* Features can be added through the app. They must be marked as linked to release before they will be added and once they are they are forcefully added to the final release as required before shipping
* Once marked, they can also be developed, documented and tested
* Sub-features are the same, they can be added to features but they are only actionable if the parent feature is marked as in the project
* Each has up to five sub-features

# Version
0.0
# Tech
Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [MongoDB] - NoSQL database for simplicity, scalability and flexibility for modern web apps
* [expressjs] - node.js web framework
* [Bootstrap CSS] - simple styles
* [node.js] - evented I/O for the backend

# Todos

 - Create MongoDB model for types
 - Create node.js backend configuration using MongoDB to provide Tabula Rasa its key data
 - Create Bootstrap, Express and AngularJS templates and controls to provide display and functionality for users
 - Deploy first beta of Tabula Rasa

License
----

Arbiter Software 2016

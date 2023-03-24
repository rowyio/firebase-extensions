# Create Firestore user document

**Author**: Rowy (**[https://rowy.io](https://rowy.io)**)

**Description**: Creates a Firestore document for each new user in your Firebase Authentication user collection.



**Details**: <!-- 
This file provides your users an overview of your extension. All content is optional, but this is the recommended format. Your users will see the contents of this file when they run the `firebase ext:info` command.

Include any important functional details as well as a brief description for any additional setup required by the user (both pre- and post-installation).

Learn more about writing a PREINSTALL.md file in the docs:
https://firebase.google.com/docs/extensions/alpha/create-user-docs#writing-preinstall
-->

Use this extension to send a friendly greeting.

When triggered by an HTTP request, this extension responds with your specified friendly greeting.

<!-- We recommend keeping the following section to explain how billing for Firebase Extensions works -->
# Billing

This extension uses other Firebase or Google Cloud Platform services which may have associated charges:

<!-- List all products the extension interacts with -->
- Cloud Functions

When you use Firebase Extensions, you're only charged for the underlying resources that you use. A paid-tier billing plan is only required if the extension uses a service that requires a paid-tier plan, for example calling to a Google Cloud Platform API or making outbound network requests to non-Google services. All Firebase services offer a free tier of usage. [Learn more about Firebase billing.](https://firebase.google.com/pricing)




**Configuration Parameters:**

* Users collection path: The path to the collection where user documents will be created. This collection will be created if it does not exist.

* Cloud Functions location: Where do you want to deploy the functions created for this extension? For help selecting a location, refer to the [location selection guide](https://firebase.google.com/docs/functions/locations).



**Cloud Functions:**

* **createUserDocument:** A function triggered by a user creation event in Firebase Authentication that creates the user document in Firestore.



**Access Required**:



This extension will operate with the following project IAM roles:

* datastore.user (Reason: Allows the extension to create the user document in Firestore.)

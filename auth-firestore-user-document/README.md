# Create Firestore user document

**Author**: Rowy (**[https://rowy.io](https://rowy.io)**)

**Description**: Creates a Firestore document for each new user in your Firebase Authentication user collection.



**Details**: Use this extension to create a document in Firestore whenever a new user is created in Firebase Authentication and populate it with the user's basic information.

When a new user is created in Firebase Authentication, this extension will be triggered to create a new document in the specified Firestore collection and populate it with the user data you specify (such as email, display name, image URL, etc.).

# Billing

This extension uses other Firebase or Google Cloud Platform services which may have associated charges:

- Cloud Functions

When you use Firebase Extensions, you're only charged for the underlying resources that you use. A paid-tier billing plan is only required if the extension uses a service that requires a paid-tier plan, for example calling to a Google Cloud Platform API or making outbound network requests to non-Google services. All Firebase services offer a free tier of usage. [Learn more about Firebase billing.](https://firebase.google.com/pricing)




**Configuration Parameters:**

* Users collection path: The path to the collection where user documents will be created. This collection will be created if it does not exist.

* Fields to populate: The fields to populate in the user document. If you select a field that does not exist in the user record, it will be ignored.

* Backfill existing users: If you enable this option, the extension creates user documents for all existing users right after installation is complete.

* Cloud Functions location: Where do you want to deploy the functions created for this extension? For help selecting a location, refer to the [location selection guide](https://firebase.google.com/docs/functions/locations).



**Cloud Functions:**

* **createUserDocument:** A function triggered by a user creation event in Firebase Authentication that creates the user document in Firestore.

* **backfillExistingUsers:** A function that runs after the extension is installed that creates user documents for all existing users if the backfill option is enabled.



**Access Required**:



This extension will operate with the following project IAM roles:

* datastore.user (Reason: Allows the extension to create the user document in Firestore.)

* firebaseauth.admin (Reason: Allows the extension to read the user record from Firebase Authentication.)

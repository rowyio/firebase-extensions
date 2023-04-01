# Manage user documents in Firestore

**Author**: Rowy (**[https://rowy.io](https://rowy.io)**)

**Description**: Creates a user document in Firestore for each user created in Firebase Authentication in a collection of your choice and populates it with the selected user fields. Optionally, deletes the user document when the user is deleted from Firebase Authentication.



**Details**: Use this extension to create a document in a Firestore collection of your choice whenever a new user is created in Firebase Authentication and populate it with the user fields you specify (eg email, display name, image URL, etc.).

Optionally, you can also configure the extension to delete the user's document when the user is deleted from Firebase Authentication.

# Billing

This extension uses other Firebase or Google Cloud Platform services which may have associated charges:

- Cloud Functions

When you use Firebase Extensions, you're only charged for the underlying resources that you use. A paid-tier billing plan is only required if the extension uses a service that requires a paid-tier plan, for example calling to a Google Cloud Platform API or making outbound network requests to non-Google services. All Firebase services offer a free tier of usage. [Learn more about Firebase billing.](https://firebase.google.com/pricing)




**Configuration Parameters:**

* Users collection path: The path to the collection where user documents will be created.

* Fields to populate: The fields to populate in the user document. If you select a field that does not exist in the user record, it will be ignored.

* Delete document on user delete: If you enable this option, the extension deletes the user document when the user is deleted from Firebase Authentication.

* Backfill existing users: If you enable this option, the extension creates user documents for all existing users right after installation is complete.

* Cloud Functions location: Where do you want to deploy the functions created for this extension? For help selecting a location, refer to the [location selection guide](https://firebase.google.com/docs/functions/locations).



**Cloud Functions:**

* **createUserDocument:** A function triggered by a user creation event in Firebase Authentication that creates the user document in Firestore.

* **deleteUserDocument:** A function triggered by a user deletion event in Firebase Authentication that deletes the user document in Firestore if the instance is configured to do so.

* **backfillExistingUsers:** A function triggered right after the extension installation is complete that creates user documents for already existing users if the instance is configured to do so.



**Access Required**:



This extension will operate with the following project IAM roles:

* datastore.user (Reason: Allows the extension to create the user document in Firestore.)

* firebaseauth.admin (Reason: Allows the extension to read the user record from Firebase Authentication.)

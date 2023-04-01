# Firestore User Document

**Author**: Rowy (**[https://rowy.io](https://rowy.io)**)

**Description**: Creates a document in a specified Firestore collection whenever a new user is created in Firebase Authentication. The document is populated with fields that you select from the user record. You can also choose to delete the user's document when the user is deleted from Firebase Authentication.



**Details**: Use this extension to create a document in a Firestore collection of your choice whenever a new user is created in Firebase Authentication. You can also specify the user fields you want to populate the document with, such as email, display name, image URL, etc.

Optionally, this extension can be configured to delete the user's document when the user is deleted from Firebase Authentication. Furthermore, the extension can be set to backfill existing users and create documents for all of them.

# Billing

This extension uses other Firebase or Google Cloud Platform services which may have associated charges:

- Cloud Functions

When you use Firebase Extensions, you're only charged for the underlying resources that you use. A paid-tier billing plan is only required if the extension uses a service that requires a paid-tier plan, for example calling to a Google Cloud Platform API or making outbound network requests to non-Google services. All Firebase services offer a free tier of usage. [Learn more about Firebase billing.](https://firebase.google.com/pricing)




**Configuration Parameters:**

* Users collection path: The path to the Firestore collection where user documents will be created.

* Fields to populate: Select the fields from the user record that you want to populate in the Firestore document. If you select a field that does not exist in the user record, it will be ignored.

* Delete document on user delete: If you enable this option, the extension will automatically delete the Firestore user document when the user is deleted from Firebase Authentication.

* Backfill existing users: If you enable this option, the extension will create Firestore user documents for all existing users right after installation is complete.

* Cloud Functions location: Where do you want to deploy the functions created for this extension? For help selecting a location, refer to the [location selection guide](https://firebase.google.com/docs/functions/locations).



**Cloud Functions:**

* **createUserDocument:** A function that is triggered when a new user is created in Firebase Authentication. It creates a user document in a specified Firestore collection and populates it with the selected fields from the user record.

* **deleteUserDocument:** A function that is triggered when a user is deleted from Firebase Authentication. If the instance is configured to do so, it deletes the user document from the specified Firestore collection.

* **backfillExistingUsers:** A function that is triggered right after the extension installation is complete. If the instance is configured to do so, it creates user documents in the specified Firestore collection for all existing users.



**Access Required**:



This extension will operate with the following project IAM roles:

* datastore.user (Reason: Allows the extension to create the user document in Firestore.)

* firebaseauth.admin (Reason: Allows the extension to read the user record from Firebase Authentication.)

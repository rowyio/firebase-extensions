# Firestore User Document

**Author**: Rowy (**[https://rowy.io](https://www.rowy.io)**)

**Description**: Create a document in a Firestore collection whenever a new user is created with Firesbase Authentication.

**Details**: Use this extension to create a document in a Firestore collection of your choice whenever a new user is created in Firebase Authentication. You can also specify the user fields that you want to include in the document, such as email, display name, image URL, etc. 

Optionally, this extension can be configured to delete the user's document when the user is deleted from Firebase Authentication. Additionally, the extension can be set to backfill existing Firebase Authenticated users in the collection and create documents for all of them.
 
## 🧩 Installation

To install the extension, follow the steps on the [Install a Firebase Extension](https://firebase.google.com/docs/extensions/install-extensions) page. In summary, do one of the following:

- **Install from the Firebase console:** Click the button below:

  [![install-extension](https://user-images.githubusercontent.com/35961879/201528504-4e99bfc7-8691-4151-b63d-0511097d7c18.png)](https://console.firebase.google.com/project/_/extensions/install?ref=rowy/firestore-user-document)

- **Install from the Firebase CLI:** Run the following command:

  ```
  firebase ext:install rowy/firestore-user-document --project=YOUR_PROJECT_ID
  ```

## 🛠️ Configuration Parameters

| Name                           | Description                                                                                                                                                                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Users collection path          | The path to the Firestore collection where user documents will be created.                                                                                                                          |
| Fields to populate             | Select the fields from the user record that you want to populate in the Firestore document. If you select a field that does not exist in the user record, it will be ignored.                       |
| Delete document on user delete | If you enable this option, the extension will automatically delete the Firestore user document when the user is deleted from Firebase Authentication.                                               |
| Backfill existing users        | If you enable this option, the extension will create Firestore user documents for all existing users right after installation is complete.                                                          |
| Cloud Functions location       | Where do you want to deploy the functions created for this extension? For help selecting a location, refer to the [location selection guide](https://firebase.google.com/docs/functions/locations). |

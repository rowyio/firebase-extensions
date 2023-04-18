Use this extension to create a document in a Firestore collection of your choice whenever a new user is created in Firebase Authentication. You can also specify the user fields that you want to include in the document, such as email, display name, image URL, etc.

Optionally, this extension can be configured to delete the user's document when the user is deleted from Firebase Authentication. Additionally, the extension can be set to backfill existing Firebase Authenticated users in the collection and create documents for all of them.

#### Additional setup

Before installing this extension, make sure that you've
[set up a Cloud Firestore database](https://firebase.google.com/docs/firestore/quickstart)
in your Firebase project.

You can also optionally have a Rowy account setup after installing this extension - to manage the Firebase Authenticated users Firestore collection and any other Firestore collection on a collaborative spreadsheet-like CMS UI. You can do so on the [Rowy](https://www.rowy.io/?ref=extension) site.

#### Billing

This extension uses other Firebase or Google Cloud Platform services which may have associated charges:

- Cloud Functions

When you use Firebase Extensions, you're only charged for the underlying resources that you use. A paid-tier billing plan is only required if the extension uses a service that requires a paid-tier plan, for example calling to a Google Cloud Platform API or making outbound network requests to non-Google services. All Firebase services offer a free tier of usage. [Learn more about Firebase billing.](https://firebase.google.com/pricing)

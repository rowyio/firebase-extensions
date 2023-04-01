Use this extension to create a document in a Firestore collection of your choice whenever a new user is created in Firebase Authentication and populate it with the user fields you specify (eg email, display name, image URL, etc.).

Optionally, you can also configure the extension to delete the user's document when the user is deleted from Firebase Authentication.

You can also configure the extension to **backfill** existing users and create documents for all of them.

# Billing

This extension uses other Firebase or Google Cloud Platform services which may have associated charges:

- Cloud Functions

When you use Firebase Extensions, you're only charged for the underlying resources that you use. A paid-tier billing plan is only required if the extension uses a service that requires a paid-tier plan, for example calling to a Google Cloud Platform API or making outbound network requests to non-Google services. All Firebase services offer a free tier of usage. [Learn more about Firebase billing.](https://firebase.google.com/pricing)

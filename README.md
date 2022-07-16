# How to Build Full Next.js Chat App

Read the full tutorial here: [**>> How to Build Full Next.js Chat App**](https://www.cometchat.com/tutorials/#)

## Technology

This demo uses:

- CometChat Pro 3.0.6
- CometChat React UI Kit
- Firebase
- Next.js
- React.js
- Uuid
- Validator

## Running the demo

To run the demo follow these steps:

1. [Head to CometChat Pro and create an account](https://app.cometchat.com/signup)
2. From the [dashboard](https://app.cometchat.com/apps), add a new app called **"next-chat-app"**
3. Select this newly added app from the list.
4. From the Quick Start copy the **APP_ID, APP_REGION and AUTH_KEY**. These will be used later.
5. Also copy the **REST_API_KEY** from the API & Auth Key tab.
6. Navigate to the Users tab, and delete all the default users and groups leaving it clean **(very important)**.
7. Download the repository [here](https://github.com/cometchat-pro-tutorials/next-chat-app/archive/main.zip) or by running `git clone https://github.com/cometchat-pro-tutorials/next-chat-app.git` and open it in a code editor.
8. [Head to Firebase and create a new project](https://console.firebase.google.com)
9. Create a file called **.env.local** in the root folder of your project.
10. Import and inject your secret keys in the **.env.local** file containing your CometChat and Firebase in this manner.

```js
NEXT_PUBLIC_FIREBASE_API_KEY=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
NEXT_PUBLIC_FIREBASE_DATABASE_URL=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
NEXT_PUBLIC_FIREABSE_MESSAGING_SENDER_ID=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx

NEXT_PUBLIC_COMETCHAT_APP_ID=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
NEXT_PUBLIC_COMETCHAT_REGION=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
NEXT_PUBLIC_COMETCHAT_AUTH_KEY=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
NEXT_PUBLIC_COMETCHAT_API_KEY=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
```

11. Make sure to exclude **.env.local** in your gitIgnore file from being exposed online.
12. Run the following command to install the app.

```sh
    npm install
    npm run dev
```

Questions about running the demo? [Open an issue](https://github.com/cometchat-pro-tutorials/next-chat-app/issues). We're here to help ✌️

## Useful links

- 🏠 [CometChat Homepage](https://app.cometchat.com/signup)
- 🚀 [Create your free account](https://app.cometchat.com/apps)
- 📚 [Documentation](https://prodocs.cometchat.com)
- 👾 [GitHub](https://www.github.com/cometchat-pro)
- 🔥 [Firebase](https://console.firebase.google.com)
- 🔷 [Next.js](https://nextjs.org/)

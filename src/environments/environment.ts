// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDLfrGsy6anQC1aj6lHa79cDXsNv4nUtuI",
    authDomain: "fir-infinite-scroll.firebaseapp.com",
    databaseURL: "https://fir-infinite-scroll.firebaseio.com",
    projectId: "fir-infinite-scroll",
    storageBucket: "fir-infinite-scroll.appspot.com",
    messagingSenderId: "124540578244"
  }
};

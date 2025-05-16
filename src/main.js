import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Luc Schnell",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["fail fast and improve from there"],
    // Which CI/CD tools do you use in your project?
    tools: "GitHub Actions, GitLab CI/CD",
    // What do you want to learn in this workshop?
    expectations: ["I would like to learn common CI/CD frameworks and techniques"],
  },
});

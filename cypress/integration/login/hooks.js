import {After, Before} from "cypress-cucumber-preprocessor/steps";

Before(() => {
    console.log("Login feature before hook")
});

Before({tags: "@customTag"},() => {
    console.log("Login feature before hook with tags")
});

After(() => {
    console.log("Login feature after hook")
});
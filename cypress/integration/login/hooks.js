import {After, Before} from "cypress-cucumber-preprocessor/steps";

Before(() => {
    console.log("Login feature before hook")
});

After(() => {
    console.log("Login feature after hook")
});
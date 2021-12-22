import {After, Before} from "cypress-cucumber-preprocessor/steps";

Before(() => {
    console.log("Global before hook")
});

After(() => {
    console.log("Global after hook")
});
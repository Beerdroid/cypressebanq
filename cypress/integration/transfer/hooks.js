import {After, Before} from "cypress-cucumber-preprocessor/steps";

Before(() => {
    console.log("Transfer feature before hook")
});

After(() => {
    console.log("Transfer feature after hook")
});
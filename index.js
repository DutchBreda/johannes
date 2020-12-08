#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card 
const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:j.breda@outlook.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Good Bye! Tot Ziens!\n");
                }
            }
        ]
    }
];

// Data for the card
const data = {
    name: chalk.bold.green("               Johannes Breda"),
    work: `${chalk.white("Full Stack Web")} ${chalk
        .hex("#2b82b2")
        .bold("Developer")}`,
    blog: chalk.gray("https://johannesbreda") + chalk.whiteBright(".com"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("HansBreda"),
    github: chalk.gray("https://github.com/") + chalk.green("DutchBreda"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.whiteBright("hansbreda"),
    web: chalk.cyan("https://hansbreda.com"),
    npx: chalk.red("by") + " " + chalk.white("johannes"),

    labelWork: chalk.white.bold("      Study:"),
    labelBlog: chalk.white.bold("       Blog:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelBlog}  ${data.blog}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "My daily routine:"
        )}`,
        `${chalk.italic("Get up. Be awesome. Go back to bed.....")}`,

    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

// Ask the Inquirer questions. 
prompt(questions).then(answer => answer.action());
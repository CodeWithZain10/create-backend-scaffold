#!/usr/bin/env node

import { program } from "commander";
import {createPromptModule} from "inquirer";
import init from "../src/commands/init.js";

const prompt = createPromptModule();

program
    .name("create-backend-scaffold")
    .description("CLI to scaffold a backend project")
    .action(init);

program.parse();

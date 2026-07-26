#!/usr/bin/env node

import { program } from "commander";
import {createPromptModule} from "inquirer";
import init from "../src/commands/init.js";

const prompt = createPromptModule();

program.command('init').action(init);

program.parse();

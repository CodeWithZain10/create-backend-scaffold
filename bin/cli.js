#!/usr/bin/env node // shebang line to specify the interpreter for the script
import { program } from "commander";
import {createPromptModule} from "inquirer";
import init from "../src/commands/init.js";

const prompt = createPromptModule();

program.command('init').action(init);

program.parse();

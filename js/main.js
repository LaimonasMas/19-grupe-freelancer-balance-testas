import { renderMetuBalansas } from "./components/renderMetuBalansas.js";
import { account } from "../js/data/data.js";
import { months } from "./data/months.js";


renderMetuBalansas('#content', account, months);
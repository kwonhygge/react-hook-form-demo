import RegexUtil from "./regex";
import { EMPTY_ERROR, FORMAT_ERROR } from "../constants/message";

export const emailRule = {
  pattern: {
    value: RegexUtil.REG_EMAIL,
    message: FORMAT_ERROR,
  },
  required: {
    value: true,
    message: EMPTY_ERROR,
  },
};

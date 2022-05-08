import { Setting } from "~/@types/cms/object/Setting";
import { Pagination } from "~/@types/cms/object/Pagination";

export type MembersResponse = Pagination & {
  contents: Member[];
};

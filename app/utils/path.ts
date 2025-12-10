import { joinURL } from "ufo";

export const getLinkPath = (path: string) => {
  return joinURL("/garden", path);
};


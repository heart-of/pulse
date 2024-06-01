import { time } from "@livesin/vessel";
import { Console } from "./console";

if (process.argv[2]) {
  new Console().connect(`ws://${process.argv[2]}:6334`);
} else {
  time("need ip");
}

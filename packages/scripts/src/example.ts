import { Resource } from "sst";
import { Example } from "@MY_APP/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);

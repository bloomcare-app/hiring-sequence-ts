import { describe, it, expect } from "vitest";
import { resolveTaskOrder } from "./taskScheduler.js";

describe("TaskScheduler", () => {
  it("should resolve task order for the example case", () => {
    const input = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`;

    const result = resolveTaskOrder(input);
    expect(result).toBe("CABDFE");
  });
});

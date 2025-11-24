# Bloom Care Live Coding Exercise: Task Dependency Resolution

In this exercise, you'll implement a small scheduling algorithm to determine the correct order in which tasks should be executed based on dependency constraints.

## The Problem

You're given a list of tasks, each represented by a single uppercase letter (e.g. A, B, C, etc.). Your goal is to compute a valid order in which to perform all the tasks, respecting the dependencies.

- Some tasks must be completed before others can begin.
- If multiple tasks are available to be executed at the same time, you must pick the one that comes first in alphabetical order.

## 🔧 Example

```txt
Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.
```

This can be visualized as a dependency graph:

```
  -->A--->B--
 /    \      \
C      -->D----->E
 \           /
  ---->F-----
```

✅ Expected Output : `CABDFE`

## 🧠 What We Are Evaluating

- How you model the problem
- The quality of your code
- Whether your code works or not
- Feel free to use AI or web searches as long as it's not directly how to solve the problem.

## 🛠️ Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the example test:

   ```bash
   pnpm test
   ```

3. Run your solution:
   ```bash
   pnpm start
   ```

## 🚀 Let's Get Started

- 📁 Create or rewrite as much as you want
- ✅ Use the input.txt file to check your implementation. The expected result is : `CFMNLOAHRKPTWBJSYZVGUQXIDE`

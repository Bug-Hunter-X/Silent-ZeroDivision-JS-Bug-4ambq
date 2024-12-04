# Uncommon JavaScript Bug: Silent Division by Zero

This repository demonstrates a subtle bug in JavaScript related to division by zero and conditional checks. The original code has a flaw in its zero-handling logic, leading to a potential runtime error. The solution shows how to correct the logic and prevent this error.

## Bug Description

The `foo` function attempts to gracefully handle cases where either `a` or `b` is zero by returning 0. However, the condition `a === 0 || b === 0` is not sufficient to prevent a division by zero when both `a` and `b` are 0 simultaneously. This leads to an unexpected runtime error.

## Solution

The solution enhances the conditional check to explicitly address the case where both `a` and `b` are 0, preventing the division by zero error. This ensures the function behaves as intended under all input scenarios.

## How to Reproduce

1. Clone the repository
2. Open `bug.js` to see the problematic code.
3. Run `bug.js`. The original code will produce a division-by-zero error. 
4. Open `bugSolution.js` to see the corrected code. 
5. Run `bugSolution.js`. This will execute without error.
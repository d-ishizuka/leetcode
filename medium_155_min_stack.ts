/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
    // each element has [val, min]
    private stack: number[][]
    constructor() {
        this.stack = [] 
    }

    push(val: number): void {
        if(this.stack.length === 0) {
            this.stack.push([val, val])
        } else if(this.stack[this.stack.length-1][1] < val){
            this.stack.push([val, this.stack[this.stack.length-1][1]])
        } else {
            this.stack.push([val, val])
        }
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length-1][0]
    }

    getMin(): number {
        return this.stack[this.stack.length-1][1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


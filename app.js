'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if(memo.has(n)) { //.hasはmemoを参照して(n)のkey値を持ってるかどうかでtrueかfalseを返す
        return memo.get(n); //もし持っていたらそれを返して終了する
    }
    const value = fib(n - 1) + fib(n - 2); //なければ計算をする
    memo.set(n, value);　// 計算結果を連想配列に追加する
    return value; //その値を返す
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
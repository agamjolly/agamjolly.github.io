---
title: "Test blog"
date: "2019-07-07"
draft: false
path: "/blog/hello"
---

## Running this as a test. 
This a test blog. 

```bash
git clone https://www.github.com/AgamJolly/BulkRepoDelete.git
```
##
## Java program to print Fibonacci Series using recursion.
I wrote the code written below myself, so you better appreciate 😤
```java
public class JollyTest {
   public static long fib(long n) {
      if ((n==0) || (n==1))
         return n;
      else
         return fib(n-1) + fib(n-2);
   }
   public static void main(String[] args) {
      System.out.println(fib(0) + ", ");
      System.out.println(fib(1) + ", ");
      System.out.println(fib(2) + ", ");
      System.out.println(fib(3) + ", ");
      System.out.println(fib(4) + ", ");
      System.out.println(fib(5));
   }
}
```
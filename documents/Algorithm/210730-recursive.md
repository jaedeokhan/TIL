# 재귀함수(recursive)
* 재귀함수란 어떤 것인지?
* 재귀함수로 1부터 N까지를 출력하는 예시를 통해서 알아보겠습니다.

## 재귀함수(recursive)란?
재귀함수는 자기 자신을 호출하는 함수입니다.

구글링을 다음과 같이 <a href="https://www.google.com/search?q=what+is+recursive+in+Algorihtm&oq=what+is+recursive+in+Algorihtm&aqs=chrome..69i57j0i13i30j0i8i13i30l2.8850j0j7&sourceid=chrome&ie=UTF-8" target="_blank" >what is recursive in Algorithm?</a>을 하면 아래와 같이 나옵니다.

> In computer science, recursion is a programming technique using function or algorithm that calls itself one or more times until a specified condition is met at which time the rest of each repetition is processed from the last one called to the first.

간단히 해석하면 재귀함수란 자기 자신을 한 번 또는 여러번 종료조건(기저조건)에 일치할 때까지 반복하는 프로그래밍 기술입니다.

**사실 저는 재귀함수가 어렵기도 하고 쉽게 다가가지 못했었습니다. 이번에 알고리즘을 공부하면서 재귀함수란 어떤것인지에 대해서 조금 더 알게 되었고 재미도 느끼고 있습니다 (:** 

나무위키에 재귀함수의 좋은 예시가 있어서 <a href="https://namu.wiki/w/%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98" target="_blank" >링크</a>를 남겨두겠습니다.

```
어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.
"재귀함수가 뭔가요?"
"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어. 
마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지. 
그의 답은 대부분 옳았다고 하네.
그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.
    "재귀함수가 뭔가요?"
    "잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을..
```

## 재귀함수에서 종료조건은 필수!
재귀함수의 종료 조건(Base Case)에 대해서 고려를 하고 작성을 해야 합니다. 

종료 조건을 제대로 작성해주지 않으면 무한 루프에 빠지게 됩니다. Intellij에서 Java로 재귀함수의 종료조건을 작성해주지 않으면 `Exception in thread "main" java.lang.StackOverflowError` 와 같은 예외를 던지게 됩니다.

## 재귀함수 문제 1
입력되는 N을 1부터 N까지 출력을 반복문을 통해서 할 수 있지만, 재귀함수를 이용해서 해결해보겠습니다.

다른 여타 프로그램과 재귀함수도 스택 프레임에 데이터가 저장이 됩니다.

```
▣ 문제
자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.
 
▣ 입력설명
첫 번째 줄은 정수 N(3<=N<=10)이 입력된다.

▣ 출력설명
첫째 줄에 출력한다.

▣ 입력예제 1 
3

▣ 출력예제 1
1 2 3 
```

* Main.java
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

    public void recursive(int n) {

        if (n == 0) return; // 종료조건!

        recursive(n - 1);
        System.out.print(n + " ");
    }

    public static void main(String[] args) throws IOException {

        Main T = new Main();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        T.recursive(n);
    }
}
```

만약 n이 3으로 입력이 된다면 recursive(3)로 시작을 해서 다음과 같은 흐름으로 n == 0 만날때 까지 진행되며 return이 됩니다.
* recursive(3)
* recursive(2)
* recursive(1)
* recursive(0) => if (n == 0)이면 return이기에 스택 프레임에서 pop()을 하게 됩니다.


**스택 프레임에 어떻게 push()가 되고, pop()이 되는지 알아보도록 하겠습니다.**

첫 번째로 recursive(3) 메소드를 만나게 되면 스택 프레임에 가장 밑에 push()가 됩니다.
|Stack Frame|
|:---:|
|recursive(3)|


두 번째로 recursive(3 - 1)으로 recursive(2)이기에 위에 push()가 됩니다.
|Stack Frame|
|:---:|
|recursive(2)|
|recursive(3)|


세 번째로 recursive(2 - 1)으로 recursive(1)이기에 위에 push()가 됩니다.
|Stack Frame|
|:---:|
|recursive(1)|
|recursive(2)|
|recursive(3)|


마지막 recursive(1 - 1)으로 recursive(0)이기에 위에 push()가 됩니다.
|Stack Frame|
|:---:|
|recursive(0)|
|recursive(1)|
|recursive(2)|
|recursive(3)|


**현재 n의 값이 0이기에 종료조건인 if (n == 0) true가 됩니다. 그래서 return;이 실행되고 스택 프레임에서 recursive(0)를 pop() 하게 됩니다.**
|Stack Frame|
|:---:|
|recursive(1)|
|recursive(2)|
|recursive(3)|


다음은 스택 프레임에 담긴 recursive(1)을 pop()해서 사용하게 되고 Last Line Number인 `System.out.print(n + " ");`출력하고 종료하게 됩니다. 

|Stack Frame|
|:---:|
|recursive(2)|
|recursive(3)|

이러한 방식으로 recursive(3)을 pop()할 때까지 진행하게 되면 `1 2 3`을 호출하고 종료하게 됩니다.

|Stack Frame|
|:---:|
|recursive(3)|

|Stack Frame|
|:---:|
||

**위의 과정들을 정리하면 다음 표와 같습니다.**
|Stack Frame|Last line Number|Output|
|:---:|:---:|:---:|
|recursive(0)|return;||
|recursive(1)|System.out.print(n + " ");|1|
|recursive(2)|System.out.print(n + " ");|2|
|recursive(3)|System.out.print(n + " ");|3|

## 결론
* 재귀함수란 자기 자신을 호출하는 함수입니다.
* 재귀함수에 종료조건을 꼭 필수입니다!
* 재귀함수는 여타 프로그램과 같이 스택 프레임의 데이터 영역에 저장되고 사용되어집니다.
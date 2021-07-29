# Scanner와 BufferedReader

## Java의 입력 받는 방식
Java를 처음 배울때는 주로 사용한 입력 방식은 `Scanner`를 사용해서 콘솔에서 입력을 받았습니다.

알고리즘을 진행하다보니 `Scanner`클래스로 하면 시간 초과가 나는 경우가 많아서 찾아보니 `BufferedReader`클래스를 통해서 입력을 받는 방법이 있습니다.

`Scanner`클래스와 `BufferedReader`클래스를 정리해보겠습니다.

## Scanner란?
`Scanner`란 콘솔로 부터 사용자의 입력을 공란과 줄바꿈을 모두 입력값의 경계로 인식해 데이터를 좀 더 쉽게 입력받을 수 있는 클래스입니다.

데이터 타입이 입력 받는 시점에서 결정되므로 따로 형변환이 필요하지 않다. (문자열 파싱 X)

<a href="https://www.geeksforgeeks.org/scanner-class-in-java" target="_blank" >GeeksforGeeks</a> 사이트에서 Scanner 클래스의 설명은 아래와 같습니다.

> Scanner is a class in java.util package used for obtaining the input of the primitive types like int, double, etc. and strings

간략하게 "원시타입인 int, double 등, string을 입력받는 클래스이다."

Scanner의 사용법은 아래와 같이 객체를 생성해서 사용합니다.
* ScannerTest.java
```java
import java.util.Scanner;

public class ScannerTest{

    public static void main(String[] args){
        Scanner scanner = new Scanner();

        System.out.print("숫자를 입력하세요 : ");
        int number = scanner.nextInt();
        
        System.out.println(number); 
    }
}
```

## BufferedReader?란?
`InputStreamReader`는 문자열을 Character 단위(한 글자)로 읽어 들입니다.
이 점을 보완하고자 `BufferedReader`가 존재합니다.
`BufferedReader`는 `InputStreamReader`에 버퍼링 기능이 추가된 클래스입니다.

사용자가 요청할 때마다 데이터를 읽어 오는 것이 아닌 일정한 크기의 데이터를 한번에 읽어와 버퍼에 보관하고 사용자가 요청을 하면 버퍼에서 데이터를 읽어오는 방식으로 동작합니다.

더 큰 버퍼를 사용하기에 `Scanner`보다 성능면에서 더 빠르고 부하가 적습니다.


<a href="https://www.geeksforgeeks.org/java-io-bufferedreader-class-java/" target="_blank" >GeeksforGeeks</a> 사이트에서 BufferedReader 클래스의 설명은 아래와 같다.

> Reads text from a character-input stream, buffering characters so as to provide for the efficient reading of characters, arrays, and lines.

"문자 입력 스트림에서 텍스트를 읽고 문자, 배열 등을 효율적으로 읽을 수 있도록 버퍼링하는 클래스이다."


```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BufferedReaderTest{

    public static void main(String[] args) throws IOException { // BufferedReader를 구현하면 IOException을 처리해줘야 한다.

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        System.out.print("숫자를 입력하세요 : ");
        String s = br.readLine();
        int number = Integer.parseInt(s); // BufferedReader를 통해서 입력받으면 String으로 읽을 수 있게 래퍼 클래스로 알맞게 형변환해줘야 한다.
        
        System.out.println(number); 

    }
}
```

## Scanner와 BufferedReader의 차이점은?
Scanner와 BufferedReader의 차이점은 다음과 같습니다.

||BufferedReader|Scanner|
|:---:|:---:|:---:|
|Buffer Size|8192|1024|
|Syncronized(동기화)|O|X|
|문자열 파싱|문자열로 단순히 읽어 들임|문자열 파싱 가능|
|Exception|IOException 던짐|IOException 숨김|

* 버퍼 사이즈
    * BufferReader의 경우는 Scanner보다 더 큰 Buffer Size를 가지고 있기에 속도가 더 빠릅니다.
* 문자열 파싱
    * Scanner의 경우는 사용자가 값을 입력할 때 데이터 타입이 결정되기에 문자열 파싱이 이뤄집니다.
    * BufferedReader의 경우에는 문자열 파싱을 하지 않고 단순히 문자열로 읽어들이기에 속도가 더 빠릅니다.

## 결론
상황에 맞게 적절한 클래스를 사용하면 되고, 알고리즘 문제를 풀 때 성능을 높여야 한다면 버퍼의 사이즈가 더 커서 속도가 빠른 `BufferedReader`클래스를 사용하면 됩니다. 
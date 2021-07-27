# StringBuffer 클래스

## StringBuffer 클래스란?
* String처럼 `문자열 배열(char[])`을 내부적으로 가지고 있다.

```java
public final class StringBuffer implements java.io.Serializable {
    private char[] value;
}
```

* 그러나, `String(immtuable == 불변)`과 달리 내용을 변경할 수 있다.`(mutable == 가변)`

```java
StringBuffer sb = new StringBuffer("abc");

sb.append("123"); // String과는 달리 새로운 힙 공간에 생기지 않고 "abc"값의 뒤에 추가된다. => 즉, 내용이 변경이 가능하다
```

* StringBuffer는 저장할 문자열의 길이를 고려해서 적절한 크기로 생성해야한다.
    * 버퍼의 크기를 지정하지 않으면 StringBuffer클래스에서 지정한 16인 기본 사이즈로 설정이 된다.

```java
public StringBuffer(int length){
    value = new char[length];
    shared = false;
}

public StringBuffer(){
    this(16);
}

public StringBuffer(String str){
    this(str.length() + 16); // 지정한 문자열의 길이보다 16이 더 크게 버퍼를 생성
    append(str);
}
```

## StringBuffer의 변경
StringBuffer는 String과 달리 내용 변경이 가능하다.

* `append()`는 지정된 내용을 StringBuffer에 추가 후, StringBuffer의 참조를 반환
    * 반환 타입이 StringBuffer이기에 체인(chain) 형식으로 사용이 가능하다.

```java
StringBuffer sb1 = new StringBuffer("abc");
sb1.append("123");
sb1.append("zz");

// ======================================== //
// 위의 방식을 아래와 같이 사용이 가능하다.
// ======================================== //

StringBuffer sb2 = new StringBuffer("abc");
sb2.append("123").append("zz"); // 반환 타입이 객체 자기 자신의 주소이기에 가능
```

## StringBuffer의 비교
* StringBuffer는 equals()가 오버라이딩되어 있지 않다. (Object와 같이 주소 비교이다.)
    * Ex) this == obj

```java
StringBuffer sb1 = new StringBuffer("abc");
StringBuffer sb2 = new StringBuffer("abc");

System.out.println(sb1 == sb2);      // false
System.out.println(sb1.equals(sb2)); // false
```

* StringBuffer를 비교하려면 String으로 변환해서 equals()로 비교해야 한다.

```java
String s1 = sb1.toString(); // "abc"
String s2 = sb2.toString(); // "abc"

System.out.println(s1.equals(s2)); // true
```

## String과 StringBuffer의 차이점
1. String은 불변(immutable)이고, StringBuffer는 가변(mutable)이다.
    * String은 불변이기에 변경이 잘 일어나지 않을 때 용이 
    * StringBuffer는 가변형이기에 값 추가, 수정, 삭제 등 연산에 용이하다.
2. String은 생성 시 힙 영역에 새로운 String 인스턴스를 만들어서 저장이 되지만, StringBuffer는 버퍼를 사용해서 힙 영역에 기존 값이 있으면 값 뒤에 추가된다.





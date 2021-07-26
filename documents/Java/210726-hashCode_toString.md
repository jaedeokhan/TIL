# hashCode()와 toString()

## hashCode()란??
객체의 `해시코드(hash code) == 정수`를 반환하는 메서드이다. 

* Object클래스의 hashCode()는 객체의 주소를 int로 변환해서 반환

```java
public class Object {
    
    public native int hashCode(); // native 언어는 내용이 없다
}
```

* 네이티브 메서드 == OS의 메서드(C언어) 
    * c언어로 작성된 것을 자바로 작성한 것처럼 사용이 가능!
* 객체의 지문이라고도 한다.
    - 객체마다 다른 값을 가지고 있기 때문
* `equals()`를 오버라이딩하면, `hashCode()`도 오버라이딩해야 한다.
    * `equals()`의 결과가 true이면 두 객체의 해시코드는 같아야 하기 때문이다.

```java
String str1 = new String("test01");
String str2 = new String("test02");
System.out.println(str1.equals(str2));  // true
System.out.println(str1.hashCode());    // 96354
System.out.println(str2.hashCode());    // 96354
```

* System.identityHashCode(Object obj)는 Object클래스의 hashCode()와 동일
    * 객체마다 다른 해시코드를 반환

```java
System.out.println(System.identityHashCode(str1)); // 3526198
System.out.println(System.identityHashCode(str1)); // 7699183
```

* 32Bit JVM에서는 주소값이 int(4 Byte)
* 64Bit JVM에서는 주소값이 Long(8 Byte)
    * 주소값이 겹칠수도 있다

## toString()이란?
객체를 문자열(String)으로 변환하기 위한 메서드이다.

```java
public String toString() { // Object클래스의 toString()
    return getClass.getName() + "@" + Integer.toHexString(hashCode());
}
```

## Card, Person, Ex9_4 예제 코드

### toString() 오버라이딩 전
Card.class에서 toString()을 오버라이딩을 하지 않으면 객체@hexCode가 나온다.

* Card.java
```java
class Card {
    String kind;
    int number;

    Card(){
        this("SPACE", 1);
    }

    Card(String kind, int number){
        this.kind = kind;
        this.number = number;
    }
}
```

* Ex9_4.java
```java
public class Ex9_4 {
    public static void main(String[] args) {
        Card c1 = new Card();
        Card c2 = new Card();

        System.out.println(c1.toString()); // Card@49e4cb85
        System.out.println(c2.toString()); // Card@2133c8f8
    }
}
```

### toString() 오버라이딩 후
* Card.java

위의 Card 클래스와 toString()만 다르고 동일
```java
class Card {
    ...
    // Object클래스의 toString()을 오버라이딩!
    public String toString(){
        return "kind : " + kind + ", number :" + number;
    }
}
```

* Ex9_4.java

오버라이딩 전에 `Card@49e4cb85`값이 나오는 것보다 인스턴스 변수를 출력해주는게 어떤 정보가 들어있는지 직관성이 더 좋다.
```java
public class Ex9_4 {
    public static void main(String[] args) {
        Card c1 = new Card();
        Card c2 = new Card();

        System.out.println(c1.toString()); // kind : SPACE, number :1
        System.out.println(c2.toString()); // kind : SPACE, number :1
    }
}
```

### equals()를 오버라이딩
* Card.java

kind는 String이기에 equals()로 동등성 비교를 해준다.
```java
class Card {
    ...
    public boolean equals(Object obj){
        if (!(obj instanceof Card)) return false;

        Card c = (Card)obj;
        return this.kind.equals(c.kind) && this.number == c.number;
    }
}
```

* Ex9_4.java

Card 클래스에서 오버라이딩을 한 equals()를 사용하면 true가 정상적으로 나온다.
```java
public class Ex9_4 {
    public static void main(String[] args) {
        Card c1 = new Card();
        Card c2 = new Card();

        System.out.println(c1.equals(c2)); // true
        System.out.println(c1.toString()); // Card@49e4cb85
        System.out.println(c2.toString()); // Card@2133c8f8
    }
}
```

### hashCode()를 오버라이딩
* Card.java

```java
class Card {
    ...
    // equals()를 오버라이딩하면 hashCode()도 오버라이딩 해야한다.
    public int hashCode() {
        return Objects.hash(kind, number); // hash()는 가변인자(...)이기에 필요한 인스턴스를 넣으면 된다.
    }
}
```

* Ex9_4.java

```java
public class Ex9_4 {
    public static void main(String[] args) {
        Card c1 = new Card();
        Card c2 = new Card();

        System.out.println(c1.equals(c2)); // true
        System.out.println(c1.toString()); // Card@49e4cb85
        System.out.println(c2.toString()); // Card@2133c8f8

        // equals()가 true일때는 hashCode가 동일하게 나온다.
        System.out.println(c1.hashCode()); // -1842862180
        System.out.println(c2.hashCode()); // -1842862180
    }
}
```

## 전체코드

* Card.java
```java
import java.util.Objects;

class Card {
    String kind;
    int number;

    Card(){
        this("SPACE", 1);
    }

    Card(String kind, int number){
        this.kind = kind;
        this.number = number;
    }

    // equals()를 오버라이딩하면 hashCode()도 오버라이딩 해야한다.
    public int hashCode() {
        return Objects.hash(kind, number);
    }

    public boolean equals(Object obj){
        if (!(obj instanceof Card)) return false;

        Card c = (Card)obj;
        return this.kind.equals(c.kind) && this.number == c.number;
    }

    // Object클래스의 toString()을 오버라이딩!
    public String toString(){
        return "kind : " + kind + ", number :" + number;
    }

}
```

* Ex9_4.java
```java
public class Ex9_4 {
    public static void main(String[] args) {
        Card c1 = new Card();
        Card c2 = new Card();

        System.out.println(c1.equals(c2)); // true
        System.out.println(c1.toString()); // Card@49e4cb85
        System.out.println(c2.toString()); // Card@2133c8f8

        // equals()가 true일때는 hashCode가 동일하게 나온다.
        System.out.println(c1.hashCode()); // -1842862180
        System.out.println(c2.hashCode()); // -1842862180
    }
}

```




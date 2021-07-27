# join()과 StringJoiner

## join()이란?
join()은 여러 문자열 사이에 구분자를 넣어서 결합한다.

```java
String animals = "dog,cat,bear";
String[] arr = animals.split(","); 
String str = String.join("-", arr); // 하이픈(-)을 arr에 각각 사이에 넣어준다.
System.out.println(str); // dog-cat-bear
```

## StringJoiner()란?
Java 8부터 추가된 StringJoiner는 여러 문자들을 연결할 때 붙일 구분자(delimeiter)를 지정해줄 수 클래스이다.

### StringJoiner()를 사용하지 않고 처음(prefix), 중간, 마지막(suffix)에 값을 추가하는방법
"마린", "탱크", "벌쳐", "레이스", "배틀크루저"와 같은 다섯 개의 String 값을 [마린-탱크-벌쳐-레이스-배틀크루저] 와 같이 하이픈(-)을 StringJoiner를 사용하지 않고 추가해보겠습니다.

아래 예시에서는 StringBuffer를 사용해서 units 배열에 맨 앞과 마지막 값일때는 하이픈(-)을 넣어주면 안되니 continue를 진행하고 직접 추가해서 해결을 했습니다.

해당 방식으로 해결을 해도 되지만, 코드의 수가 길어지고 직관성도 좋지 않아집니다.

```java
import java.util.StringJoiner;

public class StringJoinerTest {

    public static void main(String[] args) {

        String[] units = {"마린", "탱크", "벌쳐", "레이스", "배틀크루저"};
        StringBuffer stringBuffer = new StringBuffer();

        stringBuffer.append("[");

        for (int i = 0; i < units.length; i++){
            stringBuffer.append(units[i]);

            if (i == 0 || i == units.length - 1){ // i가 0과 units의 마지막 값이라면
                continue;
            }
            stringBuffer.append("-");
        }

        stringBuffer.append("]");

        System.out.println(stringBuffer.toString()); // [마린-탱크-벌쳐-레이스-배틀크루저]
    }
}
```

### StringJoiner()를 사용해서 처음(prefix), 중간, 마지막(suffix)에 값을 추가하는방법
StringJoiner의 생성자 파라미터는 `StringJoiner(CharSequence delimiter,CharSequence prefix, CharSequence suffix)` 다음과 같이 구성되어 있다.

StringJoiner()를 사용하지 않는 방식보다 확연히 코드의 수가 줄어들고 직관적으로 보인다.

```java
import java.util.StringJoiner;

public class StringJoinerTest {

    public static void main(String[] args) {

        String[] units = {"마린", "탱크", "벌쳐", "레이스", "배틀크루저"};

        // StringJoiner(delimeter, prefix, suffix);
        StringJoiner stringJoiner = new StringJoiner("-", "[", "]");

        for (String unit : units){
            stringJoiner.add(unit);
        }

        System.out.println(stringJoiner.toString()); //[마린-탱크-벌쳐-레이스-배틀크루저]
    }
}
```
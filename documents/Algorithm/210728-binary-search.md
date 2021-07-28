# 이분검색(Binary Search)

## 순차검색(Sequential Search)이란?
이분검색을 알기전에 가장 기본적인 탐색 방법인 순차검색을 알 필요가 있습니다.
순차검색이란 단어 그대로 하나씩 순차적으로 확인을 해보면서 탐색하는 방식입니다.

* values 배열에서 5라는 값을 찾기 위해서는 i = 0부터 values.length - 1까지 반복문을 돌면서 찾아야합니다. i = 9인 제일 마지막일 때 찾을 수 있습니다.
    * 시간복잡도는 O(n)입니다.

```java
import java.util.Arrays;

public class SequentialSearch{

    public int solution(int n, int m, int values){

        int answer = 0;

        Arrays.sort(values);

        for (int i = 0; i < values.length - 1; i++){
            if (values[i] == 10){
                answer = i + 1; 
                break;
            }
        }

        return answer;
    }

    public static void main(String[] args){
        
        SequentialSearch T = new SequentialSearch();
        int answer = 0;
        int N = 10, M = 5;
        int values = {1, 8, 3, 2, 4, 7, 6, 9, 5, 10};

        System.out.println(T.solution(N, M, values)); // 10
    }
}
```

순차적으로 확인하면 되기에 방법은 단순하지만, 하나씩 처음부터 계속 찾아야 하기에 values의 크기가 커질수록 비효율적이게 됩니다.

## 이진검색(Binary Search)이란?
순차검색보다 더 빠르고 효율적인 방법이 이진검색입니다.
이름에서 볼 수 있듯이 절반씩 나눠서 탐색하는 방법입니다.

* 중요한 점은 이진탐색은 `꼭` 정렬이 되어 있어야 가능합니다.
* 총 4번만에 찾을 수 있습니다. 최악의 경우에도 순차검색보다 확실히 빠른 것을 알 수 있습니다.
* 시간복잡도는 O(n log n)입니다. 
    
### 문제 
임의의 N개의 숫자가 입력으로 주어집니다. N개의 수를 오름차순으로 정렬한 다음 N개의 수 
중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 
프로그램을 작성하세요. 
```java
import java.util.Arrays;

public class BinarySearch{

    public int solution(int n, int m, int values){

        int left = 0  // 좌측
        int right = values.length - 1; // 우측

        Arrays.sort(values); // 이진탐색은 정렬이 되어 있어야 한다.

        while (left <= right){ 
            int middle = (left + right) / 2; // 배열의 중간의 인덱스 
            
            if (values[middle] == m){  // values[middle]과 m이 같은 값이면
                answer = middle + 1; // m과 동일하면 middle인덱스의 값 + 1
                break;
            }

            if (values[middle] > m){  // values[middle]이 m보다 크다면?  
                // m은 values[middle]보다 더 작은 값이기에 right를 middle + 1로 당겨준다. 
                right = middle + 1;
            } else { // values[middle]이 m보다 작다면?
                // m은 values[middle]보다 더 큰 값이기에 left를 middle - 1로 당겨준다.
                left = middle - 1;
            }
        }
        return answer;
    }

    public static void main(String[] args){
        
        BinarySearch T = new BinarySearch();
        int answer = 0;
        int N = 10, M = 10;
        int values = {1, 8, 3, 2, 4, 7, 6, 9, 5, 10};

        System.out.println(T.solution(N, M, values)); // 10
    }
}
```

## 결론
* 순차검색은 하나씩 찾아서 탐색하는 방법이다.
    * 시간복잡도는 O(n)
* 이진검색은 반틈씩 나눠서 탐색하는 방법이다.
    * 시간복잡도는 O(n log n)


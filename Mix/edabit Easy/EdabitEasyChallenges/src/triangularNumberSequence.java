// Triangular Number Sequence
// https://edabit.com/challenge/4kEHkvobTA4i6AQRE

public class triangularNumberSequence {
    public static int triangle(int n) {
        //int newArray[] = {1, 3, 6, 10, 15, 21};
		//int numberSelected = n;

        if(n <= 1) {
            return 1;
        } else {
            return n + (triangle(n-1));
        }
    }

    public static void main(String[] args) {
        triangularNumberSequence obj = new triangularNumberSequence();
        System.out.println(obj.triangle(3));
    }    
}

// n-1 = n
// 3 = 2 - 1
// 10 = 9 - 1
// 9  = 8 - 1
// 8  = 7 - 1

//              O                  1        1
//             0 0                 3        1+2
//            0 0 0                6        1+2+3   
//           0 0 0 0               10       1+2+3+4  
//          0 0 0 0 0
//         0 0 0 0 0 0 


// 4 + function(4-1)



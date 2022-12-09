public class HowMuchIsTrue {
    public static int countTrue(boolean[] arr) {
		int arrayAcumulator = 0;
		for(int i=0; i < arr.length; i++){
			if(arr[i] == true){
				arrayAcumulator += 1;
			}
		}
		return arrayAcumulator;
	}

    public static void main(String[] args) {
        HowMuchIsTrue obj = new HowMuchIsTrue();
        boolean a[] = {false, false, false};
        System.out.println(obj.countTrue(a));
    }   
}

package Interface_Assignment;

public class Speaker implements RemoteControl {

    @Override
    public void powerOn() {
        System.out.println("Speaker is now ON.");
    }

    @Override
    public void powerOff() {
        System.out.println("Speaker is now OFF.");
    }

    @Override
    public void increaseVolume() {
        System.out.println("Speaker volume increased.");
    }

    @Override
    public void decreaseVolume() {
        System.out.println("Speaker volume decreased.");
    }
}
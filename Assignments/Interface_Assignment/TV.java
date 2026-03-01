package Interface_Assignment;

public class TV implements RemoteControl {

    @Override
    public void powerOn() {
        System.out.println("TV is now ON.");
    }

    @Override
    public void powerOff() {
        System.out.println("TV is now OFF.");
    }

    @Override
    public void increaseVolume() {
        System.out.println("TV volume increased.");
    }

    @Override
    public void decreaseVolume() {
        System.out.println("TV volume decreased.");
    }
}
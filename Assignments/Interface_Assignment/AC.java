package Interface_Assignment;

public class AC implements RemoteControl {

    @Override
    public void powerOn() {
        System.out.println("AC is now ON.");
    }

    @Override
    public void powerOff() {
        System.out.println("AC is now OFF.");
    }

    @Override
    public void increaseVolume() {
        System.out.println("AC cooling increased.");
    }

    @Override
    public void decreaseVolume() {
        System.out.println("AC cooling decreased.");
    }
}
package Interface_Assignment;

public class SmartDeviceDemo {

    public static void main(String[] args) {

        RemoteControl device;

        System.out.println("=== TV Control ===");
        device = new TV();
        device.powerOn();
        device.increaseVolume();
        device.decreaseVolume();
        device.powerOff();

        System.out.println("\n=== AC Control ===");
        device = new AC();
        device.powerOn();
        device.increaseVolume();
        device.decreaseVolume();
        device.powerOff();

        System.out.println("\n=== Speaker Control ===");
        device = new Speaker();
        device.powerOn();
        device.increaseVolume();
        device.decreaseVolume();
        device.powerOff();
    }
}
// Scope and Closure Java Example

public class User {
    private String name;
    private List<String> interests;

    public User (String name, List<String> interests) {
        this.name = name;
        this.interests = interests;
    }

    // Check if a user is interested in something
    public boolean isInterestedIn(String something) {
        boolean interested = false;
        for (int i = 0; i < interests.size(); i++) {
            if (interests.get(i).equals(something)) {
                interested = true;
                break;
            }
        }
        return interested;
    }
}
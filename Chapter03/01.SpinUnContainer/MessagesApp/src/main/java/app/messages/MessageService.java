package app.messages;

public class MessageService {

  private MessageRepository repository;

  public MessageService (MessageRepository repository) {
    this.repository = repository;
  }

  public void save(String text) {
    this.repository.saveMessage(new Message(text));
  }
}

package app.messages;

import org.springframework.stereotype.Component;

@Component
public class MessageService {

  private MessageRepository repository;

  public MessageService (MessageRepository repository) {
    this.repository = repository;
  }

  public void save(String text) {
    this.repository.saveMessage(new Message(text));
  }
}

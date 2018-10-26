package app.messages;

import java.util.Date;
import java.util.Objects;

public class Message {

  // For unsaved message, the id will be null
  private Integer id;
  private String text;
  private Date createdDate;

  public Message(String text) {
    this.text = text;
    this.createdDate = new Date();
  }

  public Message(int id, String text, Date createdDate) {
    this.id = id;
    this.text = text;
    this.createdDate = createdDate;
  }

  public Integer getId() {
    return id;
  }

  public String getText() {
    return text;
  }

  public Date getCreatedDate() {
    return createdDate;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Message message = (Message) o;
    return Objects.equals(id, message.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }
}

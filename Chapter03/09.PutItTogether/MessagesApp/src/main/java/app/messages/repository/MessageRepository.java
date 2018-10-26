package app.messages.repository;

import app.messages.model.Message;
import java.util.List;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MessageRepository {

  private SessionFactory sessionFactory;

  public MessageRepository(SessionFactory sessionFactory) {
    this.sessionFactory = sessionFactory;
  }

  public Message saveMessage(Message message) {
    Session session = sessionFactory.getCurrentSession();
    session.save(message);
    return message;
  }

  public List<Message> getMessages() {
    Session session = sessionFactory.getCurrentSession();
    String hql = "from Message";
    Query<Message> query = session.createQuery(hql, Message.class);
    return query.list();
  }
}

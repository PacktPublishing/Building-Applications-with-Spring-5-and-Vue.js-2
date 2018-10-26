package app.messages;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Application {
  public static void main(String[] args) {
    ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
    MessageService messageService = context.getBean(MessageService.class);
    messageService.save("Hello, Spring!");
  }
}

package app.messages.config;

import app.messages.service.MessageService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppServiceConfig {
  @Bean
  MessageService createService() {
    return new MessageService();
  }
}

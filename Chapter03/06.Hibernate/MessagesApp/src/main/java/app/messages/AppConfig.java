package app.messages;

import java.util.Arrays;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

import javax.sql.DataSource;

@Configuration
@ComponentScan("app.messages")
public class AppConfig {

  private DataSource dataSource;

  public AppConfig(DataSource dataSource) {
    this.dataSource = dataSource;
  }

  @Bean
  public FilterRegistrationBean<AuditingFilter> auditingFilterRegistrationBean() {
    FilterRegistrationBean<AuditingFilter> registration = new FilterRegistrationBean<>();
    AuditingFilter filter = new AuditingFilter();
    registration.setFilter(filter);
    registration.setOrder(Integer.MAX_VALUE);
    registration.setUrlPatterns(Arrays.asList("/messages/*"));
    return registration;
  }

  @Bean
  public LocalSessionFactoryBean sessionFactory() {
    LocalSessionFactoryBean sessionFactoryBean = new LocalSessionFactoryBean();
    sessionFactoryBean.setDataSource(dataSource);
    sessionFactoryBean.setPackagesToScan("app.messages");
    return sessionFactoryBean;
  }

}

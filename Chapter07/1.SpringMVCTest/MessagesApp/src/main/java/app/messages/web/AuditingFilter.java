package app.messages.web;

import java.io.IOException;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.filter.GenericFilterBean;

public class AuditingFilter extends GenericFilterBean {
  @Override
  public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
      throws IOException, ServletException {
    HttpServletRequest request = (HttpServletRequest) req;
    long start = new Date().getTime();
    chain.doFilter(req, res);
    long elapsed = new Date().getTime() - start;
    logger.debug("Request[uri=" + request.getRequestURI() + ", method=" +
      request.getMethod() + "] completed in " + elapsed + " ms");
  }
}

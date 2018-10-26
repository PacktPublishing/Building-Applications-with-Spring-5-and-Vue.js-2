package app.messages.web;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.hamcrest.core.Is.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import app.messages.model.Message;
import app.messages.service.MessageService;

@RunWith(SpringRunner.class)
@WebMvcTest(MessageController.class)
public class MessageControllerTest {

  @Autowired
  private MockMvc mvc;

  @MockBean
  private MessageService service;

  @Test
  public void getMessages_existingMessages_shouldReturnJsonArray() throws Exception {
    Message firstMessage = new Message("First Message");
    List<Message> allMessages = Arrays.asList(firstMessage);
    when(service.getMessages()).thenReturn(allMessages);
    mvc.perform(get("/api/messages").contentType(MediaType.APPLICATION_JSON))
    .andExpect(status().isOk())
    .andExpect(jsonPath("$", hasSize(1)))
    .andExpect(jsonPath("$[0].text", is(firstMessage.getText())));
  }
}

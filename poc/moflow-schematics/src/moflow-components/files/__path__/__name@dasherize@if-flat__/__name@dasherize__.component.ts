import { Component } from '@angular/core';

@Component({
    selector: '<%= selector %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']
})
export class <%= classify(name) %>Component {
  <% if(code) { %>
  hello() {

  }
  <% } %>
  <% if(componentCode) { %>
    <%= indentTextContent(componentCode, 4) %>
  <% } %>
}

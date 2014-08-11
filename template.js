
var templString = [
  <% _.each(prof_data, function(element, index, list){ %>
      <img style="width:200px;" src="<%= element.avatar_url %>">
      <h1><%= element.name %></h1>
      <h3><%= element.login %></h3>
      <ul ="prof_info">
        <li><%= element.company %></li>
        <li><%= element.location %></li>
        <li><a href="mailto:<%= element.email %>"><%= element.email %></a></li>
        <li><%= element.created_at %></li>
      </ul>

      <ul>
        <li><a href="<%= element.followers_url %>"><%= element.followers %></a></li>
        <li><a href="<%= element.starred_url %>"><%= element.starred %></a></li>
        <li><a href="<%= element.following_url %>"><%= element.followers %></a></li>
      </ul>

      <h2></h2>
      <div class="org_container">
        <img style="width:20px" src="<%= element.organizations_url %>">
      </div>
].join("");
